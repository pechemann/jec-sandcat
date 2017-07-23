//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {Logger, LoggerProxy, AbstractLoggerProxy} from "jec-commons";

/**
 * A singleton that is used by Sandcat classes to send logs to a 
 * <code>Logger</code> object defined by the execution environement.
 */
export class SandcatLoggerProxy extends AbstractLoggerProxy
                                implements LoggerProxy {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>SandcatLoggerProxy</code> instance.
   */
  constructor() {
    super("[SANDCAT]");
    if(SandcatLoggerProxy._locked || SandcatLoggerProxy.INSTANCE) {
      this.throwSingletonError("SandcatLoggerProxy");
    }
    SandcatLoggerProxy._locked = true;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>SandcatLoggerProxy</code> singleton instance reference.
   */
  private static INSTANCE:SandcatLoggerProxy = null;

  /**
   * Prevents <code>SandcatLoggerProxy</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>SandcatLoggerProxy</code> singleton.
   * 
   * @return {LoggerProxy} a reference to the <code>SandcatLoggerProxy</code>
   *                       singleton.
   */
  public static getInstance():LoggerProxy{
    if(SandcatLoggerProxy.INSTANCE === null) {
      SandcatLoggerProxy._locked = false;
      SandcatLoggerProxy.INSTANCE = new SandcatLoggerProxy();
    }
    return SandcatLoggerProxy.INSTANCE;
  }
};