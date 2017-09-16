"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_jars_1 = require("jec-jars");
const ResourceDescriptorRegistry_1 = require("../../metadata/ResourceDescriptorRegistry");
const ResourcePathSolver_1 = require("../../utils/ResourcePathSolver");
const STRING_TYPE = "string";
class ResourcePathDecorator {
    constructor() { }
    decorate(target, params) {
        let descriptor = ResourceDescriptorRegistry_1.ResourceDescriptorRegistry.getRegisteredDescriptor();
        let solver = new ResourcePathSolver_1.ResourcePathSolver();
        let path = null;
        if (!params) {
            throw new jec_jars_1.JarsError("ResourcePath error: 'path' parameter is missing for resource " +
                target);
        }
        else {
            if (typeof params === STRING_TYPE)
                path = String(params);
            else {
                if (!params.path) {
                    throw new jec_jars_1.JarsError("ResourcePath error: 'path' parameter is missing for resource " +
                        target);
                }
                else {
                    path = params.path;
                    descriptor.produces = params.produces || null;
                    descriptor.consumes = params.consumes || null;
                    descriptor.crossDomainPolicy = params.crossDomainPolicy || null;
                }
            }
        }
        solver.resolvePath(path, descriptor);
        return target;
    }
}
exports.ResourcePathDecorator = ResourcePathDecorator;
