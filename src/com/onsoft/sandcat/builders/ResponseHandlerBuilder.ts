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

import {HttpRequest, HttpResponse} from "jec-exchange";
import {LogLevel} from "jec-commons";
import {SandcatLoggerProxy} from "../logging/SandcatLoggerProxy";

/**
 * A helper class that creates and returns a function used as callback handler
 * by <code>ResourceJsletProxy</code> implementations.
 */
export class ResponseHandlerBuilder {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ResponseHandlerBuilder</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The wrapper function used to send decorated messages to the output stream.
   * 
   * @param {string} message the message to decorate and to send to the output
   *                         stream.
   * @param {number} logLevel the log level of the message sent to the output
   *                          stream. Valid values are the constants of the
   *                          <code>LogLevel</code> class.
   */
  private sendMessage(message:string, logLevel?:number):void {
    SandcatLoggerProxy.getInstance().log(message, logLevel);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates and returns a new callback handler for a
   * <code>ResourceJsletProxy</code> implementation.
   * 
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                           transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   * @return {Function} a new callback handler function. 
   */
  public build(req:HttpRequest, res:HttpResponse,
          exit:(req:HttpRequest, res:HttpResponse, data:any) => void):Function {
    let handler:Function = (data?:any, err?:any, status?:number)=>{
        if(status) res.status(status);
        if(err) {
          //TODO: build a better error process:
          this.sendMessage("Sandcat error: " + err, LogLevel.ERROR);
        } else {
          //console.log(data)
          exit(req, res.send(data), null);
        }
      };
    return handler;
  }
};