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

import {TemplateVariable} from '../../../common/types/grafana_types';
import {Result, success, warning} from '../../../common/result';

function getIntervalMapping(tv: TemplateVariable): Result<[string, string]> {
  if (tv.type !== 'interval') {
    return warning([
      `getIntervalMapping received type ${tv.type} instead of interval`,
    ]);
  }

  const name = tv.name;
  const options = tv.options || [];
  const tvCurrentValue =
    typeof tv.current?.value === "string" ? tv.current?.value : '';
  const selectedValue =
    options.filter((option) => option.selected)[0]?.value ||
    tvCurrentValue ||
    options[0]?.value;
  if (selectedValue === undefined) {
    return warning([`No suitable mapping found for template variable ${name}`]);
  }
  if (selectedValue.startsWith('$')) {
    return success([name, '${__interval}']);
  }
  return success([name, selectedValue]);
}
