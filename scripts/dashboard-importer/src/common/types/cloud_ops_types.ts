/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Types for the Cloud Ops Dashboard Spec

// Cloud Ops layout types enum
export enum Layout {
  MOSAIC = 'mosaic',
  GRID = 'grid',
}

// Cloud Ops Dashboard Type
export interface Dashboard {
  name?: string;
  displayName?: string;
  category?: DashboardCategory;
  etag?: string;
  gridLayout?: GridLayout;
  mosaicLayout?: MosaicLayout;
  dashboardFilters?: Array<DashboardFilter>;
  labels?: Record<string, string>;
}

// Cloud Ops Dashboard Categories
export type DashboardCategory =
  | 'CATEGORY_UNSPECIFIED'
  | 'CUSTOM'
  | 'GROUP'
  | 'HOMEPAGE'
  | 'CUSTOMIZED_CURATION';

// Cloud Ops Dashboard filters & Template Variables
export interface DashboardFilter {
  labelKey?: string;
  templateVariable?: string;
  stringValue?: string;
  filterType?: DashboardFilterFilterType;
}

// Cloud Ops Dashboard Filter Types
export type DashboardFilterFilterType =
  | 'FILTER_TYPE_UNSPECIFIED'
  | 'RESOURCE_LABEL'
  | 'METRIC_LABEL'
  | 'USER_METADATA_LABEL'
  | 'SYSTEM_METADATA_LABEL'
  | 'GROUP';

// Cloud Ops Dashboard Grid Layout Type
export interface GridLayout {
  columns?: string;
  widgets?: Array<Widget>;
}

// Cloud Ops Dashboard Mosaic Layout Type
export interface MosaicLayout {
  columns?: number;
  tiles?: Array<Tile>;
}

// Cloud Ops Dashboard Tile Type
export interface Tile {
  xPos?: number;
  yPos?: number;
  width?: number;
  height?: number;
  widget?: Widget;
}

// Cloud Ops Dashboard Widget Type
export interface Widget {
  title?: string;
  xyChart?: XyChart;
  pieChart?: PieChart;
  scorecard?: Scorecard;
  text?: Text;
  timeSeriesTable?: TimeSeriesTable;
}

// Cloud Ops Dashboard Expression Type
export interface Expression {
  expression: string;
  legend: string;
}

interface TimeSeriesTable {
  dataSets?: Array<TableDataSet>;
  columnSettings?: Array<ColumnSettings>;
  metricVisualization?: 'METRIC_VISUALIZATION_UNSPECIFIED' | 'NUMBER' | 'BAR';
}
interface ColumnSettings {
  column?: string;
  visible?: boolean;
}

interface TableDataSet {
  timeSeriesQuery?: TableTimeSeriesQuery;
  tableTemplate?: string;
  minAlignmentPeriod?: string;
  outputFullDuration?: boolean;
}
interface TableTimeSeriesQuery {
  prometheusQuery?: string;
}

// Cloud Ops Dashboard Widget XYChart Type
export interface XyChart {
  dataSets?: Array<DataSet>;
}

// Cloud Ops Plot Type for XYChart Datasets
export type DataSetPlotType =
  | 'PLOT_TYPE_UNSPECIFIED'
  | 'LINE'
  | 'STACKED_AREA'
  | 'STACKED_BAR'
  | 'HEATMAP';

// Cloud Ops Datasets for XYCharts
export interface DataSet {
  timeSeriesQuery?: TimeSeriesQuery;
  plotType?: DataSetPlotType;
  legendTemplate?: string;
  minAlignmentPeriod?: string;
}

// Cloud Ops TimeSeriesQuery for XYCharts
export interface TimeSeriesQuery {
  timeSeriesQueryLanguage?: string;
  prometheusQuery?: string;
  unitOverride?: string;
  outputFullDuration?: boolean;
}

// Cloud Ops Scorecard Widget Type
interface Scorecard {
  timeSeriesQuery?: TimeSeriesQuery;
  gaugeView?: GaugeView;
  sparkChartView?: SparkChartView;
  thresholds?: Array<Threshold>;
}

interface SparkChartView {
  sparkChartType?: SparkChartViewSparkChartType;
  minAlignmentPeriod?: string;
}

// Different Spark Chart Types
export type SparkChartViewSparkChartType =
  | 'SPARK_CHART_TYPE_UNSPECIFIED'
  | 'SPARK_LINE'
  | 'SPARK_BAR';

interface GaugeView {
  lowerBound?: number;
  upperBound?: number;
}

interface Threshold {
  label?: string;
  value?: number;
  color?: ThresholdColor;
  direction?: ThresholdDirection;
  targetAxis?: ThresholdTargetAxis;
}

type ThresholdColor =
  | 'COLOR_UNSPECIFIED'
  | 'GREY'
  | 'BLUE'
  | 'GREEN'
  | 'YELLOW'
  | 'ORANGE'
  | 'RED';
type ThresholdDirection = 'DIRECTION_UNSPECIFIED' | 'ABOVE' | 'BELOW';
type ThresholdTargetAxis = 'TARGET_AXIS_UNSPECIFIED' | 'Y1' | 'Y2';

// Cloud Ops Text Widget Type
interface Text {
  content?: string;
  format?: TextFormat;
  style?: TextStyle;
}

// Text Format Options for the Text Widget
export type TextFormat = 'FORMAT_UNSPECIFIED' | 'MARKDOWN' | 'RAW';

interface TextStyle {
  backgroundColor?: string;
  textColor?: string;
  // The below are actually typed more specifically in the codebase but further granuality unnecessary for importer
  horizontalAlignment?: string;
  verticalAlignment?: string;
  padding?: string;
  fontSize?: string;
  pointerLocation?: string;
}

interface PieChart {
  chartType: 'PIE' | 'DONUT';
  dataSets?: Array<DataSet>;
  unitOverride?: string;
}
