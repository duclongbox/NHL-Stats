"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favourite",{

/***/ "./components/FavoriteTeamsProvider.js":
/*!*********************************************!*\
  !*** ./components/FavoriteTeamsProvider.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavoriteTeamsContext: function() { return /* binding */ FavoriteTeamsContext; },\n/* harmony export */   FavoriteTeamsProvider: function() { return /* binding */ FavoriteTeamsProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Create the context\nconst FavoriteTeamsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Create a provider component\nconst FavoriteTeamsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [favoriteTeams, setFavoriteTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addTeamToFavorites = (team)=>{\n        setFavoriteTeams((prevFavorites)=>{\n            if (!prevFavorites.includes(team)) {\n                return [\n                    ...prevFavorites,\n                    team\n                ];\n            }\n            return prevFavorites;\n        });\n    };\n    const removeTeamFromFavorites = (team)=>{\n        setFavoriteTeams((prevFavorites)=>prevFavorites.filter((favTeam)=>favTeam !== team));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteTeamsContext.Provider, {\n        value: {\n            favoriteTeams,\n            addTeamToFavorites,\n            removeTeamFromFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/components/FavoriteTeamsProvider.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FavoriteTeamsProvider, \"EM5fZKOTANwfgQkWocVFniiMAsw=\");\n_c = FavoriteTeamsProvider;\nvar _c;\n$RefreshReg$(_c, \"FavoriteTeamsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zhdm9yaXRlVGVhbXNQcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUV2RCxxQkFBcUI7QUFDZCxNQUFNRyxxQ0FBdUJGLG9EQUFhQSxHQUFHO0FBRXBELDhCQUE4QjtBQUN2QixNQUFNRyx3QkFBd0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2hELE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckQsTUFBTU0scUJBQXFCLENBQUNDO1FBQzFCRixpQkFBaUIsQ0FBQ0c7WUFDaEIsSUFBSSxDQUFDQSxjQUFjQyxRQUFRLENBQUNGLE9BQU87Z0JBQ2pDLE9BQU87dUJBQUlDO29CQUFlRDtpQkFBSztZQUNqQztZQUNBLE9BQU9DO1FBQ1Q7SUFDRjtJQUVBLE1BQU1FLDBCQUEwQixDQUFDSDtRQUMvQkYsaUJBQWlCLENBQUNHLGdCQUNoQkEsY0FBY0csTUFBTSxDQUFDLENBQUNDLFVBQVlBLFlBQVlMO0lBRWxEO0lBRUEscUJBQ0UsOERBQUNOLHFCQUFxQlksUUFBUTtRQUFDQyxPQUFPO1lBQUVWO1lBQWVFO1lBQW9CSTtRQUF3QjtrQkFDaEdQOzs7Ozs7QUFHUCxFQUFFO0dBdkJXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zhdm9yaXRlVGVhbXNQcm92aWRlci5qcz9jNDNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gQ3JlYXRlIHRoZSBjb250ZXh0XG5leHBvcnQgY29uc3QgRmF2b3JpdGVUZWFtc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIENyZWF0ZSBhIHByb3ZpZGVyIGNvbXBvbmVudFxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlVGVhbXNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2Zhdm9yaXRlVGVhbXMsIHNldEZhdm9yaXRlVGVhbXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZFRlYW1Ub0Zhdm9yaXRlcyA9ICh0ZWFtKSA9PiB7XG4gICAgc2V0RmF2b3JpdGVUZWFtcygocHJldkZhdm9yaXRlcykgPT4ge1xuICAgICAgaWYgKCFwcmV2RmF2b3JpdGVzLmluY2x1ZGVzKHRlYW0pKSB7XG4gICAgICAgIHJldHVybiBbLi4ucHJldkZhdm9yaXRlcywgdGVhbV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldkZhdm9yaXRlcztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUZWFtRnJvbUZhdm9yaXRlcyA9ICh0ZWFtKSA9PiB7XG4gICAgc2V0RmF2b3JpdGVUZWFtcygocHJldkZhdm9yaXRlcykgPT5cbiAgICAgIHByZXZGYXZvcml0ZXMuZmlsdGVyKChmYXZUZWFtKSA9PiBmYXZUZWFtICE9PSB0ZWFtKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmF2b3JpdGVUZWFtc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZmF2b3JpdGVUZWFtcywgYWRkVGVhbVRvRmF2b3JpdGVzLCByZW1vdmVUZWFtRnJvbUZhdm9yaXRlcyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zhdm9yaXRlVGVhbXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJGYXZvcml0ZVRlYW1zQ29udGV4dCIsIkZhdm9yaXRlVGVhbXNQcm92aWRlciIsImNoaWxkcmVuIiwiZmF2b3JpdGVUZWFtcyIsInNldEZhdm9yaXRlVGVhbXMiLCJhZGRUZWFtVG9GYXZvcml0ZXMiLCJ0ZWFtIiwicHJldkZhdm9yaXRlcyIsImluY2x1ZGVzIiwicmVtb3ZlVGVhbUZyb21GYXZvcml0ZXMiLCJmaWx0ZXIiLCJmYXZUZWFtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FavoriteTeamsProvider.js\n"));

/***/ })

});