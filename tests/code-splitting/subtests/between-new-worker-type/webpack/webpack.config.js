/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const path = require('path');

module.exports = {
  stats: 'minimal',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  resolveLoader: {
    alias: {
      omt: 'worker-plugin/loader?esModule',
    },
  },
  optimization: {
    splitChunks: {
      // extract shared dependencies from entry bundles:
      chunks: 'all',
      // allow any size dependency to be shared:
      minSize: 0,
    },
    // create a runtime.js script containing the module loader:
    // (without this, entry chunks dependencies must be loaded manually)
    runtimeChunk: 'single',
  },
};