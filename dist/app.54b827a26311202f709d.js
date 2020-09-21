/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./environment/environment.dev.ts":
/*!****************************************!*\
  !*** ./environment/environment.dev.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = {
    ASSET_LOADING: 'LOCAL'
};


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./playground/src/bmw/bmw-demo.ts":
/*!****************************************!*\
  !*** ./playground/src/bmw/bmw-demo.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mv_webgl_core_1 = __webpack_require__(/*! mv-webgl-core */ "./src/index.ts");
var startRender = true;
var loadConfiguratorWithoutUserInteraction = true;
if (false) {}
var pageTitle = 'Monclear';
var assetsBaseUrl = 'assets/';
var detectMobileDevice = function () {
    var toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
    return toMatch.some(function (toMatchItem) {
        return navigator.userAgent.match(toMatchItem);
    });
};
var isMobileDevice = detectMobileDevice();
console.log('IS MOBILE DEVICE: ' + isMobileDevice);
// Car
var modelId = 'bmw';
var entityConfigNameDektop = 'Monclear_entity_config.json';
var entityConfigNameMobile = 'Monclear_entity_config.json';
var entityConfigName = isMobileDevice ? entityConfigNameMobile : entityConfigNameDektop;
// Env
var environmentsUrlsDesktop = ['env_abandonedHall_entity_config.json', 'greyroom_entity_config.json'];
var environmentsUrlsMobile = ['env_abandonedHall_entity_config.json', 'greyroom_entity_config_mobile.json'];
var environmentsUrls = isMobileDevice ? environmentsUrlsMobile : environmentsUrlsDesktop;
var environmentIds = ['abandonedHall_environment', 'abandonedHall_environment'];
var environmentConfigurationCodes = ['ext', 'int'];
var activeEnvironmentIndex = 0;
var environmentConfigCode = 'ext';
// Camera
var cameraShots = ['Monclear/cameras/eqc-camera-shot-ext.json', 'Monclear/cameras/eqc-camera-shot-int.json'];
var cameraShotIds = [];
var cameraShotIndex = 0;
var core;
var entityManager;
var cameraManager;
var environmentManager;
var configurationButtonsCar = [
    {
        id: 'carpaint01',
        label: 'Grey Paint',
        configurationProperty: 'carpaint',
        configurationCode: 'P0C36',
    },
    {
        id: 'carpaint02',
        label: 'White Paint',
        configurationProperty: 'carpaint',
        configurationCode: 'P0P67',
    },
    {
        id: 'leather01',
        label: 'Black Seats',
        configurationProperty: 'seats',
        configurationCode: 'FLKMI',
    },
    {
        id: 'leather02',
        label: 'Red Seats',
        configurationProperty: 'seats',
        configurationCode: 'FVAHZ',
    },
    {
        id: 'rims01',
        label: 'Black Rims',
        configurationProperty: 'rims',
        configurationCode: 'S01N0',
    },
    {
        id: 'rims02',
        label: 'Multispike Rims',
        configurationProperty: 'rims',
        configurationCode: 'S01N9',
    },
    {
        id: 'lightsOff',
        label: 'Lights Off',
        configurationProperty: 'lights',
        configurationCode: 'LIGHTS_OFF',
    },
    {
        id: 'lightsOn',
        label: 'Lights On',
        configurationProperty: 'lights',
        configurationCode: 'LIGHTS_ON',
    },
];
var configurationCodesBMW = {
    carpaint: 'P0C36',
    seats: 'FLKMI',
    rims: 'S01N0',
    lights: 'LIGHTS_ON',
};
var loadConfiguratorButtonElement = document.getElementById('load-configurator-button');
var configurationButtonsContainerElement = document.getElementById('configuration-buttons-container');
var switchCameraButtonElement = document.getElementById('switch-camera-button');
var switchEnvironmentButtonElement = document.getElementById('switch-environment-button');
var destroyConfiguratorButtonElement = document.getElementById('destroy-configurator-button');
var destroyConfiguratorButton = document.getElementById('destroy-configurator-button');
destroyConfiguratorButton.addEventListener('click', function (e) {
    core.destroy();
    core = null;
    switchCameraButtonElement.style.display = 'none';
    switchEnvironmentButtonElement.style.display = 'none';
    configurationButtonsContainerElement.style.display = 'none';
    loadConfiguratorButtonElement.style.display = 'block';
    destroyConfiguratorButton.style.display = 'none';
});
/**
 * Entry point
 */
function bmwDemo() {
    return __awaiter(this, void 0, void 0, function () {
        var pageTitleElement, defaultConfigurationCodes;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageTitleElement = document.getElementById('page-title');
                    pageTitleElement.innerHTML = pageTitle;
                    defaultConfigurationCodes = [
                        configurationCodesBMW.carpaint,
                        configurationCodesBMW.seats,
                        configurationCodesBMW.rims,
                        configurationCodesBMW.lights,
                    ];
                    if (!loadConfiguratorWithoutUserInteraction) return [3 /*break*/, 4];
                    loadConfiguratorButtonElement.style.display = 'none';
                    configurationButtonsContainerElement.style.display = 'block';
                    return [4 /*yield*/, setupApplication()];
                case 1:
                    _a.sent();
                    core.displayDefaultLoadingUi();
                    return [4 /*yield*/, loadEnvironment(environmentConfigurationCodes[0])];
                case 2:
                    _a.sent(); // load ext
                    return [4 /*yield*/, loadCar(defaultConfigurationCodes)];
                case 3:
                    _a.sent();
                    core.startRender();
                    core.hideDefaultLoadingUi();
                    _a.label = 4;
                case 4:
                    loadConfiguratorButtonElement.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, setupApplication()];
                                case 1:
                                    _a.sent();
                                    core.displayDefaultLoadingUi();
                                    return [4 /*yield*/, loadEnvironment(environmentConfigurationCodes[0])];
                                case 2:
                                    _a.sent(); // load ext
                                    return [4 /*yield*/, loadCar(defaultConfigurationCodes)];
                                case 3:
                                    _a.sent();
                                    startRender = true;
                                    core.startRender();
                                    core.hideDefaultLoadingUi();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.bmwDemo = bmwDemo;
function setupApplication() {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, actionItemManager;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.getElementById('viewport');
                    core = new mv_webgl_core_1.Core(canvas);
                    entityManager = core.getEntityManager();
                    environmentManager = core.getEnvironmentManager();
                    core.stopRender();
                    cameraManager = core.getCameraManager();
                    // cameraManager.setupDefaultCamera();
                    return [4 /*yield*/, cameraManager.addCameraShots(assetsBaseUrl, cameraShots)];
                case 1:
                    // cameraManager.setupDefaultCamera();
                    _a.sent();
                    cameraShotIds = cameraManager.getAllCameraShotsIds();
                    cameraManager.requestCameraShot(cameraShotIds[cameraShotIndex]);
                    actionItemManager = core.getActionItemManager();
                    actionItemManager.createActionItemsFromJSON(assetsBaseUrl, 'bmw_action_items.json').then(function () {
                        var animationActionItemIds = ['DoorFL', 'DoorFR', 'Trunk'];
                        animationActionItemIds.forEach(function (actionItemId) {
                            // Subscribe to ActionItem in the Frontend:
                            actionItemManager.subscribeToActionItem(actionItemId).subscribe(function (actionItem) { return __awaiter(_this, void 0, void 0, function () {
                                var entityManager, entity;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            actionItem.block();
                                            console.log("[Frontend] ActionItem " + actionItem.id + " clicked");
                                            entityManager = core.getEntityManager();
                                            entity = entityManager.getEntity(modelId);
                                            actionItem.playFadeAnimation();
                                            return [4 /*yield*/, entity.playAnimationGroup(actionItem.id, 2)];
                                        case 1:
                                            _a.sent();
                                            actionItem.nextState();
                                            actionItem.unblock();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        actionItemManager.subscribeToActionItem('Lights').subscribe(function (actionItem) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log("[Frontend] ActionItem " + actionItem.id + " clicked");
                                toggleLights();
                                actionItem.nextState();
                                return [2 /*return*/];
                            });
                        }); });
                    });
                    switchCameraButtonElement.addEventListener('click', function (e) {
                        cameraShotIndex = ++cameraShotIndex >= cameraShots.length ? 0 : cameraShotIndex;
                        cameraManager.requestCameraShot(cameraShotIds[cameraShotIndex]);
                        environmentConfigCode = cameraShotIndex == 0 ? 'ext' : 'int';
                        environmentManager.updateEnvironment(environmentIds[activeEnvironmentIndex], environmentConfigCode);
                    });
                    switchEnvironmentButtonElement.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    activeEnvironmentIndex = ++activeEnvironmentIndex >= environmentsUrls.length ? 0 : activeEnvironmentIndex;
                                    return [4 /*yield*/, loadEnvironment(environmentConfigCode)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    configurationButtonsCar.forEach(function (button) {
                        var buttonElement = document.createElement('BUTTON');
                        buttonElement.innerHTML = button.label;
                        buttonElement.addEventListener('click', function (e) {
                            return updateConfiguration(button.configurationProperty, button.configurationCode);
                        });
                        configurationButtonsContainerElement.appendChild(buttonElement);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function loadEnvironment(configurationCode) {
    return __awaiter(this, void 0, void 0, function () {
        var entity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    core.stopRender();
                    return [4 /*yield*/, environmentManager.loadEnvironment(assetsBaseUrl, environmentsUrls[activeEnvironmentIndex], configurationCode)];
                case 1:
                    entity = _a.sent();
                    if (startRender) {
                        core.startRender();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function loadCar(defaultConfigurationCodes) {
    return __awaiter(this, void 0, void 0, function () {
        var entity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, entityManager.loadEntity(assetsBaseUrl, entityConfigName, defaultConfigurationCodes, modelId)];
                case 1:
                    entity = _a.sent();
                    switchCameraButtonElement.style.display = 'block';
                    switchEnvironmentButtonElement.style.display = 'block';
                    loadConfiguratorButtonElement.style.display = 'none';
                    configurationButtonsContainerElement.style.display = 'block';
                    destroyConfiguratorButtonElement.style.display = 'block';
                    console.log('Car loaded');
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Update configuration
 * @param {string} property
 * @param {string} code
 * @return {Promise<any>}*/
function updateConfiguration(property, code) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (property && code) {
                        configurationCodesBMW[property] = code;
                    }
                    core.stopRender();
                    return [4 /*yield*/, entityManager.updateEntityConfiguration(modelId, [
                            configurationCodesBMW.carpaint,
                            configurationCodesBMW.seats,
                            configurationCodesBMW.rims,
                            configurationCodesBMW.lights,
                        ])];
                case 1:
                    _a.sent();
                    if (startRender) {
                        core.startRender();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function toggleLights() {
    configurationCodesBMW.lights = configurationCodesBMW['lights'] == 'LIGHTS_ON' ? 'LIGHTS_OFF' : 'LIGHTS_ON';
    return updateConfiguration();
}


/***/ }),

/***/ "./playground/src/main.ts":
/*!********************************!*\
  !*** ./playground/src/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bmw_demo_1 = __webpack_require__(/*! ./bmw/bmw-demo */ "./playground/src/bmw/bmw-demo.ts");
bmw_demo_1.bmwDemo();


/***/ }),

/***/ "./src/constants/engine-types.ts":
/*!***************************************!*\
  !*** ./src/constants/engine-types.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EngineTypes;
(function (EngineTypes) {
    EngineTypes["BABYLON"] = "BABYLON";
})(EngineTypes = exports.EngineTypes || (exports.EngineTypes = {}));


/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./engine-types */ "./src/constants/engine-types.ts"));


/***/ }),

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var mangers_1 = __webpack_require__(/*! ./mangers */ "./src/mangers/index.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var entity_manager_1 = __webpack_require__(/*! ./mangers/entity/entity.manager */ "./src/mangers/entity/entity.manager.ts");
var events_1 = __webpack_require__(/*! ./globals/events */ "./src/globals/events.ts");
var mv_scene_optimizer_1 = __webpack_require__(/*! ./globals/mv-scene-optimizer */ "./src/globals/mv-scene-optimizer.ts");
/**
 * Core class that init all
 */
var Core = /** @class */ (function () {
    /**
     * Creates core class with will init engine and all mangers
     * @param {HTMLCanvasElement} canvas
     * @param {boolean} useNullEngine Null Engine is used for testing purposes only
     */
    function Core(canvas) {
        this._canvas = canvas;
        this._inspectorState = false;
        this.initializeEngineAndManagers();
        this.registerEventListeners();
    }
    /**
     * Init Engine and Mangers
     * @param {boolean} useNullEngine Null Engine is used for testing purposes only
  
     */
    Core.prototype.initializeEngineAndManagers = function () {
        var babylonEngine = this.createEngine();
        var babylonScene = this.createScene(babylonEngine);
        this._engine = babylonEngine;
        this._scene = babylonScene;
        // Init Managers
        this._meshManager = new mangers_1.MeshManager(babylonScene);
        this._environmentManager = new mangers_1.EnvironmentManager(babylonScene);
        this._cameraManager = new mangers_1.CameraManager(babylonScene, this._canvas);
        this._actionItemManager = new mangers_1.ActionItemManager(this._scene, this._meshManager);
        this._entityManager = new entity_manager_1.EntityManager(babylonScene);
        // Init SceneOptimizer
        this._optimizer = new mv_scene_optimizer_1.MVSceneOptimizer(this._scene);
        this._optimizer.init();
    };
    /**
     * Create new Engine
     * @return {Engine} new Engine
     */
    Core.prototype.createEngine = function () {
        return new babylonjs_1.Engine(this._canvas, true);
    };
    /**
     * Create new Scene
     * @param {Engine} babylonEngine
     * @return {Scene} new Scene
     */
    Core.prototype.createScene = function (babylonEngine) {
        return new babylonjs_1.Scene(babylonEngine);
    };
    /**
     * Register all event listeners
     */
    Core.prototype.registerEventListeners = function () {
        var _this = this;
        var resizeEvent = rxjs_1.fromEvent(window, 'resize');
        var keyDownEvent = rxjs_1.fromEvent(window, 'keydown');
        // Avoid multiple calls on resize
        var debouncedResizeEvent = resizeEvent.pipe(operators_1.debounceTime(100), operators_1.takeUntil(events_1.onDestroy$));
        debouncedResizeEvent.subscribe(function () {
            // Update engine
            _this._engine.resize();
            // Update camera
            var camera = _this._cameraManager.getActiveCamera();
            var shot = _this._cameraManager.getActiveCameraShot();
            shot.activate(camera);
        });
        keyDownEvent.pipe(operators_1.takeUntil(events_1.onDestroy$)).subscribe(function (key) {
            switch (key.code) {
                case 'KeyI': {
                    _this.toggleInspector();
                    break;
                }
            }
        });
    };
    /**
     * Start the render loop
     */
    Core.prototype.startRender = function () {
        var _this = this;
        this.startOptimization();
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
    };
    /**
     * Stop the render loop
     */
    Core.prototype.stopRender = function () {
        this._engine.stopRenderLoop();
    };
    /**
     * Displays the default BabylonJS loading UI.
     */
    Core.prototype.displayDefaultLoadingUi = function () {
        this._engine.displayLoadingUI();
    };
    /**
     * Hides the default BabylonJS loading UI.
     */
    Core.prototype.hideDefaultLoadingUi = function () {
        this._engine.hideLoadingUI();
    };
    /**
     * Toggle debug inspector
     */
    Core.prototype.toggleInspector = function () {
        this._inspectorState ? this._scene.debugLayer.hide() : this._scene.debugLayer.show({ enablePopup: false });
        this._inspectorState = !this._inspectorState;
    };
    /**
     * Start the scene optimization
     */
    Core.prototype.startOptimization = function () {
        this._optimizer.start();
    };
    /**
     * Destroys the WebGL context and cleans up all memory
     */
    Core.prototype.destroy = function () {
        this._scene.dispose();
        this._engine.dispose();
        events_1.onDestroy$.next();
    };
    /**
     * Gets the current mesh manager
     * @return {MeshManager}
     */
    Core.prototype.getMeshManager = function () {
        return this._meshManager;
    };
    /**
     * Gets the current environment manager
     * @return {EnvironmentManager}
     */
    Core.prototype.getEnvironmentManager = function () {
        return this._environmentManager;
    };
    /**
     * Gets the current camera manger
     * @return {CameraManager}
     */
    Core.prototype.getCameraManager = function () {
        return this._cameraManager;
    };
    /**
     * Gets the current entity manger
     * @return {EntityManager}
     */
    Core.prototype.getEntityManager = function () {
        return this._entityManager;
    };
    /**
     * Get the Babylon Scene
     * @return {Scene}
     */
    Core.prototype.getScene = function () {
        return this._scene;
    };
    /**
     * Get the current ActionItem manager
     * @return {ActionItemManager} current ActionItem Manger
     */
    Core.prototype.getActionItemManager = function () {
        return this._actionItemManager;
    };
    return Core;
}());
exports.Core = Core;


/***/ }),

/***/ "./src/globals/events.ts":
/*!*******************************!*\
  !*** ./src/globals/events.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
exports.onDestroy$ = new rxjs_1.Subject();


/***/ }),

/***/ "./src/globals/mv-scene-optimizer.ts":
/*!*******************************************!*\
  !*** ./src/globals/mv-scene-optimizer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/**
 * Class for Scene Optimizations
 */
var MVSceneOptimizer = /** @class */ (function () {
    /**
     * Creates MV Scene Optimizer
     * @param  {Scene} scene
     * @param  {number} targetFps (Default: 30)
     */
    function MVSceneOptimizer(scene, targetFps) {
        if (targetFps === void 0) { targetFps = 30; }
        this._scene = scene;
        this._options = new babylonjs_1.SceneOptimizerOptions(targetFps);
    }
    /**
     * Enable the optimization of hardware scaling
     * @param  {number} priority (Default: 0)
     * @param  {number} maxScale (Default: 0.5)
     * @param  {number} steps (Default: 0.25)
     */
    MVSceneOptimizer.prototype.addHardwareScalingOptimization = function (priority, maxScale, steps) {
        if (priority === void 0) { priority = 0; }
        if (maxScale === void 0) { maxScale = 0.5; }
        if (steps === void 0) { steps = 0.25; }
        this._options.addOptimization(new babylonjs_1.HardwareScalingOptimization(priority, maxScale, steps));
    };
    /**
     * Initializes the SceneOptimizer with default options (HS-Optiomization)
     */
    MVSceneOptimizer.prototype.init = function () {
        var _this = this;
        this.addHardwareScalingOptimization();
        this._optimizer = new babylonjs_1.SceneOptimizer(this._scene, this._options, true, true);
        if (this._optimizer.onFailureObservable) {
            this._optimizer.onFailureObservable.add(function (eventData) {
                _this.onFailureOrEnd(eventData.optimizations);
                _this._optimizer.onFailureObservable.clear();
            });
        }
        if (this._optimizer.onSuccessObservable) {
            this._optimizer.onSuccessObservable.add(function (eventData) {
                _this.onFailureOrEnd(eventData.optimizations);
                _this._optimizer.onSuccessObservable.clear();
            });
        }
        var engine = this._scene.getEngine();
        window.setInterval(function () {
            console.log(engine.getFps().toFixed());
        }, 5000);
    };
    /**
     * Starts the SceneOptimizer
     */
    MVSceneOptimizer.prototype.start = function () {
        this._optimizer.start();
    };
    /**
     * Logs the final optimization details
     * @param  {SceneOptimization[]} optimizations
     */
    MVSceneOptimizer.prototype.onFailureOrEnd = function (optimizations) {
        optimizations.forEach(function (optimization) {
            console.log("[SceneOptimizer] Done. " + optimization.getDescription());
        });
    };
    return MVSceneOptimizer;
}());
exports.MVSceneOptimizer = MVSceneOptimizer;


/***/ }),

/***/ "./src/helper/animation.helper.ts":
/*!****************************************!*\
  !*** ./src/helper/animation.helper.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseAnimationGroup = function (animationGroup) {
    var ag = animationGroup;
    if (ag._from == 0) {
        ag._from = ag._to;
        ag._to = 0;
    }
    else {
        ag._to = ag._from;
        ag._from = 0;
    }
};


/***/ }),

/***/ "./src/helper/camera.helper.ts":
/*!*************************************!*\
  !*** ./src/helper/camera.helper.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculate the camera radius from position and target
 * @param {Vector3} position
 * @param {Vector3} target
 * @return {number} radius
 */
exports.calculateCameraRadius = function (position, target) {
    var dx = target.x - position.x;
    var dy = target.y - position.y;
    var dz = target.z - position.z;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2));
};


/***/ }),

/***/ "./src/helper/helper.ts":
/*!******************************!*\
  !*** ./src/helper/helper.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if variable is string
 * @param {unknown} obj
 * @return {boolean}
 */
exports.isString = function (obj) {
    return typeof obj === 'string' || obj instanceof String;
};
/**
 * Check if variable is boolean
 * @param {unknown} obj
 * @return {boolean}
 */
exports.isBoolean = function (obj) {
    return typeof obj === 'boolean';
};
/**
 * Check if variable is number
 * @param {any} obj
 * @return {boolean}
 */
exports.isNumber = function (obj) {
    return !isNaN(parseFloat(obj)) && !isNaN(obj - 0);
};
/**
 * Check if a object is a Color3
 * @param {unknown} obj
 * @return {boolean} obj is Color3
 */
exports.isColor3 = function (obj) {
    return (obj &&
        typeof obj === 'object' &&
        typeof obj['r'] === 'number' &&
        typeof obj['g'] === 'number' &&
        typeof obj['b'] === 'number');
};
/**
 * Check if a object is a Light Color3
 * @param {unknown} arr
 * @return {boolean} obj is Color3
 */
exports.isColor3Array = function (arr) {
    return (arr &&
        Array.isArray(arr) &&
        arr.length === 3 &&
        typeof arr[0] === 'number' &&
        typeof arr[1] === 'number' &&
        typeof arr[2] === 'number');
};
/**
 * Check if a object is a Color4
 * @param {unknown} obj
 * @return {boolean} obj is Color4
 */
exports.isColor4 = function (obj) {
    return (obj &&
        typeof obj === 'object' &&
        typeof obj['r'] === 'number' &&
        typeof obj['g'] === 'number' &&
        typeof obj['b'] === 'number' &&
        typeof obj['a'] === 'number');
};
/**
 * Check if a object is a Light Vector3
 * @param {unknown} arr
 * @return {boolean} obj is Vector3
 */
exports.isVector3Array = function (arr) {
    return (arr &&
        Array.isArray(arr) &&
        arr.length === 3 &&
        typeof arr[0] === 'number' &&
        typeof arr[1] === 'number' &&
        typeof arr[2] === 'number');
};
/**
 * Gets a child node by id if it exists.
 * @param {Node} node Babylon Node
 * @param {string} id
 * @return {Node}
 */
exports.getChildNodeById = function (node, id) {
    if (node.id == id) {
        return node;
    }
    var children = node.getChildren();
    if (children) {
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            var foundNode = exports.getChildNodeById(child, id);
            if (foundNode) {
                return foundNode;
            }
        }
    }
    return null;
};


/***/ }),

/***/ "./src/helper/index.ts":
/*!*****************************!*\
  !*** ./src/helper/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./animation.helper */ "./src/helper/animation.helper.ts"));
__export(__webpack_require__(/*! ./camera.helper */ "./src/helper/camera.helper.ts"));
__export(__webpack_require__(/*! ./helper */ "./src/helper/helper.ts"));
__export(__webpack_require__(/*! ./json.loader */ "./src/helper/json.loader.ts"));
__export(__webpack_require__(/*! ./request */ "./src/helper/request.ts"));


/***/ }),

/***/ "./src/helper/json.loader.ts":
/*!***********************************!*\
  !*** ./src/helper/json.loader.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __webpack_require__(/*! ./request */ "./src/helper/request.ts");
/**
 * Load json from url
 * @private
 * @param {string} url
 * @return {Promise<any>} response of HTTPRequest
 */
function _loadJson(url) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new request_1.HttpClient();
            return [2 /*return*/, new Promise(function (resolve) {
                    client.get(url, {}, function (data) {
                        resolve(data.response);
                    });
                })];
        });
    });
}
/**
 * Load Json with type
 * @private
 * @param {string} url
 * @return {Promise} json parsed with type
 */
function _loadJsonWithType(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    _loadJson(url).then(function (data) {
                        try {
                            var parsedObject = JSON.parse(data);
                            resolve(parsedObject);
                        }
                        catch (e) {
                            console.log("Failed to parse " + url);
                            reject(e);
                        }
                    });
                })];
        });
    });
}
/**
 * load json from url
 */
exports.loadJson = _loadJsonWithType;


/***/ }),

/***/ "./src/helper/request.ts":
/*!*******************************!*\
  !*** ./src/helper/request.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Http Client to do easy http request to external resources
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    /**
     * Creates new XHR and bind result to callback function
     * @param {function} callback
     * @return {XMLHttpRequest} xhr
     */
    HttpClient.prototype.getXHR = function (callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            var readyState = xhr.readyState;
            if (readyState == 4) {
                callback(xhr);
            }
        };
        return xhr;
    };
    /**
     * Formats url parameter from object to string
     * @param {string} url
     * @param {any} data
     * @return {string} new url with params
     */
    HttpClient.prototype.getUrl = function (url, data) {
        var queryString = '';
        if (typeof data === 'object') {
            for (var propertyName in data) {
                if (data.hasOwnProperty(propertyName)) {
                    queryString +=
                        (queryString.length === 0 ? '' : '&') + propertyName + '=' + encodeURIComponent(data[propertyName]);
                }
            }
        }
        if (queryString.length !== 0) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + queryString;
        }
        return url;
    };
    /**
     * Do a http get call
     * @param {string} url
     * @param {any} data
     * @param {function} callback
     */
    HttpClient.prototype.get = function (url, data, callback) {
        var xhr = this.getXHR(callback);
        var urlWithParam = this.getUrl(url, data);
        xhr.open('GET', urlWithParam, true);
        xhr.send(null);
    };
    /**
     * Do a http post call
     * @param {string} url
     * @param {any} data
     * @param {function} callback
     */
    HttpClient.prototype.post = function (url, data, callback) {
        var xhr = this.getXHR(callback);
        xhr.open('POST', url, true);
        // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(data);
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./core */ "./src/core.ts"));
__export(__webpack_require__(/*! ./mangers */ "./src/mangers/index.ts"));
__export(__webpack_require__(/*! ./constants */ "./src/constants/index.ts"));


/***/ }),

/***/ "./src/mangers/action-item/action-item.manager.ts":
/*!********************************************************!*\
  !*** ./src/mangers/action-item/action-item.manager.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var action_item_1 = __webpack_require__(/*! ../../models/action-item */ "./src/models/action-item/index.ts");
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var services_1 = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
/**
 * Class to manage all ActionItems in the scene
 */
var ActionItemManager = /** @class */ (function () {
    /**
     * Creates new ActionItem Manager
     * @param  {Scene} scene
     * @param  {MeshManager} meshManager
     */
    function ActionItemManager(scene, meshManager) {
        this._actionItems = [];
        this._meshManager = meshManager;
        this._scene = scene;
        this._actionsService = new services_1.ActionsService(this._scene);
        this._materialService = new services_1.MaterialService(this._scene);
    }
    /**
     * create ActionItems from JSON document
     * @param  {string} baseUrl
     * @param  {string} url
     * @return {Promise<ActionItem[]>}
     */
    ActionItemManager.prototype.createActionItemsFromJSON = function (baseUrl, url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var optionsJSON, options_1, materialsBaseUrl, texturesBaseUrl, actionItems, _i, _a, actionItem, _b, _c, _d;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    _e.trys.push([0, 6, , 7]);
                                    return [4 /*yield*/, helper_1.loadJson(baseUrl + url)];
                                case 1:
                                    optionsJSON = _e.sent();
                                    options_1 = __assign(__assign({}, optionsJSON), { actionItems: optionsJSON.actionItems.map(function (actionItemJSON) {
                                            return __assign(__assign({}, actionItemJSON), { states: actionItemJSON.states.map(function (stateJSON) {
                                                    return __assign(__assign({}, stateJSON), { position: new (babylonjs_1.Vector3.bind.apply(babylonjs_1.Vector3, __spreadArrays([void 0], stateJSON.position)))() });
                                                }), material: actionItemJSON.material ? actionItemJSON.material : options_1.defaultMaterial });
                                        }) });
                                    materialsBaseUrl = baseUrl + optionsJSON.materialsUrlRelative;
                                    texturesBaseUrl = baseUrl + optionsJSON.texturesUrlRelative;
                                    actionItems = [];
                                    _i = 0, _a = options_1.actionItems;
                                    _e.label = 2;
                                case 2:
                                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                                    actionItem = _a[_i];
                                    _c = (_b = actionItems).push;
                                    return [4 /*yield*/, this.createActionItem(materialsBaseUrl, texturesBaseUrl, actionItem)];
                                case 3:
                                    _c.apply(_b, [_e.sent()]);
                                    _e.label = 4;
                                case 4:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 5:
                                    resolve(actionItems);
                                    return [3 /*break*/, 7];
                                case 6:
                                    _d = _e.sent();
                                    reject(new Error('Error loading ActionItems JSON'));
                                    return [3 /*break*/, 7];
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Create a new ActionItem
     * @param {string} materialBaseUrl
     * @param {string} textureBaseUrl
     * @param  {ActionItemOptions} options ActionItem options
     * @return {Promise<ActionItem>}
     */
    ActionItemManager.prototype.createActionItem = function (materialBaseUrl, textureBaseUrl, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var actionItem, material;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    actionItem = new action_item_1.ActionItem(this._scene, options);
                                    // Create and assign plane and set material
                                    actionItem.plane = this._meshManager.createPlane(actionItem.id + "_plane", options.size, options.states[0].position, true);
                                    material = this._materialService.getMaterial(options.material);
                                    if (!!material) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this._materialService.createMaterial(materialBaseUrl, textureBaseUrl, options.material, options.material, options.material)];
                                case 1:
                                    material = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    actionItem.plane.material = material;
                                    // Create and assign collisionsphere
                                    actionItem.collisionSphere = this._meshManager.createSphere(actionItem.id + "_sphere", options.size + 0.1, options.states[0].position, false);
                                    // Register click event on ActionItem
                                    this._actionsService.registerClickEvent(actionItem.collisionSphere, function () {
                                        actionItem.emitClickEvent();
                                    });
                                    this._actionItems.push(actionItem);
                                    resolve(actionItem);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Subscribe to the click event of an ActionItem
     * @param  {string} id ID of the ActionItem to subscribe to
     * @return {Observable<ActionItem>}
     */
    ActionItemManager.prototype.subscribeToActionItem = function (id) {
        return this._actionItems.find(function (actionItem) { return actionItem.id === id; }).clicked$;
    };
    /**
     * Gets an action item by id
     * @param {string} id
     * @return {ActionItem}
     */
    ActionItemManager.prototype.getActionItem = function (id) {
        return this._actionItems.find(function (actionItem) { return actionItem.id === id; });
    };
    /**
     * Reset Action Items
     */
    ActionItemManager.prototype.resetActionItems = function () {
        this._actionItems.forEach(function (item) { return item.unload(); });
        this._actionItems = [];
    };
    return ActionItemManager;
}());
exports.ActionItemManager = ActionItemManager;


/***/ }),

/***/ "./src/mangers/camera/camera.manager.ts":
/*!**********************************************!*\
  !*** ./src/mangers/camera/camera.manager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
var camera_1 = __webpack_require__(/*! ../../models/camera */ "./src/models/camera/index.ts");
/**
 * Class to manage all cameras of the webGL scene.
 */
var CameraManager = /** @class */ (function () {
    /**
     * Creates new Camera Manger
     * @param {Scene} scene
     * @param {HTMLCanvasElement} canvas
     */
    function CameraManager(scene, canvas) {
        this._cameraShots = new Map();
        this._activeCameraShotIndex = 0;
        this._cameraService = new services_1.CameraService(scene, canvas);
    }
    /**
     * Get camera shot by id
     * @param {string} id
     * @return {MVCameraShot} camera shot
     */
    CameraManager.prototype.getCameraShot = function (id) {
        var cameraShot = this._cameraShots.get(id);
        if (!cameraShot) {
            throw new Error("CamerShot with id: " + id + " not found!");
        }
        return cameraShot;
    };
    /**
     * Return all ids of camera shots
     * @return {string}
     */
    CameraManager.prototype.getAllCameraShotsIds = function () {
        var ids = [];
        this._cameraShots.forEach(function (value, key) { return ids.push(key); });
        return ids;
    };
    /**
     * Get active camera shot
     * @return {MVCameraShot}
     */
    CameraManager.prototype.getActiveCameraShot = function () {
        var id;
        this._cameraShots.forEach(function (value, key) {
            if (value.active) {
                id = key;
            }
        });
        if (!id) {
            return null;
        }
        return this.getCameraShot(id);
    };
    /**
     * Get active camera
     * @return {MVCamera} active camera
     */
    CameraManager.prototype.getActiveCamera = function () {
        return this._mainCamera;
    };
    /**
     * Sets up the default camera
     */
    CameraManager.prototype.setupDefaultCamera = function () {
        this._mainCamera = this._cameraService.setupDefaultCamera();
    };
    /**
     * Set new camera shots for camera
     * @param {string} baseUrl
     * @param {string[]} cameraShotUrls
     * @return {Promise<MVCameraShot[]>}
     */
    CameraManager.prototype.addCameraShots = function (baseUrl, cameraShotUrls) {
        return __awaiter(this, void 0, void 0, function () {
            var cameraShots, _i, cameraShotUrls_1, url, settings, cameraShot, cameraShotsArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraShots = new Map();
                        _i = 0, cameraShotUrls_1 = cameraShotUrls;
                        _a.label = 1;
                    case 1:
                        if (!(_i < cameraShotUrls_1.length)) return [3 /*break*/, 4];
                        url = cameraShotUrls_1[_i];
                        return [4 /*yield*/, this._cameraService.loadCameraShotSettings(baseUrl + url)];
                    case 2:
                        settings = _a.sent();
                        cameraShot = new camera_1.MVCameraShot(settings);
                        cameraShots.set(settings.id, cameraShot);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this._cameraShots = cameraShots;
                        cameraShotsArray = [];
                        this._cameraShots.forEach(function (value, key) { return cameraShotsArray.push(value); });
                        return [2 /*return*/, cameraShotsArray];
                }
            });
        });
    };
    /**
     * Request a camera shot by id
     * @param {string} id
     */
    CameraManager.prototype.requestCameraShot = function (id) {
        var cameraShotIds = this.getAllCameraShotsIds();
        var cameraShotIndex = cameraShotIds.findIndex(function (shotId) {
            return shotId == id;
        });
        this._activeCameraShotIndex = cameraShotIndex;
        var cameraShot = this.getCameraShot(id);
        if (!this._mainCamera) {
            this.setupDefaultCamera();
        }
        if (cameraShot) {
            if (this._mainCamera.currentShot) {
                this._mainCamera.previousShot = this._mainCamera.currentShot;
                this._mainCamera.previousShot.deactivate(this._mainCamera);
            }
            this._mainCamera.currentShot = cameraShot;
            this._mainCamera.freeze();
            cameraShot.activate(this._mainCamera);
        }
    };
    return CameraManager;
}());
exports.CameraManager = CameraManager;


/***/ }),

/***/ "./src/mangers/entity/entity.manager.ts":
/*!**********************************************!*\
  !*** ./src/mangers/entity/entity.manager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mv_entity_1 = __webpack_require__(/*! ../../models/entity/mv-entity */ "./src/models/entity/mv-entity.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
/**
 * Class to manage all entities (products and environments) of the webGL scene.
 */
var EntityManager = /** @class */ (function () {
    /**
     * Creates a new EntityManager
     * @param {Scene} scene Babylon scene
     */
    function EntityManager(scene) {
        this._entities = [];
        this._scene = scene;
    }
    /**
     * Loads a new entity based on an entity config file and initial configuration codes
     * @param {string} baseUrl
     * @param {string} entityConfigName
     * @param {string} configurationCodes Configuration Codes
     * @param {string} entityUuid Entity UUID
     * @return {Promise<MVEntity>} Entity
     */
    EntityManager.prototype.loadEntity = function (baseUrl, entityConfigName, configurationCodes, entityUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var entityConfigUrl, entityConfig, entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entityConfigUrl = baseUrl + entityConfigName;
                        return [4 /*yield*/, helper_1.loadJson(entityConfigUrl)];
                    case 1:
                        entityConfig = _a.sent();
                        // meshes and the rule engine config are loaded relative to the entity config file.
                        // Therefore we need to save the base url of the entity config file (url without file name).
                        entityConfig.entityConfigBaseUrl = baseUrl;
                        entity = new mv_entity_1.MVEntity(entityConfig, entityUuid, this._scene);
                        return [4 /*yield*/, entity.setDefaultConfiguration()];
                    case 2:
                        _a.sent();
                        // set initial configuration codes
                        return [4 /*yield*/, entity.updateConfiguration(configurationCodes)];
                    case 3:
                        // set initial configuration codes
                        _a.sent();
                        this._entities.push(entity);
                        return [2 /*return*/, entity];
                }
            });
        });
    };
    /**
     * Updates an entity based on configuration codes
     * @param {string} entityUuid Entity UUID
     * @param {string[]} configurationCodes Configuration Codes
     * @return {Promise<MVEntity>} Entity
     */
    EntityManager.prototype.updateEntityConfiguration = function (entityUuid, configurationCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = this.getEntity(entityUuid);
                        return [4 /*yield*/, entity.updateConfiguration(configurationCodes)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, entity];
                }
            });
        });
    };
    /**
     * Gets an existing entity by uuid
     * @param {string} uuid Uuid
     * @return {MVEntity}
     */
    EntityManager.prototype.getEntity = function (uuid) {
        var entity = this._entities.find(function (e) { return e.uuid == uuid; });
        if (!entity) {
            throw new Error("No entity with id " + uuid + " found");
        }
        return entity;
    };
    return EntityManager;
}());
exports.EntityManager = EntityManager;


/***/ }),

/***/ "./src/mangers/environment/environment.manager.ts":
/*!********************************************************!*\
  !*** ./src/mangers/environment/environment.manager.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mv_entity_1 = __webpack_require__(/*! ../../models/entity/mv-entity */ "./src/models/entity/mv-entity.ts");
var services_1 = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
/**
 * Class to manage the environment of the webGL scene.
 */
var EnvironmentManager = /** @class */ (function () {
    /**
     * Creates new Environment Manger
     * @param {Scene} scene
     */
    function EnvironmentManager(scene) {
        this._scene = scene;
        this._environmentService = new services_1.EnvironmentService(scene);
        this._environments = new Map();
    }
    /**
     * Get environment by id
     * @param {string} id
     * @return {{entity: MVEntity, envConfigs: MVEnvironmentConfigs}}
     */
    EnvironmentManager.prototype.getEnvironmentById = function (id) {
        return this._environments.get(id);
    };
    /**
     * Updates environment by id
     * @param {string} id
     */
    EnvironmentManager.prototype.updateEnvironmentConfigsById = function (id, newEnvConfigs) {
        this._environments.get(id).envConfigs = newEnvConfigs;
    };
    /**
     * Get active environment
     * @return {{entity: MVEntity, envConfigs: MVEnvironmentConfigs}}
     */
    EnvironmentManager.prototype.getActiveEnvironment = function () {
        return this._activeEnvironment;
    };
    /**
   * Get active environment config code
   * @return string
   */
    EnvironmentManager.prototype.getActiveEnvironmentConfigurationCode = function () {
        return this._activeEnvironmentConfigurationCode;
    };
    /**
     * Sets up the default environment
     */
    EnvironmentManager.prototype.setupDefaultEnvironment = function () {
        this._environmentService.setupDefaultEnvironment();
    };
    /**
     * New load
     * @param {string} baseUrl
     * @param {string} entityConfigName
     * @param {string} configurationCode
     * @return {Promise<MVEntity>}
     */
    EnvironmentManager.prototype.loadEnvironment = function (baseUrl, entityConfigName, configurationCode) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var entityConfig, env, entity, envConfigs, applyEnvironmentSettings$, updateConfiguration$;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, helper_1.loadJson(baseUrl + entityConfigName)];
                    case 1:
                        entityConfig = _b.sent();
                        entityConfig.entityConfigBaseUrl = baseUrl;
                        env = this.getEnvironmentById(entityConfig.id);
                        entity = env === null || env === void 0 ? void 0 : env.entity;
                        envConfigs = env === null || env === void 0 ? void 0 : env.envConfigs;
                        if (((_a = this._activeEnvironment) === null || _a === void 0 ? void 0 : _a.entity.uuid) !== (entity === null || entity === void 0 ? void 0 : entity.uuid)) {
                            this.removeEnvironment(this._activeEnvironment.entity.uuid);
                        }
                        if (!entity) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateExistingEnvironment(entity, configurationCode)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.getActiveEnvironment()];
                    case 3:
                        entity = new mv_entity_1.MVEntity(entityConfig, entityConfig.id, this._scene);
                        return [4 /*yield*/, this._environmentService.loadConfigFile(entityConfig.entityConfigBaseUrl + entityConfig.environmentConfigRelative)];
                    case 4:
                        envConfigs = _b.sent();
                        if (envConfigs) {
                            if (!configurationCode)
                                configurationCode = envConfigs.mappings[0].code;
                            applyEnvironmentSettings$ = this._environmentService.applyEnvironmentSettings(entityConfig, envConfigs, configurationCode);
                        }
                        _b.label = 5;
                    case 5:
                        this._activeEnvironmentConfigurationCode = configurationCode;
                        return [4 /*yield*/, entity.setDefaultConfiguration()];
                    case 6:
                        _b.sent();
                        updateConfiguration$ = entity.updateConfiguration([configurationCode]);
                        return [4 /*yield*/, Promise.all([updateConfiguration$, applyEnvironmentSettings$])];
                    case 7:
                        _b.sent();
                        this._environments.set(entityConfig.id, { entity: entity, envConfigs: envConfigs });
                        this._activeEnvironment = { entity: entity, envConfigs: envConfigs };
                        return [2 /*return*/, this.getActiveEnvironment()];
                }
            });
        });
    };
    /**
     * Update environment with new configuration codes
     * @param {string} entityId
     * @param {string} configurationCode
     * @return {Promise<void>}
     */
    EnvironmentManager.prototype.updateEnvironment = function (entityId, configurationCode) {
        return __awaiter(this, void 0, void 0, function () {
            var env, updateEntity, updateEnvironment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        env = this.getEnvironmentById(entityId);
                        if (!env) {
                            throw new Error('Please first load environment before call update');
                        }
                        return [4 /*yield*/, env.entity.updateConfiguration([configurationCode])];
                    case 1:
                        updateEntity = _a.sent();
                        updateEnvironment = this._environmentService.applyEnvironmentSettings(env.entity.entityConfig, env.envConfigs, configurationCode);
                        return [4 /*yield*/, Promise.all([updateEntity, updateEnvironment])];
                    case 2:
                        _a.sent();
                        this._activeEnvironment = env;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove environment
     * @param {string} id
     */
    EnvironmentManager.prototype.removeEnvironment = function (id) {
        var environment = this.getEnvironmentById(id);
        this._environmentService.setEnvironmentEnableStatus(environment.entity, true);
    };
    /**
     * Update existing environment that is hidden
     * @param {MVEntity} entity
     * @param {string} configurationCode
     * @return {Promise<void>}
     */
    EnvironmentManager.prototype.updateExistingEnvironment = function (entity, configurationCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._environmentService.setEnvironmentEnableStatus(entity, false);
                        return [4 /*yield*/, this.updateEnvironment(entity.uuid, configurationCode)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EnvironmentManager;
}());
exports.EnvironmentManager = EnvironmentManager;


/***/ }),

/***/ "./src/mangers/index.ts":
/*!******************************!*\
  !*** ./src/mangers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./mesh/mesh.manager */ "./src/mangers/mesh/mesh.manager.ts"));
__export(__webpack_require__(/*! ./environment/environment.manager */ "./src/mangers/environment/environment.manager.ts"));
__export(__webpack_require__(/*! ./camera/camera.manager */ "./src/mangers/camera/camera.manager.ts"));
__export(__webpack_require__(/*! ./action-item/action-item.manager */ "./src/mangers/action-item/action-item.manager.ts"));
__export(__webpack_require__(/*! ./entity/entity.manager */ "./src/mangers/entity/entity.manager.ts"));


/***/ }),

/***/ "./src/mangers/mesh/mesh.manager.ts":
/*!******************************************!*\
  !*** ./src/mangers/mesh/mesh.manager.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/**
 * Class to manage all scene meshes that can be used to render the scene.
 */
var MeshManager = /** @class */ (function () {
    /**
     * Creates new Mesh Manger
     * @param {Scene} scene
     */
    function MeshManager(scene) {
        this._meshService = services_1.getMeshService(scene);
    }
    /**
     * Load Mesh a mesh from an external resource
     * @param {string} url
     * @param {string} fileName
     */
    MeshManager.prototype.loadMeshes = function (url, fileName) {
        this._meshService.loadMeshes(url, fileName);
    };
    /**
     * Create a basic plane mesh
     * @param {string} name
     * @param {number} size
     * @param {Vector3} position
     * @param {boolean} billboardModeAll
     * @return {Mesh}
     */
    MeshManager.prototype.createPlane = function (name, size, position, billboardModeAll) {
        return this._meshService.createPlane(name, size, position, billboardModeAll);
    };
    /**
     * Create a basic sphere mesh
     * @param  {string} name
     * @param  {number} size
     * @param  {Vector3} position
     * @param  {boolean} visible Default: true
     * @return {Mesh}
     */
    MeshManager.prototype.createSphere = function (name, size, position, visible) {
        return this._meshService.createSphere(name, size, position, visible);
    };
    return MeshManager;
}());
exports.MeshManager = MeshManager;


/***/ }),

/***/ "./src/models/action-item/ActionItem.ts":
/*!**********************************************!*\
  !*** ./src/models/action-item/ActionItem.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * ActionItem class
 */
var ActionItem = /** @class */ (function () {
    /**
     * Creates a new ActionItem
     * @param {Scene} scene
     * @param {ActionItemOptions} options
     */
    function ActionItem(scene, options) {
        /** Defines the click event. If a user clicks on the action item this event will be fired. */
        this._clicked$ = new rxjs_1.Subject();
        /** Defines the sates of the action items, which contains the position of the action item in the scene */
        this._states = [];
        /** Defines the state event. If a new state on the action item is set, this event is fired. */
        this._state$ = new rxjs_1.BehaviorSubject(null);
        this._scene = scene;
        this.id = options.id;
        this.clicked$ = this._clicked$.asObservable();
        this._states = options.states;
        this._stateIndex = 0;
        this._state$.next(this._states[this._stateIndex]);
        this._fadeAnimation = new babylonjs_1.Animation('fadeAnimation', 'visibility', 30, babylonjs_1.Animation.ANIMATIONTYPE_FLOAT, babylonjs_1.Animation.ANIMATIONLOOPMODE_CONSTANT);
        this._fadeAnimation.setEasingFunction(new babylonjs_1.CubicEase());
    }
    /**
     * Get the current state of the ActionItem
     * @return {ActionItemState}
     */
    ActionItem.prototype.getState = function () {
        return this._state$.getValue();
    };
    /**
     * Gets all states of the ActionItem.
     * @return {ActionItemState[]}
     */
    ActionItem.prototype.getStates = function () {
        return this._states;
    };
    /**
     * Go to next state and show ActionItem
     */
    ActionItem.prototype.nextState = function () {
        var _a;
        this._stateIndex = this._stateIndex + 1 >= this._states.length ? 0 : this._stateIndex + 1;
        this._state$.next(this._states[this._stateIndex]);
        this.updatePosition(this.getState().position);
        if (((_a = this._states) === null || _a === void 0 ? void 0 : _a.length) > 1) {
            this.playFadeAnimation();
        }
        this._blocked = false;
    };
    ActionItem.prototype.setState = function (id) {
        var indexOfActiveState = this._states.findIndex(function (state) { return state.id === id; });
        this._state$.next(this._states[indexOfActiveState]);
        this.updatePosition(this.getState().position);
        this._blocked = false;
    };
    ;
    /**
     * Emit click event and hide ActionItem
     */
    ActionItem.prototype.emitClickEvent = function () {
        if (!this._blocked) {
            this._clicked$.next(this);
        }
    };
    /**
     * Update the position of the ActionItem
     * @param  {Vector3} position
     */
    ActionItem.prototype.updatePosition = function (position) {
        this.plane.position = position;
        this.collisionSphere.position = position;
    };
    /**
     * Plays the fade animation
     */
    ActionItem.prototype.playFadeAnimation = function () {
        this._fadeAnimation.setKeys([
            {
                frame: 0,
                value: this.plane.visibility,
            },
            {
                frame: 30,
                value: this.plane.visibility ? 0 : 1,
            },
        ]);
        var speedRatio = 3;
        this._scene.beginDirectAnimation(this.plane, [this._fadeAnimation], 0, 100, false, speedRatio);
    };
    /**
     * Blocks the action item from click events.
     */
    ActionItem.prototype.block = function () {
        this._blocked = true;
    };
    /**
     * Unblocks the action item from click events.
     */
    ActionItem.prototype.unblock = function () {
        this._blocked = false;
    };
    /**
     * Unloads the action item.
     */
    ActionItem.prototype.unload = function () {
        this.plane.dispose();
        this.collisionSphere.dispose();
    };
    return ActionItem;
}());
exports.ActionItem = ActionItem;


/***/ }),

/***/ "./src/models/action-item/index.ts":
/*!*****************************************!*\
  !*** ./src/models/action-item/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ActionItem */ "./src/models/action-item/ActionItem.ts"));


/***/ }),

/***/ "./src/models/camera/CameraShotBehavior/CameraShotBehavior.ts":
/*!********************************************************************!*\
  !*** ./src/models/camera/CameraShotBehavior/CameraShotBehavior.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract class for Camera-Shot-Behaviors
 */
var CameraShotBehavior = /** @class */ (function () {
    /**
     * Create a new Behavior based on the MVCameraShotBehaviorSettings
     * @param {MVCameraShotBehaviorSettings} settings
     */
    function CameraShotBehavior(settings) {
        this.settings = settings;
    }
    /**
     * Update settings
     * @param {MVCamera} camera
     * @return {MVCamera} modified camera
     */
    CameraShotBehavior.prototype.updateSettings = function (camera) {
        return camera;
    };
    /**
     * Activate behavior on camera
     * @param {MVCamera} camera
     */
    CameraShotBehavior.prototype.activate = function (camera) {
        this.active = true;
        this.updateSettings(camera);
    };
    /**
     * Deactivate behavior on camera
     * @param {MVCamera} camera
     */
    CameraShotBehavior.prototype.deactivate = function (camera) {
        this.active = false;
    };
    return CameraShotBehavior;
}());
exports.CameraShotBehavior = CameraShotBehavior;


/***/ }),

/***/ "./src/models/camera/CameraShotBehavior/CameraShotBehaviorOrbit.ts":
/*!*************************************************************************!*\
  !*** ./src/models/camera/CameraShotBehavior/CameraShotBehaviorOrbit.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var CameraShotBehavior_1 = __webpack_require__(/*! ./CameraShotBehavior */ "./src/models/camera/CameraShotBehavior/CameraShotBehavior.ts");
/**
 * Camera-Orbit behavior class
 */
var CameraShotBehaviorOrbit = /** @class */ (function (_super) {
    __extends(CameraShotBehaviorOrbit, _super);
    /**
     * Create a new Orbit-Behavior based on the MVCameraShotBehaviorSettings
     * @param {MVCameraShotBehaviorSettings} settings
     */
    function CameraShotBehaviorOrbit(settings) {
        return _super.call(this, settings) || this;
    }
    /**
     * Update settings
     * @param {MVCamera} camera
     * @return {MVCamera} modified camera
     */
    CameraShotBehaviorOrbit.prototype.updateSettings = function (camera) {
        _super.prototype.updateSettings.call(this, camera);
        camera.lowerAlphaLimit = this.settings.options.lowerAlphaLimit
            ? babylonjs_1.Tools.ToRadians(this.settings.options.lowerAlphaLimit)
            : null;
        camera.upperAlphaLimit = this.settings.options.upperAlphaLimit
            ? babylonjs_1.Tools.ToRadians(this.settings.options.upperAlphaLimit)
            : null;
        camera.lowerBetaLimit = this.settings.options.lowerBetaLimit
            ? babylonjs_1.Tools.ToRadians(this.settings.options.lowerBetaLimit)
            : null;
        camera.upperBetaLimit = this.settings.options.upperBetaLimit
            ? babylonjs_1.Tools.ToRadians(this.settings.options.upperBetaLimit)
            : null;
        // Invert camera for interior
        if (camera.radius < 1) {
            camera.angularSensibilityX = -4000;
            camera.angularSensibilityY = -4000;
        }
        else {
            camera.angularSensibilityX = 1500;
            camera.angularSensibilityY = 1500;
        }
        this.setAutoRotationFromBehavior(camera);
        return camera;
    };
    /**
     * Activate behavior on camera
     * @param {MVCamera} camera
     */
    CameraShotBehaviorOrbit.prototype.activate = function (camera) {
        _super.prototype.activate.call(this, camera);
    };
    /**
     * Deactivate behavior on camera
     * @param {MVCamera} camera
     */
    CameraShotBehaviorOrbit.prototype.deactivate = function (camera) {
        _super.prototype.deactivate.call(this, camera);
        camera.lowerAlphaLimit = camera.alpha;
        camera.upperAlphaLimit = camera.alpha;
        camera.lowerBetaLimit = camera.beta;
        camera.upperBetaLimit = camera.beta;
        camera.angularSensibilityX = 1000;
        camera.angularSensibilityY = 1000;
    };
    /**
     * Set the AutoRotationBehavior if the settings allowing it
     * @param {MVCamera} camera
     */
    CameraShotBehaviorOrbit.prototype.setAutoRotationFromBehavior = function (camera) {
        if (this.settings.options.allowAutoRotation) {
            camera.useAutoRotationBehavior = true;
            camera.autoRotationBehavior.idleRotationSpeed = this.settings.options.autoRotationSpeed;
        }
        else {
            camera.useAutoRotationBehavior = false;
        }
    };
    return CameraShotBehaviorOrbit;
}(CameraShotBehavior_1.CameraShotBehavior));
exports.CameraShotBehaviorOrbit = CameraShotBehaviorOrbit;


/***/ }),

/***/ "./src/models/camera/CameraShotBehavior/CameraShotBehaviorZoom.ts":
/*!************************************************************************!*\
  !*** ./src/models/camera/CameraShotBehavior/CameraShotBehaviorZoom.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CameraShotBehavior_1 = __webpack_require__(/*! ./CameraShotBehavior */ "./src/models/camera/CameraShotBehavior/CameraShotBehavior.ts");
/**
 * Camera-Zoom behavior class
 */
var CameraShotBehaviorZoom = /** @class */ (function (_super) {
    __extends(CameraShotBehaviorZoom, _super);
    /**
     * Create a new Zoom-Behavior based on the MVCameraShotBehaviorSettings
     * @param {MVCameraShotBehaviorSettings} settings
     */
    function CameraShotBehaviorZoom(settings) {
        return _super.call(this, settings) || this;
    }
    /**
     * Update settings
     * @param {MVCamera} camera
     * @return {MVCamera} modified camera
     */
    CameraShotBehaviorZoom.prototype.updateSettings = function (camera) {
        _super.prototype.updateSettings.call(this, camera);
        var options = this.settings.options;
        if (options.lowerRadiusLimit && options.upperRadiusLimit) {
            camera.lowerRadiusLimit = options.lowerRadiusLimit;
            camera.upperRadiusLimit = options.upperRadiusLimit;
            camera.radius = this.calculateRadius(camera);
        }
        if (options.fov) {
            // TODO: camera.inputs.removeByType('ArcRotateCameraMouseWheelInput');
        }
        if (options.wheelPrecision) {
            camera.wheelDeltaPercentage = this.settings.options.wheelPrecision;
            camera.wheelPrecision = this.settings.options.wheelPrecision;
        }
        return camera;
    };
    /**
     * Activate behavior on camera
     * @param {MVCamera} camera
     */
    CameraShotBehaviorZoom.prototype.activate = function (camera) {
        _super.prototype.activate.call(this, camera);
    };
    /**
     * Deactivate behavior on camera
     * @param {MVCamera} camera
     */
    CameraShotBehaviorZoom.prototype.deactivate = function (camera) {
        _super.prototype.deactivate.call(this, camera);
        camera.upperRadiusLimit = camera.radius;
        camera.lowerRadiusLimit = camera.radius;
    };
    /**
     * Calculate the camera radius in contrast do the aspect ratio
     * @param {MVCamera} camera
     * @return {number} radius
     */
    CameraShotBehaviorZoom.prototype.calculateRadius = function (camera) {
        var options = this.settings.options;
        var engine = camera.getScene().getEngine();
        // Get aspect radio of viewport
        var aspectRatio = engine.getAspectRatio(camera);
        // Calculate the center of the radius with lower and upper limit
        var middleValue = Math.round((options.lowerRadiusLimit + options.upperRadiusLimit) / 2);
        // Calculate a radius with middleValue multiplied by the aspect ratio to get a number, that defines
        // if it should zoom in or out. The 0.7 is the dumping factor so that the aspect radio has not that much effect.
        var radius = middleValue * aspectRatio * 0.7;
        // Subtract the radius from middle value to get an negative value that can be subtracted from middleValue
        var newRadius = middleValue - radius + middleValue;
        // Check if newRadius is in the limit bounding
        if (newRadius < options.lowerRadiusLimit) {
            newRadius = options.lowerRadiusLimit;
        }
        if (newRadius > options.upperRadiusLimit) {
            newRadius = options.upperRadiusLimit;
        }
        return newRadius;
    };
    return CameraShotBehaviorZoom;
}(CameraShotBehavior_1.CameraShotBehavior));
exports.CameraShotBehaviorZoom = CameraShotBehaviorZoom;


/***/ }),

/***/ "./src/models/camera/CameraShotBehavior/index.ts":
/*!*******************************************************!*\
  !*** ./src/models/camera/CameraShotBehavior/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./CameraShotBehavior */ "./src/models/camera/CameraShotBehavior/CameraShotBehavior.ts"));
__export(__webpack_require__(/*! ./CameraShotBehaviorOrbit */ "./src/models/camera/CameraShotBehavior/CameraShotBehaviorOrbit.ts"));
__export(__webpack_require__(/*! ./CameraShotBehaviorZoom */ "./src/models/camera/CameraShotBehavior/CameraShotBehaviorZoom.ts"));


/***/ }),

/***/ "./src/models/camera/MVCamera.ts":
/*!***************************************!*\
  !*** ./src/models/camera/MVCamera.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/**
 * Base Camera class
 */
var MVCamera = /** @class */ (function (_super) {
    __extends(MVCamera, _super);
    /**
     * Creates a new Camera
     * @param {string} name
     * @param {number} alpha
     * @param {number} beta
     * @param {number} radius
     * @param {Vector3} target
     * @param {Scene} scene
     * @param {boolean} setActiveOnSceneIfNoneActive
     */
    function MVCamera(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive) {
        return _super.call(this, name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive) || this;
    }
    /**
     * Freeze camera with sets inertial values to zero
     */
    MVCamera.prototype.freeze = function () {
        this.inertialAlphaOffset = 0.0;
        this.inertialBetaOffset = 0.0;
        this.inertialPanningX = 0.0;
        this.inertialPanningY = 0.0;
        this.inertialRadiusOffset = 0.0;
    };
    return MVCamera;
}(babylonjs_1.ArcRotateCamera));
exports.MVCamera = MVCamera;


/***/ }),

/***/ "./src/models/camera/MVCameraShot.ts":
/*!*******************************************!*\
  !*** ./src/models/camera/MVCameraShot.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
var CameraShotBehavior_1 = __webpack_require__(/*! ./CameraShotBehavior */ "./src/models/camera/CameraShotBehavior/index.ts");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./src/models/camera/interfaces.ts");
/**
 * Base camera shot class for handling camera shot settings
 */
var MVCameraShot = /** @class */ (function () {
    /**
     * Create a new Camera shot based on MVCameraShotSettings
     * @param {MVCameraShotSettings} settings
     */
    function MVCameraShot(settings) {
        var _this = this;
        var _a;
        this.behaviors = [];
        this.id = settings.id;
        this.settings = settings;
        // Set shot behavior`s if exists
        (_a = this.settings.behaviors) === null || _a === void 0 ? void 0 : _a.forEach(function (behavior) {
            if (Object.keys(interfaces_1.MVCameraShotBehaviourType).includes(behavior.type)) {
                _this.behaviors.push(_this.createNewCameraShotBehavior(behavior.type, behavior));
            }
            else {
                throw new Error("Behavior with type: " + behavior.type + " does not exist");
            }
        });
    }
    Object.defineProperty(MVCameraShot.prototype, "active", {
        /**
         * Get Active state
         * @return {boolean}
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update Camera settings/parameters including all camera shot behaviors
     * @param {MVCamera} camera that get´s updated
     */
    MVCameraShot.prototype.updateSettings = function (camera) {
        // Reset camera values
        this.resetCameraValues(camera);
        // Set required settings
        camera.setPosition(new (babylonjs_1.Vector3.bind.apply(babylonjs_1.Vector3, __spreadArrays([void 0], this.settings.position)))());
        camera.setTarget(new (babylonjs_1.Vector3.bind.apply(babylonjs_1.Vector3, __spreadArrays([void 0], this.settings.target)))(), false, true);
        camera.radius = helper_1.calculateCameraRadius(camera.position, camera.target);
        camera.upperRadiusLimit = camera.radius;
        camera.lowerRadiusLimit = camera.radius;
        // Set defaults
        camera.lowerAlphaLimit = camera.alpha;
        camera.upperAlphaLimit = camera.alpha;
        camera.lowerBetaLimit = camera.beta;
        camera.upperBetaLimit = camera.beta;
        camera.inputs.removeByType('ArcRotateCameraMouseWheelInput');
        camera.inputs.removeByType('MVCameraMouseWheelInputFOV');
        camera.inputs.add(new babylonjs_1.ArcRotateCameraMouseWheelInput());
        // Set optional settings
        camera.fov = this.settings.fov ? this.settings.fov / 57.3 : camera.fov;
        // Attach camera behaviors
        if (this.behaviors.length > 0) {
            this.behaviors.forEach(function (behavior) {
                behavior.activate(camera);
            });
        }
    };
    /**
     * Set Camera shot active
     * @param {MVCamera} camera
     */
    MVCameraShot.prototype.activate = function (camera) {
        this._active = true;
        this.updateSettings(camera);
    };
    /**
     * Deactivate camera shot
     * @param {MVCamera} camera
     */
    MVCameraShot.prototype.deactivate = function (camera) {
        this._active = false;
        if (this.behaviors.length > 0) {
            this.behaviors.forEach(function (behavior) {
                behavior.deactivate(camera);
            });
        }
    };
    /**
     * Creates a new camera shot behavior based on the MVCameraShotBehaviourType
     * @param {MVCameraShotBehaviourType} type
     * @param {MVCameraShotBehaviorSettings} settings
     * @return {CameraShotBehavior} new camera shot behavior
     */
    MVCameraShot.prototype.createNewCameraShotBehavior = function (type, settings) {
        switch (type) {
            case interfaces_1.MVCameraShotBehaviourType.ORBIT:
                return new CameraShotBehavior_1.CameraShotBehaviorOrbit(settings);
            case interfaces_1.MVCameraShotBehaviourType.ZOOM:
                return new CameraShotBehavior_1.CameraShotBehaviorZoom(settings);
        }
    };
    /**
     * Reset all camera values
     * @param {MVCamera} camera
     */
    MVCameraShot.prototype.resetCameraValues = function (camera) {
        camera.alpha = 0;
        camera.lowerAlphaLimit = null;
        camera.upperAlphaLimit = null;
        camera.beta = 0;
        camera.lowerBetaLimit = null;
        camera.upperBetaLimit = null;
    };
    return MVCameraShot;
}());
exports.MVCameraShot = MVCameraShot;


/***/ }),

/***/ "./src/models/camera/index.ts":
/*!************************************!*\
  !*** ./src/models/camera/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./interfaces */ "./src/models/camera/interfaces.ts"));
__export(__webpack_require__(/*! ./MVCameraShot */ "./src/models/camera/MVCameraShot.ts"));
__export(__webpack_require__(/*! ./MVCamera */ "./src/models/camera/MVCamera.ts"));
__export(__webpack_require__(/*! ./CameraShotBehavior/CameraShotBehavior */ "./src/models/camera/CameraShotBehavior/CameraShotBehavior.ts"));
__export(__webpack_require__(/*! ./CameraShotBehavior/CameraShotBehaviorOrbit */ "./src/models/camera/CameraShotBehavior/CameraShotBehaviorOrbit.ts"));
__export(__webpack_require__(/*! ./CameraShotBehavior/CameraShotBehaviorZoom */ "./src/models/camera/CameraShotBehavior/CameraShotBehaviorZoom.ts"));


/***/ }),

/***/ "./src/models/camera/interfaces.ts":
/*!*****************************************!*\
  !*** ./src/models/camera/interfaces.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MVCameraShotBehaviourType;
(function (MVCameraShotBehaviourType) {
    /** Orbit-Type for camera */
    MVCameraShotBehaviourType["ORBIT"] = "ORBIT";
    /** Zoom-Type for camera */
    MVCameraShotBehaviourType["ZOOM"] = "ZOOM";
})(MVCameraShotBehaviourType = exports.MVCameraShotBehaviourType || (exports.MVCameraShotBehaviourType = {}));


/***/ }),

/***/ "./src/models/configuration/configuration-interface.ts":
/*!*************************************************************!*\
  !*** ./src/models/configuration/configuration-interface.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MVRuleEngineTypes;
(function (MVRuleEngineTypes) {
    MVRuleEngineTypes["JSON"] = "JSON";
    MVRuleEngineTypes["CWS"] = "CWS";
})(MVRuleEngineTypes = exports.MVRuleEngineTypes || (exports.MVRuleEngineTypes = {}));


/***/ }),

/***/ "./src/models/configuration/interfaces.ts":
/*!************************************************!*\
  !*** ./src/models/configuration/interfaces.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MVRuleEngineTypes;
(function (MVRuleEngineTypes) {
    MVRuleEngineTypes["JSON"] = "JSON";
    MVRuleEngineTypes["CWS"] = "CWS";
})(MVRuleEngineTypes = exports.MVRuleEngineTypes || (exports.MVRuleEngineTypes = {}));


/***/ }),

/***/ "./src/models/entity/mv-entity.ts":
/*!****************************************!*\
  !*** ./src/models/entity/mv-entity.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(/*! ../configuration/interfaces */ "./src/models/configuration/interfaces.ts");
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var index_1 = __webpack_require__(/*! ../../services/index */ "./src/services/index.ts");
var material_service_factory_1 = __webpack_require__(/*! ../../services/material/material.service.factory */ "./src/services/material/material.service.factory.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
/**
 * Entity class to manage a configurable product or environment.
 */
var MVEntity = /** @class */ (function () {
    /**
     * Creates a new MVEntity
     * @param {MVEntityConfig} entityConfig
     * @param {string} entityUuid
     * @param {Scene} scene
     */
    function MVEntity(entityConfig, entityUuid, scene) {
        this.layers = [];
        this.materialMappings = [];
        this._activeConfigurationCodes = [];
        this._animationGroups = [];
        this.entityConfig = entityConfig;
        this.name = entityConfig.name;
        this.uuid = entityUuid;
        this._assetLoader = index_1.getAssetLoader(scene);
        this._scene = scene;
        this._materialsBaseUrl = this.entityConfig.entityConfigBaseUrl + this.entityConfig.materialsUrlRelative;
        this._texturesBaseUrl = this.entityConfig.entityConfigBaseUrl + this.entityConfig.texturesUrlRelative;
        this._materialService = material_service_factory_1.getMaterialService(this._scene);
        this._configurationService = index_1.getConfigurationService(this.entityConfig.ruleEngineType);
        this._meshService = index_1.getMeshService(this._scene);
    }
    /**
     * Sets the default configuration of the entity by using the configuration service. Initializes the layers, material allocators and switch materials of the entity. Does not actually apply the default configuration to the scene. It only prepares the entity before it is applied to the scene in the applyConfiguration function.
     * @return {Promise<void>}
     */
    MVEntity.prototype.setDefaultConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ruleEngineJsonUrl, _a, meshSettingsJsonUrl, _b, materialMappingsJsonUrl, _c, _d, error_1, animationsPath, _i, _e, animation, animationGroups, error_2;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!(this.entityConfig.ruleEngineType == interfaces_1.MVRuleEngineTypes.JSON)) return [3 /*break*/, 2];
                        if (!this.entityConfig.ruleEngineConfigUrlRelative) {
                            throw new Error("No entityConfigUrlRelative defined for " + this.name);
                        }
                        ruleEngineJsonUrl = this.entityConfig.entityConfigBaseUrl + this.entityConfig.ruleEngineConfigUrlRelative;
                        _a = this;
                        return [4 /*yield*/, helper_1.loadJson(ruleEngineJsonUrl)];
                    case 1:
                        _a.ruleEngineJson = _f.sent();
                        _f.label = 2;
                    case 2:
                        if (!this.entityConfig.meshSettingsRelative) return [3 /*break*/, 4];
                        meshSettingsJsonUrl = this.entityConfig.entityConfigBaseUrl + this.entityConfig.meshSettingsRelative;
                        _b = this;
                        return [4 /*yield*/, helper_1.loadJson(meshSettingsJsonUrl)];
                    case 3:
                        _b.meshSettingsJson = _f.sent();
                        _f.label = 4;
                    case 4:
                        if (!this.entityConfig.materialMappingsUrlRelative) {
                            throw new Error("No materialMappingsUrlRelative defined for " + this.name);
                        }
                        materialMappingsJsonUrl = this.entityConfig.entityConfigBaseUrl + this.entityConfig.materialMappingsUrlRelative;
                        _c = this;
                        return [4 /*yield*/, helper_1.loadJson(materialMappingsJsonUrl)];
                    case 5:
                        _c.materialMappingsJson = _f.sent();
                        if (!!this.entityConfig.rigUrlRelative) return [3 /*break*/, 6];
                        this._rootNode = new babylonjs_1.TransformNode('__root__', this._scene);
                        this._rig = [this._rootNode];
                        return [3 /*break*/, 9];
                    case 6:
                        _f.trys.push([6, 8, , 9]);
                        _d = this;
                        return [4 /*yield*/, this._assetLoader.loadMeshes(this.entityConfig.entityConfigBaseUrl, this.entityConfig.rigUrlRelative)];
                    case 7:
                        _d._rig = _f.sent();
                        this._rig.forEach(function (mesh) {
                            _this._scene.addMesh(mesh);
                        });
                        this._rootNode = this._scene.meshes
                            .find(function (mesh) { return mesh.id === '__root__'; })
                            .getChildren()[0];
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _f.sent();
                        console.log("Failed loading rig " + this.entityConfig.entityConfigBaseUrl + this.entityConfig.rigUrlRelative);
                        return [3 /*break*/, 9];
                    case 9:
                        if (!(this.entityConfig.animationsUrlRelative &&
                            this.entityConfig.animations &&
                            this.entityConfig.animations.length > 0)) return [3 /*break*/, 15];
                        animationsPath = this.entityConfig.entityConfigBaseUrl + this.entityConfig.animationsUrlRelative;
                        _i = 0, _e = this.entityConfig.animations;
                        _f.label = 10;
                    case 10:
                        if (!(_i < _e.length)) return [3 /*break*/, 15];
                        animation = _e[_i];
                        _f.label = 11;
                    case 11:
                        _f.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, this._assetLoader.loadAnimationGroups(animationsPath, animation)];
                    case 12:
                        animationGroups = _f.sent();
                        animationGroups.forEach(function (animationGroup) {
                            var clonedAnimationGroup = animationGroup.clone(animationGroup.name.split('|')[0], function (oldTarget) {
                                var targetNode = helper_1.getChildNodeById(_this._rootNode, oldTarget.id);
                                return targetNode;
                            });
                            // By default animations should not loop
                            clonedAnimationGroup.loopAnimation = false;
                            _this._animationGroups.push(clonedAnimationGroup);
                            animationGroup.dispose();
                        });
                        return [3 /*break*/, 14];
                    case 13:
                        error_2 = _f.sent();
                        console.log("Failed loading rig " + animationsPath + animation);
                        return [3 /*break*/, 14];
                    case 14:
                        _i++;
                        return [3 /*break*/, 10];
                    case 15:
                        this._configurationService.setDefaultConfiguration(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the configuration of the entity based on passed configuration codes.
     * @param {string[]} configurationCodes
     * @return {Promise<any>}
     */
    MVEntity.prototype.updateConfiguration = function (configurationCodes) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._configurationService.updateConfiguration(this, configurationCodes);
                        this._activeConfigurationCodes = configurationCodes;
                        return [4 /*yield*/, this.applyConfiguration()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Applies the current configuration to the Babylon Scene.
     * Loads / unloads meshes and materials.
     * @param {MVEntity} entity
     * @return {Promise<any>}
     */
    MVEntity.prototype.applyConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var applyMeshesToLayerPromises, _i, _a, layer, toRemoveMeshes, _b, _c, layer;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        applyMeshesToLayerPromises = [];
                        for (_i = 0, _a = this.layers; _i < _a.length; _i++) {
                            layer = _a[_i];
                            applyMeshesToLayerPromises.push(this.applyMeshesToLayer(layer));
                        }
                        return [4 /*yield*/, Promise.all(applyMeshesToLayerPromises)];
                    case 1:
                        toRemoveMeshes = _d.sent();
                        toRemoveMeshes.forEach(function (mesh) {
                            if (mesh)
                                _this._meshService.removeMeshes(mesh);
                        });
                        _b = 0, _c = this.layers;
                        _d.label = 2;
                    case 2:
                        if (!(_b < _c.length)) return [3 /*break*/, 5];
                        layer = _c[_b];
                        return [4 /*yield*/, this.applyMaterialsToLayer(layer)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, this.updateSwitchMaterials()];
                }
            });
        });
    };
    /**
     * Applies the current configuration to a layer.
     * Loads / unloads meshes.
     * @param {MVLayer} layer
     * @return {Promise<AbstractMesh[]>} layer that could be removed
     */
    MVEntity.prototype.applyMeshesToLayer = function (layer) {
        return __awaiter(this, void 0, void 0, function () {
            var meshesPath, layerFileName, meshes, error_3, _i, meshes_1, mesh, isSocket, socket, socketName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(layer.previousVisibilityState == false && layer.visibilityState == true)) return [3 /*break*/, 5];
                        meshesPath = this.entityConfig.entityConfigBaseUrl + this.entityConfig.meshesUrlRelative;
                        layerFileName = layer.name + '.glb';
                        meshes = void 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._assetLoader.loadMeshes(meshesPath, layerFileName)];
                    case 2:
                        meshes = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error("Failed loading " + meshesPath + layerFileName);
                        return [3 /*break*/, 4];
                    case 4:
                        if (meshes && meshes.length > 0) {
                            for (_i = 0, meshes_1 = meshes; _i < meshes_1.length; _i++) {
                                mesh = meshes_1[_i];
                                if (mesh.id !== '__root__') {
                                    isSocket = layer.name.includes('_socket_');
                                    socket = void 0;
                                    if (isSocket) {
                                        socketName = layer.name.split('_socket_')[1];
                                        socket = helper_1.getChildNodeById(this._rootNode, socketName);
                                    }
                                    if (!isSocket || !socket) {
                                        mesh.setParent(this._rootNode);
                                        this._scene.addMesh(mesh);
                                    }
                                    else {
                                        mesh.setParent(socket);
                                        this._scene.addMesh(mesh);
                                    }
                                }
                            }
                        }
                        layer.addMeshes(meshes);
                        layer.previousVisibilityState = true;
                        layer.visibilityState = true;
                        return [3 /*break*/, 6];
                    case 5:
                        if (layer.previousVisibilityState == true && layer.visibilityState == false) {
                            layer.previousVisibilityState = false;
                            layer.visibilityState = false;
                            return [2 /*return*/, layer.meshes];
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/, []];
                }
            });
        });
    };
    /**
     * Applies the correct materials to all meshes of a layer
     * @param {MVLayer} layer
     */
    MVEntity.prototype.applyMaterialsToLayer = function (layer) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, mesh;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(layer.visibilityState && layer.meshes)) return [3 /*break*/, 4];
                        _i = 0, _a = layer.meshes;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        mesh = _a[_i];
                        if (!(mesh.material && mesh.id !== '__root__')) return [3 /*break*/, 3];
                        this.applyMeshSettingsFromJson(mesh);
                        return [4 /*yield*/, this.processOriginalMaterial(mesh)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Apply mesh settings from JSON file if it exists.
     * @param {AbstractMesh} mesh
     */
    MVEntity.prototype.applyMeshSettingsFromJson = function (mesh) {
        if (this.meshSettingsJson) {
            var meshSetting = this.meshSettingsJson.meshes.find(function (meshSetting) {
                return meshSetting.id == mesh.id;
            });
            if (meshSetting) {
                for (var property in meshSetting) {
                    if (meshSetting[property] !== undefined) {
                        mesh[property] = meshSetting[property];
                    }
                }
            }
        }
    };
    /**
     * Processes the original material of a mesh that was imported into the application.
     * Imported materials are always mapped to target material (material allocator or target material).
     * If the material is a material allocator is is directly mapped to a target material and added to the scene. If the material is a switch material the mesh is only linked to the correconding switch material. After all materials have been processed the switch materials are assigned to the meshes and added to the scene.
     * @param {AbstractMesh} mesh
     * @return {Promise<void>}
     */
    MVEntity.prototype.processOriginalMaterial = function (mesh) {
        return __awaiter(this, void 0, void 0, function () {
            var originalMaterialName, materialMapping, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!mesh.material) return [3 /*break*/, 2];
                        originalMaterialName = mesh.material.name;
                        mesh['originalMaterialName'] = originalMaterialName;
                        if (!mesh.inspectableCustomProperties) {
                            mesh.inspectableCustomProperties = [];
                        }
                        mesh.inspectableCustomProperties.push({
                            label: 'Original Material Name',
                            propertyName: 'originalMaterialName',
                            type: babylonjs_1.InspectableType.String,
                        });
                        materialMapping = this.getMaterialMapping(originalMaterialName);
                        if (!materialMapping) return [3 /*break*/, 2];
                        materialMapping.addMesh(mesh);
                        if (!!materialMapping.isSwitchMaterial) return [3 /*break*/, 2];
                        _a = mesh;
                        return [4 /*yield*/, this.getTargetMaterialFromMaterialMapping(materialMapping)];
                    case 1:
                        _a.material = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the target material from a material mapping.
     * @param {MVMaterialMappingJson} materialMapping
     * @return {Promise<Material>}
     */
    MVEntity.prototype.getTargetMaterialFromMaterialMapping = function (materialMapping) {
        return __awaiter(this, void 0, void 0, function () {
            var targetMaterialUrl, targetMaterial;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetMaterialUrl = materialMapping.mapping;
                        targetMaterial = this._materialService.getMaterial(targetMaterialUrl);
                        if (!!targetMaterial) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._materialService.createMaterial(this._materialsBaseUrl, this._texturesBaseUrl, targetMaterialUrl, targetMaterialUrl, targetMaterialUrl)];
                    case 1:
                        targetMaterial = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, targetMaterial];
                }
            });
        });
    };
    /**
     * Updates all switch materials. Assigns the correct target materials to objects that use switch materials. Before this function is called the switchMaterials property must already have been updated by calling the updateConfiguration Function on the configurationService.
     * @return {Promise<any>}
     */
    MVEntity.prototype.updateSwitchMaterials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, materialMapping;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.materialMappings;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        materialMapping = _a[_i];
                        if (!materialMapping.isSwitchMaterial) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateSwitchMaterial(materialMapping)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, Promise.resolve([])];
                }
            });
        });
    };
    /**
     * Updates a switch material. Assigns the correct target material to the objects that use the passed switch material. Before this function is called the passed switchMaterial property must already have been updated by calling the updateConfiguration Function on the configurationService.
     * @param {MVMaterialMapping} materialMapping
     * @return {Promise<any>}
     */
    MVEntity.prototype.updateSwitchMaterial = function (materialMapping) {
        return __awaiter(this, void 0, void 0, function () {
            var targetMaterialUrl, targetMaterial_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!materialMapping.activeSlot) return [3 /*break*/, 3];
                        targetMaterialUrl = materialMapping.activeSlot.mapping;
                        targetMaterial_1 = this._materialService.getMaterial(targetMaterialUrl);
                        if (!!targetMaterial_1) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._materialService.createMaterial(this._materialsBaseUrl, this._texturesBaseUrl, targetMaterialUrl, targetMaterialUrl, targetMaterialUrl)];
                    case 1:
                        targetMaterial_1 = _a.sent();
                        _a.label = 2;
                    case 2:
                        materialMapping.meshes.forEach(function (mesh) {
                            mesh.material = targetMaterial_1;
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the layers of the entity
     * @return {MVLayer[]} Layers
     */
    MVEntity.prototype.getLayers = function () {
        return this.layers;
    };
    /**
     * Adds a layer to the entity
     * @param {MVLayer} layer
     */
    MVEntity.prototype.addLayer = function (layer) {
        this.layers.push(layer);
    };
    /**
     * Gets all material mappings of the entity
     * @return {MVMaterialMapping[]}
     */
    MVEntity.prototype.getMaterialMappings = function () {
        return this.materialMappings;
    };
    /**
     * Adds a material mapping to the entity
     * @param {MVMaterialMapping} materialMapping
     */
    MVEntity.prototype.addMaterialMapping = function (materialMapping) {
        this.materialMappings.push(materialMapping);
    };
    /**
     * Gets a material mapping by name
     * @param {string} materialMappingName
     * @return {MVMaterialMapping} Material Allocator
     */
    MVEntity.prototype.getMaterialMapping = function (materialMappingName) {
        return this.materialMappings.find(function (ma) {
            return ma.name == materialMappingName;
        });
    };
    /**
     * Updates a material mapping by name.
     * @param {string} materialMappingName
     * @param {MVMaterialMapping} updatedMaterialMapping
     */
    MVEntity.prototype.updateMaterialMapping = function (materialMappingName, updatedMaterialMapping) {
        return __awaiter(this, void 0, void 0, function () {
            var oldMaterialMappingIndex, oldMaterialMapping, targetMaterial_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldMaterialMappingIndex = this.materialMappings.findIndex(function (materialMapping) {
                            return materialMapping.name == materialMappingName;
                        });
                        if (oldMaterialMappingIndex < 0) {
                            throw new Error("Material mapping '" + materialMappingName + "' was not found.");
                        }
                        oldMaterialMapping = this.materialMappings[oldMaterialMappingIndex];
                        updatedMaterialMapping.meshes = oldMaterialMapping.meshes;
                        this.materialMappings[oldMaterialMappingIndex] = updatedMaterialMapping;
                        if (!!updatedMaterialMapping.isSwitchMaterial) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTargetMaterialFromMaterialMapping(updatedMaterialMapping)];
                    case 1:
                        targetMaterial_2 = _a.sent();
                        updatedMaterialMapping.meshes.forEach(function (mesh) {
                            mesh.material = targetMaterial_2;
                        });
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.updateConfiguration(this._activeConfigurationCodes)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets an animation group by name
     * @param {string} name
     * @return {AnimationGroup}
     */
    MVEntity.prototype.getAnimationGroup = function (name) {
        return this._animationGroups.find(function (a) { return a.name == name; });
    };
    /**
     * Plays an animation group by name. Resolves the returned promise when the animation has finished playing.
     * @param {string} animationGroupName
     * @param {number} speedRatio Defines how fast the animation is supposed to be played. 1 by default. 2 = twice as fast.
     * @return {Promise<void>}
     */
    MVEntity.prototype.playAnimationGroup = function (animationGroupName, speedRatio) {
        return __awaiter(this, void 0, void 0, function () {
            var animationGroup;
            return __generator(this, function (_a) {
                animationGroup = this.getAnimationGroup(animationGroupName);
                animationGroup.speedRatio = speedRatio || speedRatio == 0 ? speedRatio : 1;
                if (!animationGroup) {
                    throw new Error("No animation group named " + animationGroupName + " found for the entity " + this.name);
                }
                return [2 /*return*/, new Promise(function (resolve) {
                        animationGroup.play();
                        animationGroup.onAnimationGroupEndObservable.add(function (ag) {
                            helper_1.inverseAnimationGroup(ag);
                            animationGroup.onAnimationGroupEndObservable.clear();
                            return resolve();
                        });
                    })];
            });
        });
    };
    /**
     * Inverses an animation group by name.
     * @param {string} animationGroupName
     */
    MVEntity.prototype.inverseAnimationGroup = function (animationGroupName) {
        var animationGroup = this.getAnimationGroup(animationGroupName);
        if (!animationGroup) {
            throw new Error("No animation group named " + animationGroupName + " found for the entity " + this.name);
        }
        helper_1.inverseAnimationGroup(animationGroup);
    };
    return MVEntity;
}());
exports.MVEntity = MVEntity;


/***/ }),

/***/ "./src/models/entity/mv-layer.ts":
/*!***************************************!*\
  !*** ./src/models/entity/mv-layer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Layer class to manage a set of meshes or VSE (visualization unit)
 */
var MVLayer = /** @class */ (function () {
    /**
     * Creates a new MVLayer
     * @param {string} layerName Layer Name
     */
    function MVLayer(layerName) {
        this.meshes = [];
        this.name = layerName;
        this.visibilityState = false;
        this.previousVisibilityState = false;
    }
    /**
     * Adds an array of meshes to the layer
     * @param {AbstractMesh[]} meshes Meshes
     */
    MVLayer.prototype.addMeshes = function (meshes) {
        var _a;
        (_a = this.meshes).push.apply(_a, meshes);
    };
    return MVLayer;
}());
exports.MVLayer = MVLayer;


/***/ }),

/***/ "./src/models/material/index.ts":
/*!**************************************!*\
  !*** ./src/models/material/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./mvmaterial */ "./src/models/material/mvmaterial.ts"));


/***/ }),

/***/ "./src/models/material/mv-material-mapping.ts":
/*!****************************************************!*\
  !*** ./src/models/material/mv-material-mapping.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Material mapping class for a switch material or material allocator.
 */
var MVMaterialMapping = /** @class */ (function () {
    /**
     * Creates a new material mapping for a material allocator or switch material.
     * Switch materials have to initialize the property "slots".
     * Material allocators have to initialize the property "mapping".
     * @param {string} name
     * @param {string} mapping
     * @param {MVMaterialMappingJson} slots
     */
    function MVMaterialMapping(name, mapping, slots) {
        this.meshes = [];
        this.name = name;
        if (mapping) {
            this.isSwitchMaterial = false;
            this.mapping = mapping;
        }
        if (slots) {
            this.isSwitchMaterial = true;
            this.slots = slots;
        }
    }
    /**
     * Adds a mesh to the material mapping (only for switch materials)
     * @param {AbstractMesh} mesh
     */
    MVMaterialMapping.prototype.addMesh = function (mesh) {
        this.meshes.push(mesh);
    };
    return MVMaterialMapping;
}());
exports.MVMaterialMapping = MVMaterialMapping;


/***/ }),

/***/ "./src/models/material/mvmaterial.ts":
/*!*******************************************!*\
  !*** ./src/models/material/mvmaterial.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/**
 * MVMaterial for a customized material which extending the PBRMaterial from babylonjs
 */
var MVMaterial = /** @class */ (function (_super) {
    __extends(MVMaterial, _super);
    /**
     * Create a new MVMaterial
     * @param {string} name
     * @param {string} id
     * @param {Scene} scene
     * @param {any} materialConfig
     * @param {string} texturesBaseUrl
     */
    function MVMaterial(name, id, scene, materialConfig, texturesBaseUrl) {
        var _this = _super.call(this, name, scene) || this;
        if (materialConfig) {
            _this.parseMaterialFromConfig(name, id, materialConfig, scene, texturesBaseUrl);
        }
        _this.setInspectableCustomProperties();
        return _this;
    }
    /**
     * Get Class Name
     * @return {string}
     */
    MVMaterial.getClassName = function () {
        return 'MVMaterial';
    };
    /**
     * parse material from config
     * @param {string} name
     * @param {string} id
     * @param {any} materialConfig
     * @param {Scene} scene
     * @param {string} rootUrl
     */
    MVMaterial.prototype.parseMaterialFromConfig = function (name, id, materialConfig, scene, rootUrl) {
        var _this = this;
        if (rootUrl === void 0) { rootUrl = ''; }
        var material = babylonjs_1.SerializationHelper.Parse(function () { return _this; }, materialConfig, scene, rootUrl);
        material['isMVMaterial'] = true; // necessary to display save button inside of scene explorer
        material.name = name;
        material.id = id;
        if (materialConfig.clearCoat) {
            this.clearCoat.parse(materialConfig.clearCoat, scene, rootUrl);
        }
        if (materialConfig.anisotropy) {
            this.anisotropy.parse(materialConfig.anisotropy, scene, rootUrl);
        }
        if (materialConfig.brdf) {
            this.brdf.parse(materialConfig.brdf, scene, rootUrl);
        }
        if (materialConfig.sheen) {
            this.sheen.parse(materialConfig.sheen, scene, rootUrl);
        }
        if (materialConfig.subSurface) {
            this.subSurface.parse(materialConfig.subSurface, scene, rootUrl);
        }
    };
    /**
     * Sets inspectable custom properties on the material
     */
    MVMaterial.prototype.setInspectableCustomProperties = function () {
        this.inspectableCustomProperties = [
            {
                label: 'Environment Intensity',
                propertyName: 'environmentIntensity',
                type: babylonjs_1.InspectableType.Slider,
                min: 0,
                max: 20,
                step: 0.05,
            },
            {
                label: 'Direct Intensity',
                propertyName: 'directIntensity',
                type: babylonjs_1.InspectableType.Slider,
                min: 0,
                max: 20,
                step: 0.05,
            },
            {
                label: 'Emissive Intensity',
                propertyName: 'emissiveIntensity',
                type: babylonjs_1.InspectableType.Slider,
                min: 0,
                max: 20,
                step: 0.05,
            },
            {
                label: 'Max Simultaneous Lights',
                propertyName: 'maxSimultaneousLights',
                type: babylonjs_1.InspectableType.Slider,
                min: 0,
                max: 20,
                step: 1,
            },
            {
                label: 'Use Alpha From Albedo Texture',
                propertyName: 'useAlphaFromAlbedoTexture',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Specular Over Alpha',
                propertyName: 'useSpecularOverAlpha',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Roughness From Metallic Texture Alpha',
                propertyName: 'useRoughnessFromMetallicTextureAlpha',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Roughness From Metallic Texture Green',
                propertyName: 'useRoughnessFromMetallicTextureGreen',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Metallness From Metallic Texture Blue',
                propertyName: 'useMetallnessFromMetallicTextureBlue',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Ambient Occlusion From Metallic Texture Red',
                propertyName: 'useAmbientOcclusionFromMetallicTextureRed',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Disable Lighting',
                propertyName: 'disableLighting',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Invert NormalMap X',
                propertyName: 'invertNormalMapX',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Invert NormalMap Y',
                propertyName: 'invertNormalMapY',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'TwoSided Lighting',
                propertyName: 'twoSidedLighting',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Alpha Fresnel',
                propertyName: 'useAlphaFresnel',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Linear Alpha Fresnel',
                propertyName: 'useLinearAlphaFresnel',
                type: babylonjs_1.InspectableType.Checkbox,
            },
            {
                label: 'Use Lightmap as Shadowmap',
                propertyName: 'useLightmapAsShadowmap',
                type: babylonjs_1.InspectableType.Checkbox,
            },
        ];
    };
    return MVMaterial;
}(babylonjs_1.PBRMaterial));
exports.MVMaterial = MVMaterial;


/***/ }),

/***/ "./src/services/actions/actions.service.ts":
/*!*************************************************!*\
  !*** ./src/services/actions/actions.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/**
 * Service for configuring actionmanagers
 */
var ActionsService = /** @class */ (function () {
    /**
     * Creates a new BabylonJS based CollisionSphere Service
     * @param {Scene} scene - the Babylon scene
     */
    function ActionsService(scene) {
        this._scene = scene;
    }
    /**
     * Registers a click event on a specific mesh
     * @param  {Mesh} mesh
     * @param  {Function} callback Callback function that is called on every click
     */
    ActionsService.prototype.registerClickEvent = function (mesh, callback) {
        if (!mesh.actionManager) {
            mesh = this.addActionManagerToMesh(mesh);
        }
        mesh.actionManager.registerAction(new babylonjs_1.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (event) { return callback(); }));
    };
    /**
     * Adds a Babylon ActionManager to a mesh
     * @param  {Mesh} mesh
     * @return {Mesh} mesh with instantiated ActionManager
     */
    ActionsService.prototype.addActionManagerToMesh = function (mesh) {
        mesh.actionManager = new babylonjs_1.ActionManager(this._scene);
        return mesh;
    };
    return ActionsService;
}());
exports.ActionsService = ActionsService;


/***/ }),

/***/ "./src/services/asset-loader/asset-loader.factory.ts":
/*!***********************************************************!*\
  !*** ./src/services/asset-loader/asset-loader.factory.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var asset_loader_service_local_1 = __webpack_require__(/*! ./asset-loader.service.local */ "./src/services/asset-loader/asset-loader.service.local.ts");
var asset_loader_service_datahub_1 = __webpack_require__(/*! ./asset-loader.service.datahub */ "./src/services/asset-loader/asset-loader.service.datahub.ts");
var environment_1 = __webpack_require__(/*! ../../../environment/environment */ "./environment/environment.dev.ts");
var events_1 = __webpack_require__(/*! ../../globals/events */ "./src/globals/events.ts");
var assetLoader;
/**
 * Factory to get the AssetLoader
 * @constructor
 * @param {Scene} scene
 */
exports.getAssetLoader = function (scene) {
    var assetLoaderType = environment_1.AppConfig.ASSET_LOADING;
    switch (assetLoaderType) {
        case 'LOCAL': {
            if (!assetLoader) {
                console.log(assetLoaderType + " asset loader initialized");
                assetLoader = new asset_loader_service_local_1.AssetLoaderLocal(scene);
            }
            return assetLoader;
        }
        case 'DATAHUB': {
            if (!assetLoader) {
                console.log(assetLoaderType + " asset loader initialized");
                assetLoader = new asset_loader_service_datahub_1.AssetLoaderDatahub(scene);
            }
            return assetLoader;
        }
        default: {
            throw new Error("Not Implemented loader type: " + assetLoaderType);
        }
    }
};
/**
 * Resets the asset loader.
 */
function resetAssetLoader() {
    assetLoader = null;
}
events_1.onDestroy$.subscribe(function () {
    resetAssetLoader();
});


/***/ }),

/***/ "./src/services/asset-loader/asset-loader.service.datahub.ts":
/*!*******************************************************************!*\
  !*** ./src/services/asset-loader/asset-loader.service.datahub.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Datahub Asset Loader Class
 */
var AssetLoaderDatahub = /** @class */ (function () {
    /**
     * Creates a datahub asset loader class
     * @param {Scene} scene
     */
    function AssetLoaderDatahub(scene) {
        this._scene = scene;
    }
    /**
     * Loads meshes from datahub
     * @param {string} url
     * @param {string} fileName
     */
    AssetLoaderDatahub.prototype.loadMeshes = function (url, fileName) {
        throw new Error('loadMesh not implemented for Datahub');
    };
    /**
     * Loads animationGroups from datahub
     * @param {string} url
     * @param {string} fileName
     */
    AssetLoaderDatahub.prototype.loadAnimationGroups = function (url, fileName) {
        throw new Error('loadMesh not implemented for Datahub');
    };
    return AssetLoaderDatahub;
}());
exports.AssetLoaderDatahub = AssetLoaderDatahub;


/***/ }),

/***/ "./src/services/asset-loader/asset-loader.service.local.ts":
/*!*****************************************************************!*\
  !*** ./src/services/asset-loader/asset-loader.service.local.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
__webpack_require__(/*! babylonjs-loaders */ "./node_modules/babylonjs-loaders/babylonjs.loaders.min.js");
/**
 * Local Asset Loader
 */
var AssetLoaderLocal = /** @class */ (function () {
    /**
     * Creates a local asset loader
     * @param {Scene} scene
     */
    function AssetLoaderLocal(scene) {
        this._scene = scene;
    }
    /**
     * Loads meshes from a local location
     * @param {string} url
     * @param {string} fileName
     * @return {Promise<AbstractMesh[]>}
     */
    AssetLoaderLocal.prototype.loadMeshes = function (url, fileName) {
        return babylonjs_1.SceneLoader.LoadAssetContainerAsync(url, fileName, this._scene, null).then(function (assetContainer) {
            return assetContainer.meshes;
        });
    };
    /**
     * Loads animationgroups from a local location
     * @param {string} url
     * @param {string} fileName
     * @return {Promise<AbstractMesh[]>}
     */
    AssetLoaderLocal.prototype.loadAnimationGroups = function (url, fileName) {
        return babylonjs_1.SceneLoader.LoadAssetContainerAsync(url, fileName, this._scene, null).then(function (assetContainer) {
            return assetContainer.animationGroups;
        });
    };
    return AssetLoaderLocal;
}());
exports.AssetLoaderLocal = AssetLoaderLocal;


/***/ }),

/***/ "./src/services/camera/camera.service.ts":
/*!***********************************************!*\
  !*** ./src/services/camera/camera.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var camera_1 = __webpack_require__(/*! ../../models/camera */ "./src/models/camera/index.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
/**
 * Service for modifying cameras
 */
var CameraService = /** @class */ (function () {
    /**
     * Creates a new BabylonJS based Camera Service
     * @param {Scene} scene - the Babylon scene
     * @param {HTMLCanvasElement} canvas - the canvas object the scene is rendered on
     */
    function CameraService(scene, canvas) {
        this._scene = scene;
        this._canvas = canvas;
    }
    /**
     * Load CameraShotSettings from json file
     * @param {string} url
     * @return {Promise<MVCameraShotSettings>}
     */
    CameraService.prototype.loadCameraShotSettings = function (url) {
        return helper_1.loadJson(url);
    };
    /**
     * Setup the default camera
     * @return {MVCamera}
     */
    CameraService.prototype.setupDefaultCamera = function () {
        var camera = new camera_1.MVCamera('mainCamera', Math.PI / 2, Math.PI / 2, 2, babylonjs_1.Vector3.Zero(), this._scene);
        camera.attachControl(this._canvas, true);
        // Set default camera specs
        camera.useAutoRotationBehavior = false;
        camera.panningSensibility = 0;
        camera.minZ = 0.01;
        camera.wheelPrecision = 100;
        camera.speed = 1;
        camera.useNaturalPinchZoom = true;
        return camera;
    };
    return CameraService;
}());
exports.CameraService = CameraService;


/***/ }),

/***/ "./src/services/configuration/configuration.service.cws.ts":
/*!*****************************************************************!*\
  !*** ./src/services/configuration/configuration.service.cws.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Configuration Service Class to update the layers and materials of an entity depending based on a CWS based rule engine
 */
var ConfigurationServiceCWS = /** @class */ (function () {
    function ConfigurationServiceCWS() {
    }
    /**
     * Sets the default configuration of an entity
     * @param {MVEntity} entity
     */
    ConfigurationServiceCWS.prototype.setDefaultConfiguration = function () {
        throw new Error('MVConfigurationManagerCWS not yet implemented');
    };
    /**
     * Updates the current configuration of an entity
     * @param {MVEntity} entity
     * @param {string[]} configurationCodes Configuration codes
     */
    ConfigurationServiceCWS.prototype.updateConfiguration = function (entity, configurationCodes) {
        throw new Error('MVConfigurationManagerCWS not yet implemented');
    };
    return ConfigurationServiceCWS;
}());
exports.ConfigurationServiceCWS = ConfigurationServiceCWS;


/***/ }),

/***/ "./src/services/configuration/configuration.service.factory.ts":
/*!*********************************************************************!*\
  !*** ./src/services/configuration/configuration.service.factory.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_interface_1 = __webpack_require__(/*! ../../models/configuration/configuration-interface */ "./src/models/configuration/configuration-interface.ts");
var configuration_service_json_1 = __webpack_require__(/*! ./configuration.service.json */ "./src/services/configuration/configuration.service.json.ts");
var configuration_service_cws_1 = __webpack_require__(/*! ./configuration.service.cws */ "./src/services/configuration/configuration.service.cws.ts");
var events_1 = __webpack_require__(/*! ../../globals/events */ "./src/globals/events.ts");
var configurationServiceJson;
var configurationServiceCWS;
/**
 * Factory to get a configuration service to manage an entity
 * @param {MVRuleEngineTypes} ruleEngineType
 * @return {ConfigurationService} configuration service
 */
exports.getConfigurationService = function (ruleEngineType) {
    switch (ruleEngineType) {
        case configuration_interface_1.MVRuleEngineTypes.JSON: {
            if (!configurationServiceJson) {
                configurationServiceJson = new configuration_service_json_1.ConfigurationServiceJson();
            }
            return configurationServiceJson;
        }
        case configuration_interface_1.MVRuleEngineTypes.CWS: {
            if (!configurationServiceCWS) {
                configurationServiceCWS = new configuration_service_cws_1.ConfigurationServiceCWS();
            }
            return configurationServiceCWS;
        }
        default: {
            throw new Error("Not Implemented rule engine type: " + ruleEngineType);
        }
    }
};
/**
 * Resets the configurationService.
 */
function resetConfigurationService() {
    configurationServiceCWS = null;
    configurationServiceJson = null;
}
events_1.onDestroy$.subscribe(function () {
    resetConfigurationService();
});


/***/ }),

/***/ "./src/services/configuration/configuration.service.json.ts":
/*!******************************************************************!*\
  !*** ./src/services/configuration/configuration.service.json.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mv_layer_1 = __webpack_require__(/*! ../../models/entity/mv-layer */ "./src/models/entity/mv-layer.ts");
var mv_material_mapping_1 = __webpack_require__(/*! ../../models/material/mv-material-mapping */ "./src/models/material/mv-material-mapping.ts");
/**
 * Configuration Service Class to update the layers and switch materials of an entity depending based on a JSON based rule engine. Does not actually modify the scene.
 */
var ConfigurationServiceJson = /** @class */ (function () {
    function ConfigurationServiceJson() {
    }
    /**
     * Updates the current configuration of an entity based on a rule engine JSON file and the current configuration codes.
     * Does not actually modify the scene. Only used to prepare the entity after configuration updates before the changes are applied to the scene in the MVEntity class.
     * Updates the layer visibility as well as the switch materials of the entity.
     * Before this function is called the function setDefaultConfiguration must have been called.
     * @param {MVEntity} entity
     * @param {string[]} configurationCodes
     * @return {MVEntity}
     */
    ConfigurationServiceJson.prototype.updateConfiguration = function (entity, configurationCodes) {
        if (!entity.ruleEngineJson) {
            throw new Error("Error during configuration update for entity " + entity.name + " because no rule engine is set");
        }
        entity.ruleEngineJson.properties.forEach(function (property) {
            // A property is active when its option code is included in the current configuration codes
            var propertyIsActive = configurationCodes.includes(property.code);
            // create active layers and add them to the entity object
            if (property.layerNames) {
                property.layerNames.forEach(function (layerName) {
                    var layer = entity.layers.find(function (l) { return l.name == layerName; });
                    // create layer if it does not already exist
                    if (!layer) {
                        layer = new mv_layer_1.MVLayer(layerName);
                        entity.addLayer(layer);
                    }
                    layer.visibilityState = propertyIsActive;
                });
            }
            // Check if the switch material schemes in the rule engine are valid.
            // Update the activeSlot property of all switch materials that are currently active.
            if (property.materialSchemes && propertyIsActive) {
                property.materialSchemes.forEach(function (materialScheme) {
                    var materialMapping = entity.getMaterialMapping(materialScheme.switchMaterialName);
                    if (!materialMapping) {
                        throw new Error("The rule engine property " + property.code + " in " + entity.entityConfig.ruleEngineConfigUrlRelative + " is invalid. The switch material " + materialScheme.switchMaterialName + " was not found in " + entity.entityConfig.materialMappingsUrlRelative);
                    }
                    var targetSwitchMaterialSlot = materialMapping.slots.find(function (m) {
                        return m.name == materialScheme.switchMaterialSlot;
                    });
                    if (!targetSwitchMaterialSlot) {
                        throw new Error("The rule engine property " + property.code + " in " + entity.entityConfig.ruleEngineConfigUrlRelative + " is invalid. The switch material slot " + materialScheme.switchMaterialSlot + " of the switch material " + materialScheme.switchMaterialName + " was not found in " + entity.entityConfig.materialMappingsUrlRelative);
                    }
                    materialMapping.activeSlot = targetSwitchMaterialSlot;
                    materialMapping.mapping = targetSwitchMaterialSlot.mapping;
                });
            }
        });
        return entity;
    };
    /**
     * Sets the default configuration of an entity.
     * Does not actually modify the scene.
     * Only used to prepare the entity before its meshes and materials are added to the scene in the MVEntity class.
     * @param {MVEntity} entity
     * @return {MVEntity}
     */
    ConfigurationServiceJson.prototype.setDefaultConfiguration = function (entity) {
        if (!entity.ruleEngineJson) {
            throw new Error("Error during default configuration setup for entity " + entity.name + " because no rule engine is set");
        }
        if (!entity.materialMappingsJson) {
            throw new Error("Error during default configuration setup for entity " + entity.name + " because no rule engine is set");
        }
        // Add a new layer for every nonConfigurableLayer in the rule engine.
        entity.ruleEngineJson.nonConfigurableLayers.forEach(function (layerName) {
            var layer = new mv_layer_1.MVLayer(layerName);
            layer.visibilityState = true;
            entity.addLayer(layer);
        });
        // Add the material allocators specified in the material_mappings.json file to the entity for better maintenance.
        entity.materialMappingsJson.materialAllocators.forEach(function (materialAllocatorMapping) {
            var materialMapping = new mv_material_mapping_1.MVMaterialMapping(materialAllocatorMapping.name, materialAllocatorMapping.mapping);
            if (materialMapping) {
                entity.addMaterialMapping(materialMapping);
            }
        });
        // Add the switch materials in the material_mappings.json file to the entity for better maintenance.
        entity.materialMappingsJson.switchMaterials.forEach(function (switchMaterialMapping) {
            var materialMapping = new mv_material_mapping_1.MVMaterialMapping(switchMaterialMapping.name, null, switchMaterialMapping.slots);
            if (materialMapping) {
                entity.addMaterialMapping(materialMapping);
            }
        });
        return entity;
    };
    return ConfigurationServiceJson;
}());
exports.ConfigurationServiceJson = ConfigurationServiceJson;


/***/ }),

/***/ "./src/services/environment/environment.service.ts":
/*!*********************************************************!*\
  !*** ./src/services/environment/environment.service.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var texture_service_1 = __webpack_require__(/*! ../texture/texture.service */ "./src/services/texture/texture.service.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
/**
 * Service to modify the environment of the BabylonJS based scene
 */
var EnvironmentService = /** @class */ (function () {
    /**
     * Creates a new BabylonJS based Environment Service
     * @param {Scene} scene - the Babylon scene
     */
    function EnvironmentService(scene) {
        this._scene = scene;
        this._textureService = new texture_service_1.TextureService(this._scene);
    }
    /**
     * Setup the default environment with lights
     */
    EnvironmentService.prototype.setupDefaultEnvironment = function () {
        this._scene.clearColor = new babylonjs_1.Color4(1, 1, 1, 1);
        this._scene.fogMode = babylonjs_1.Scene.FOGMODE_NONE;
        // Add lights to the scene
        new babylonjs_1.HemisphericLight('hemisphericLight', new babylonjs_1.Vector3(1, 1, 0), this._scene);
    };
    /**
     * Set a new background image
     * @param {string} textureUrl
     * @param {string} texturesName
     * @return {Promise<void>}
     */
    EnvironmentService.prototype.setBackgroundImage = function (textureUrl, texturesName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var backdrop = new babylonjs_1.Layer('backdrop', textureUrl + texturesName, _this._scene);
            backdrop.texture.onLoadObservable.add(function () {
                backdrop.isBackground = true;
                backdrop.texture.level = 0;
                resolve();
            });
        });
    };
    /**
     * Applies settings from Environment config file
     * @param {MVEntityConfig} entityConfig
     * @param {MVEnvironmentConfigs} environmentConfigs
     * @param {string} configurationCode
     */
    EnvironmentService.prototype.applyEnvironmentSettings = function (entityConfig, environmentConfigs, configurationCode) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var environmentConfig, _loop_1, this_1, _i, _b, _c, key, value;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.clearScene();
                        environmentConfig = this.getEnvironmentConfigFromConfigurationString(environmentConfigs, configurationCode);
                        if (!environmentConfig)
                            return [2 /*return*/];
                        _loop_1 = function (key, value) {
                            var _i, value_1, lightJSON, glowLayer, color, color;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(key.toLowerCase() === 'lights')) return [3 /*break*/, 1];
                                        for (_i = 0, value_1 = value; _i < value_1.length; _i++) {
                                            lightJSON = value_1[_i];
                                            this_1.parseLights(lightJSON);
                                        }
                                        return [3 /*break*/, 5];
                                    case 1:
                                        if (!(key == 'glowLayerIntensity')) return [3 /*break*/, 2];
                                        glowLayer = (_a = this_1._scene.effectLayers) === null || _a === void 0 ? void 0 : _a.find(function (effectLayer) { return effectLayer.name === 'glowLayer'; });
                                        if (glowLayer) {
                                            if (value == 0) {
                                                glowLayer.dispose();
                                            }
                                            else {
                                                glowLayer.intensity = value;
                                            }
                                        }
                                        else if (!glowLayer) {
                                            glowLayer = new babylonjs_1.GlowLayer('glowLayer', this_1._scene);
                                            glowLayer.intensity = value;
                                        }
                                        return [3 /*break*/, 5];
                                    case 2:
                                        if (!key.toLowerCase().includes('background')) return [3 /*break*/, 4];
                                        // Handle background imaged
                                        return [4 /*yield*/, this_1.setBackgroundImage(entityConfig.entityConfigBaseUrl + entityConfig.texturesUrlRelative, value)];
                                    case 3:
                                        // Handle background imaged
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        if (helper_1.isString(value) || helper_1.isNumber(value) || helper_1.isBoolean(value)) {
                                            // Handle string, number and boolean
                                            this_1._scene[key] = value;
                                        }
                                        else if (helper_1.isColor4(value)) {
                                            color = new babylonjs_1.Color4(value.r, value.g, value.b, value.a);
                                            this_1._scene[key] = color;
                                        }
                                        else if (helper_1.isColor3(value)) {
                                            color = new babylonjs_1.Color3(value.r, value.g, value.b);
                                            this_1._scene[key] = color;
                                        }
                                        else if (key.toLowerCase().includes('texture')) {
                                            // Handle textures
                                            this_1._textureService
                                                .createOrGetTexture(value, entityConfig.entityConfigBaseUrl + entityConfig.texturesUrlRelative)
                                                .then(function (texture) { return (_this._scene[key] = texture); });
                                        }
                                        else {
                                            console.log("Property " + key + " with value: " + value + " Currently not supported");
                                        }
                                        _a.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _b = Object.entries(environmentConfig);
                        _d.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 4];
                        _c = _b[_i], key = _c[0], value = _c[1];
                        return [5 /*yield**/, _loop_1(key, value)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load EnvironmentConfigs
     * @param {string} url
     * @return {Promise<MVEnvironmentConfigs | null>}
     */
    EnvironmentService.prototype.loadConfigFile = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, helper_1.loadJson(url)];
                    case 1:
                        config = _a.sent();
                        return [2 /*return*/, config];
                    case 2:
                        e_1 = _a.sent();
                        console.warn("No environment configs available for " + url);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable / Hide environment
     * @param {MVEntity} environment
     * @param {boolean} hide
     */
    EnvironmentService.prototype.setEnvironmentEnableStatus = function (environment, hide) {
        if (hide === void 0) { hide = true; }
        this._scene.unfreezeActiveMeshes();
        environment.getLayers().forEach(function (layer) {
            layer.meshes.forEach(function (mesh) { return mesh.setEnabled(!hide); });
        });
        this._scene.freeActiveMeshes();
    };
    /**
     * Get a MVEnvironmentConfig from configuration codes
     * @param {MVEnvironmentConfigs} environmentConfigs
     * @param {string} configurationCode
     * @return {MVEnvironmentConfig}
     */
    EnvironmentService.prototype.getEnvironmentConfigFromConfigurationString = function (environmentConfigs, configurationCode) {
        var _a;
        return (_a = environmentConfigs.mappings.find(function (mappping) { return mappping.code === configurationCode; })) === null || _a === void 0 ? void 0 : _a.config;
    };
    /**
     * Parse lights
     * @param {any} lightJSON
     */
    EnvironmentService.prototype.parseLights = function (lightJSON) {
        switch (lightJSON.type) {
            case 0:
                var pointLight = new babylonjs_1.PointLight(lightJSON.name, new babylonjs_1.Vector3(lightJSON.position[0], lightJSON.position[1], lightJSON.position[2]), this._scene);
                this.applyLightSettings(pointLight, lightJSON);
                break;
            case 1:
                var directionalLight = new babylonjs_1.DirectionalLight(lightJSON.name, new babylonjs_1.Vector3(lightJSON.direction[0], lightJSON.direction[1], lightJSON.direction[2]), this._scene);
                this.applyLightSettings(directionalLight, lightJSON);
                break;
            case 2:
                var spotLight = new babylonjs_1.SpotLight(lightJSON.name, new babylonjs_1.Vector3(lightJSON.position[0], lightJSON.position[1], lightJSON.position[2]), new babylonjs_1.Vector3(lightJSON.direction[0], lightJSON.direction[1], lightJSON.direction[2]), lightJSON.angle, lightJSON.exponent, this._scene);
                this.applyLightSettings(spotLight, lightJSON);
                break;
            case 3:
                var hemisphericLight = new babylonjs_1.HemisphericLight(lightJSON.name, new babylonjs_1.Vector3(lightJSON.direction[0], lightJSON.direction[1], lightJSON.direction[2]), this._scene);
                this.applyLightSettings(hemisphericLight, lightJSON);
                break;
            default:
                console.error('Light needs a type! ', lightJSON);
        }
    };
    /**
     * Applies settings to an existing light
     * @param {PointLight | DirectionalLight | SpotLight | HemisphericLight} light - a Babylon light
     * @param {any} settings  settings
     */
    EnvironmentService.prototype.applyLightSettings = function (light, settings) {
        var _loop_2 = function (key, value) {
            if (key.toLowerCase() === 'direction') {
                // handle light direction
                if (helper_1.isVector3Array(value))
                    light.setDirectionToTarget(new babylonjs_1.Vector3(value[0], value[1], value[2]));
            }
            else if (key.toLowerCase() === 'position') {
                return { value: void 0 };
            }
            else if (helper_1.isVector3Array(value)) {
                // handle light colors
                light[key] = new babylonjs_1.Color3(value[0], value[1], value[2]);
            }
            else if (key.toLowerCase() === 'animations') {
                // handle animations
                light[key] = [];
                value.map(function (animation) {
                    light[key].push(new babylonjs_1.Animation(animation.name, animation.targetProperty, animation.framePerSecond, animation.dataType, helper_1.isNumber(animation.loopMode) ? animation.loopMode : null, helper_1.isBoolean(animation.enableBlending) ? animation.enableBlending : null));
                });
            }
            else if (helper_1.isString(value) || helper_1.isNumber(value) || helper_1.isBoolean(value)) {
                light[key] = value;
            }
        };
        for (var _i = 0, _a = Object.entries(settings); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var state_1 = _loop_2(key, value);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    /**
     * Clean scene lights, layers
     */
    EnvironmentService.prototype.clearScene = function () {
        var _this = this;
        var _a, _b;
        // remove lights
        var lights = __spreadArrays(this._scene.lights);
        lights.forEach(function (light) {
            _this._scene.removeLight(light);
            light.dispose();
        });
        // remove backdrop
        var layer = (_b = (_a = this._scene) === null || _a === void 0 ? void 0 : _a.layers) === null || _b === void 0 ? void 0 : _b.find(function (layer) { return layer.name === 'backdrop'; });
        if (layer) {
            layer.dispose();
        }
    };
    return EnvironmentService;
}());
exports.EnvironmentService = EnvironmentService;


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./camera/camera.service */ "./src/services/camera/camera.service.ts"));
__export(__webpack_require__(/*! ./environment/environment.service */ "./src/services/environment/environment.service.ts"));
__export(__webpack_require__(/*! ./asset-loader/asset-loader.factory */ "./src/services/asset-loader/asset-loader.factory.ts"));
__export(__webpack_require__(/*! ./asset-loader/asset-loader.service.datahub */ "./src/services/asset-loader/asset-loader.service.datahub.ts"));
__export(__webpack_require__(/*! ./asset-loader/asset-loader.service.local */ "./src/services/asset-loader/asset-loader.service.local.ts"));
__export(__webpack_require__(/*! ./mesh/mesh.service */ "./src/services/mesh/mesh.service.ts"));
__export(__webpack_require__(/*! ./mesh/mesh.service.factory */ "./src/services/mesh/mesh.service.factory.ts"));
__export(__webpack_require__(/*! ./material/material.service */ "./src/services/material/material.service.ts"));
__export(__webpack_require__(/*! ./configuration/configuration.service.cws */ "./src/services/configuration/configuration.service.cws.ts"));
__export(__webpack_require__(/*! ./configuration/configuration.service.factory */ "./src/services/configuration/configuration.service.factory.ts"));
__export(__webpack_require__(/*! ./configuration/configuration.service.json */ "./src/services/configuration/configuration.service.json.ts"));
__export(__webpack_require__(/*! ./texture/texture.service */ "./src/services/texture/texture.service.ts"));
__export(__webpack_require__(/*! ./actions/actions.service */ "./src/services/actions/actions.service.ts"));


/***/ }),

/***/ "./src/services/material/material.service.factory.ts":
/*!***********************************************************!*\
  !*** ./src/services/material/material.service.factory.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_service_1 = __webpack_require__(/*! ./material.service */ "./src/services/material/material.service.ts");
var events_1 = __webpack_require__(/*! ../../globals/events */ "./src/globals/events.ts");
var materialService;
/**
 * Initializes and returns the material service.
 * @param {Scene} scene
 * @return {MaterialService}
 */
exports.getMaterialService = function (scene) {
    if (!materialService) {
        materialService = new material_service_1.MaterialService(scene);
    }
    return materialService;
};
/**
 * Resets the material service.
 */
function resetMaterialService() {
    materialService = null;
}
events_1.onDestroy$.subscribe(function () {
    resetMaterialService();
});


/***/ }),

/***/ "./src/services/material/material.service.ts":
/*!***************************************************!*\
  !*** ./src/services/material/material.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var helper_1 = __webpack_require__(/*! ../../helper */ "./src/helper/index.ts");
var material_1 = __webpack_require__(/*! ../../models/material */ "./src/models/material/index.ts");
/**
 * Material Class
 */
var MaterialService = /** @class */ (function () {
    /**
     * Create new Material-Service
     * @param {Scene} scene
     */
    function MaterialService(scene) {
        this._scene = scene;
    }
    /**
     * Get material from scene with id
     * @param {string} id
     * @return {Material}
     */
    MaterialService.prototype.getMaterial = function (id) {
        return this._scene.materials.find(function (material) { return material.id === id; });
    };
    /**
     * Create a new Material
     * @param {string} materialBaseUrl
     * @param {string} textureBaseUrl
     * @param {string} id
     * @param {string} name
     * @param {string} fileName
     * @return {Promise<MVMaterial|NodeMaterial>}
     */
    MaterialService.prototype.createMaterial = function (materialBaseUrl, textureBaseUrl, id, name, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var material, fullMaterialJsonUrl, materialConfig, nodeMaterial;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        material = this.getMaterial(id);
                        if (material) {
                            throw new Error("Material with id: " + id + " already exists.");
                        }
                        if (!fileName) return [3 /*break*/, 2];
                        fullMaterialJsonUrl = materialBaseUrl + fileName;
                        return [4 /*yield*/, helper_1.loadJson(fullMaterialJsonUrl)];
                    case 1:
                        materialConfig = _a.sent();
                        if (materialConfig.customType == 'BABYLON.PBRMaterial') {
                            return [2 /*return*/, new material_1.MVMaterial(name, id, this._scene, materialConfig, textureBaseUrl)];
                        }
                        else if (materialConfig.customType == 'BABYLON.NodeMaterial') {
                            nodeMaterial = babylonjs_1.NodeMaterial.Parse(materialConfig, this._scene, textureBaseUrl);
                            nodeMaterial['isMVMaterial'] = true; // necessary to display save button inside of scene explorer
                            return [2 /*return*/, nodeMaterial];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new material_1.MVMaterial(name, id, this._scene)];
                }
            });
        });
    };
    /**
     * Delete material from id
     * @param {string} id
     */
    MaterialService.prototype.deleteMaterial = function (id) {
        this.getMaterial(id).dispose();
    };
    return MaterialService;
}());
exports.MaterialService = MaterialService;


/***/ }),

/***/ "./src/services/mesh/mesh.service.factory.ts":
/*!***************************************************!*\
  !*** ./src/services/mesh/mesh.service.factory.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mesh_service_1 = __webpack_require__(/*! ./mesh.service */ "./src/services/mesh/mesh.service.ts");
var events_1 = __webpack_require__(/*! ../../globals/events */ "./src/globals/events.ts");
var meshService;
exports.getMeshService = function (scene) {
    if (!meshService) {
        meshService = new mesh_service_1.MeshService(scene);
    }
    return meshService;
};
/**
 * Resets the mesh service.
 */
function resetMeshService() {
    meshService = null;
}
events_1.onDestroy$.subscribe(function () {
    resetMeshService();
});


/***/ }),

/***/ "./src/services/mesh/mesh.service.ts":
/*!*******************************************!*\
  !*** ./src/services/mesh/mesh.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var asset_loader_factory_1 = __webpack_require__(/*! ../asset-loader/asset-loader.factory */ "./src/services/asset-loader/asset-loader.factory.ts");
/**
 * Service for modifying meshes
 */
var MeshService = /** @class */ (function () {
    /**
     * Creates a new BabylonJS based Mesh Service
     * @param {Scene} scene - the Babylon scene
     */
    function MeshService(scene) {
        this._scene = scene;
        this._assetLoader = asset_loader_factory_1.getAssetLoader(scene);
    }
    /**
     * Load GLB or GLTF files
     * @param {string} url
     * @param {string} fileName
     */
    MeshService.prototype.loadMeshes = function (url, fileName) {
        this._assetLoader.loadMeshes(url, fileName);
    };
    /**
     * Removes a mesh from the scene
     * @param {AbstractMesh} mesh Mesh
     * @return {Promise<void>}
     */
    MeshService.prototype.removeMesh = function (mesh) {
        return new Promise(function (resolve) {
            mesh.onDisposeObservable.add(function () { return resolve(); });
            mesh.dispose(false, false);
        });
    };
    /**
     * Removes meshes from the scene
     * @param {AbstractMesh[]} meshes Meshes
     * @return {Promise<any>}
     */
    MeshService.prototype.removeMeshes = function (meshes) {
        var _this = this;
        var removePromises = [];
        meshes.forEach(function (mesh) {
            removePromises.push(_this.removeMesh(mesh));
        });
        return Promise.all(removePromises);
    };
    /**
     * Create basic plane mesh
     * @param  {string} name
     * @param  {number} size
     * @param  {Vector3} position
     * @param  {boolean} billboardModeAll?
     * @return {Mesh}
     */
    MeshService.prototype.createPlane = function (name, size, position, billboardModeAll) {
        var planeMesh = babylonjs_1.MeshBuilder.CreatePlane(name, {
            size: size,
        }, this._scene);
        planeMesh.position = position;
        planeMesh.visibility = 1;
        planeMesh.billboardMode = billboardModeAll ? babylonjs_1.Mesh.BILLBOARDMODE_ALL : babylonjs_1.Mesh.BILLBOARDMODE_NONE;
        return planeMesh;
    };
    /**
     * Create basic sphere mesh
     * @param  {string} name
     * @param  {number} diameter
     * @param  {Vector3} position
     * @param  {boolean} visible
     * @return {Mesh}
     */
    MeshService.prototype.createSphere = function (name, diameter, position, visible) {
        var sphere = babylonjs_1.MeshBuilder.CreateSphere(name, {
            diameter: diameter,
        }, this._scene);
        sphere.position = position;
        sphere.visibility = visible ? 1 : 0;
        return sphere;
    };
    return MeshService;
}());
exports.MeshService = MeshService;


/***/ }),

/***/ "./src/services/texture/texture.service.ts":
/*!*************************************************!*\
  !*** ./src/services/texture/texture.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/**
 * Texture service for handling textures in scene
 */
var TextureService = /** @class */ (function () {
    /**
     * Create a new TextureService
     * @param {Scene} scene
     */
    function TextureService(scene) {
        this._scene = scene;
    }
    /**
     * Create or get a texture if exist in scene
     * @param {any} config
     * @param {string} rootUrl
     * @return {BaseTexture}
     */
    TextureService.prototype.createOrGetTexture = function (config, rootUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // new textures only have to be created if they do not already exist in the scene
                        var texture = _this._scene.textures.find(function (texture) { return texture.name === config.name; });
                        if (texture) {
                            resolve(texture);
                        }
                        else {
                            texture = babylonjs_1.Texture.Parse(config, _this._scene, rootUrl);
                            texture.getInternalTexture().onLoadedObservable.add(function () {
                                resolve(texture);
                            });
                        }
                    })];
            });
        });
    };
    return TextureService;
}());
exports.TextureService = TextureService;


/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./playground/src/main.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\BABYLonJsProjects\mv-webgl-core\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./playground/src/main.ts */"./playground/src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=app.54b827a26311202f709d.js.map