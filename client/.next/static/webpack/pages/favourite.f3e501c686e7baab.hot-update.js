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

/***/ "./pages/favourite.js":
/*!****************************!*\
  !*** ./pages/favourite.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FavTeamCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FavTeamCard */ \"./components/FavTeamCard.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Container,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FavouritePage = (param)=>{\n    let {} = param;\n    _s();\n    const [favoriteTeams, setFavoriteTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFavoriteTeams = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5001/api/favouriteteam\", {\n                    method: \"GET\"\n                });\n                const data = await response.json();\n                setFavoriteTeams(data);\n            } catch (err) {\n                console.error(\"Error fetching favourite teams:\", err);\n            }\n        };\n        fetchFavoriteTeams();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchEventsForTeams = async ()=>{\n            try {\n                const eventsPromises = favoriteTeams.map((team)=>fetch(\"https://nhl-api5.p.rapidapi.com/schedule-team?season=2023&teamId=\".concat(team.id), {\n                        method: \"GET\",\n                        headers: {\n                            \"X-RapidAPI-Key\": \"eefbd83667msh07bc10831bc5508p1bb942jsn3715de833f51\",\n                            \"X-RapidAPI-Host\": \"nhl-api5.p.rapidapi.com\"\n                        }\n                    }).then((response)=>response.json()));\n                const eventsData = await Promise.all(eventsPromises);\n                // Create an object with team IDs as keys and limited events as values\n                const eventsByTeam = eventsData.reduce((acc, data, index)=>{\n                    acc[favoriteTeams[index].id] = data.events.slice(0, 3);\n                    return acc;\n                }, {});\n                setTeamEvents(eventsByTeam);\n            } catch (err) {\n                console.error(\"Error fetching team events:\", err);\n            }\n        };\n        if (favoriteTeams.length > 0) {\n            fetchEventsForTeams();\n        }\n    }, []);\n    console.log(events);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"white\",\n                    textAlign: \"center\"\n                },\n                children: \"Team Schedule Expected here\"\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 69,\n                columnNumber: 96\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 69,\n                columnNumber: 103\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                style: {\n                    color: \"white\",\n                    textAlign: \"center\"\n                },\n                children: events && events.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        sm: 12,\n                        md: 6,\n                        lg: 3,\n                        xl: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: [\n                                        event.competitions[0].competitors[0].team.displayName,\n                                        \" vs \",\n                                        event.competitions[0].competitors[1].team.displayName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: event.date\n                                }, void 0, false, {\n                                    fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"white\",\n                    textAlign: \"center\"\n                },\n                children: \"Your Favourite Teams\"\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 81,\n                columnNumber: 89\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 81,\n                columnNumber: 96\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                children: favoriteTeams && favoriteTeams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        sm: 12,\n                        md: 6,\n                        lg: 3,\n                        xl: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FavTeamCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            team: team\n                        }, void 0, false, {\n                            fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined)\n                    }, team.id, false, {\n                        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FavouritePage, \"obDQb3+hJZiw6HfHc1Qn7Rn4BEQ=\");\n_c = FavouritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavouritePage);\nvar _c;\n$RefreshReg$(_c, \"FavouritePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUNDLHFCQUNqQyw4REFBQ3BCLHlGQUFHQTt3QkFBZXlDLElBQUk7d0JBQUlDLElBQUk7d0JBQUdDLElBQUk7d0JBQUdDLElBQUk7a0NBQ3pDLDRFQUFDL0MsK0RBQVdBOzRCQUFDdUIsTUFBTUE7Ozs7Ozt1QkFEYkEsS0FBS0MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQXRGTWxCO0tBQUFBO0FBd0ZOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zhdm91cml0ZS5qcz80MGY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmF2VGVhbUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0ZhdlRlYW1DYXJkJztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmF2b3VyaXRlUGFnZSA9ICh7fSkgPT4ge1xuICBjb25zdCBbZmF2b3JpdGVUZWFtcywgc2V0RmF2b3JpdGVUZWFtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cblxuICBcbiAgXG4gIFxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRmF2b3JpdGVUZWFtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvYXBpL2Zhdm91cml0ZXRlYW0nLCB7XG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RmF2b3JpdGVUZWFtcyhkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZhdm91cml0ZSB0ZWFtczonLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZmV0Y2hGYXZvcml0ZVRlYW1zKCk7XG4gICAgfSwgW10pO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRXZlbnRzRm9yVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50c1Byb21pc2VzID0gZmF2b3JpdGVUZWFtcy5tYXAodGVhbSA9PiBcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vbmhsLWFwaTUucC5yYXBpZGFwaS5jb20vc2NoZWR1bGUtdGVhbT9zZWFzb249MjAyMyZ0ZWFtSWQ9JHt0ZWFtLmlkfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJ2VlZmJkODM2Njdtc2gwN2JjMTA4MzFiYzU1MDhwMWJiOTQyanNuMzcxNWRlODMzZjUxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ25obC1hcGk1LnAucmFwaWRhcGkuY29tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRzRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKGV2ZW50c1Byb21pc2VzKTtcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0ZWFtIElEcyBhcyBrZXlzIGFuZCBsaW1pdGVkIGV2ZW50cyBhcyB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudHNCeVRlYW0gPSBldmVudHNEYXRhLnJlZHVjZSgoYWNjLCBkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhY2NbZmF2b3JpdGVUZWFtc1tpbmRleF0uaWRdID0gZGF0YS5ldmVudHMuc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgc2V0VGVhbUV2ZW50cyhldmVudHNCeVRlYW0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbSBldmVudHM6JywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZmF2b3JpdGVUZWFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmZXRjaEV2ZW50c0ZvclRlYW1zKCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zb2xlLmxvZyhldmVudHMpO1xuICAgIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5UZWFtIFNjaGVkdWxlIEV4cGVjdGVkIGhlcmU8L2gxPiA8YnIgLz4gPGJyIC8+XG5cbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIHtldmVudHMgJiYgZXZlbnRzLm1hcCgoZXZlbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9IG1kPXs2fSBsZz17M30geGw9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2V2ZW50LmNvbXBldGl0aW9uc1swXS5jb21wZXRpdG9yc1swXS50ZWFtLmRpc3BsYXlOYW1lfSB2cyB7ZXZlbnQuY29tcGV0aXRpb25zWzBdLmNvbXBldGl0b3JzWzFdLnRlYW0uZGlzcGxheU5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2V2ZW50LmRhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5Zb3VyIEZhdm91cml0ZSBUZWFtczwvaDE+IDxiciAvPiA8YnIgLz5cblxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICB7ZmF2b3JpdGVUZWFtcyAmJiBmYXZvcml0ZVRlYW1zLm1hcCgodGVhbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17dGVhbS5pZH0gc209ezEyfSBtZD17Nn0gbGc9ezN9IHhsPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYXZUZWFtQ2FyZCB0ZWFtPXt0ZWFtfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJGYXZUZWFtQ2FyZCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmF2b3VyaXRlUGFnZSIsImZhdm9yaXRlVGVhbXMiLCJzZXRGYXZvcml0ZVRlYW1zIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiZmV0Y2hGYXZvcml0ZVRlYW1zIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmV0Y2hFdmVudHNGb3JUZWFtcyIsImV2ZW50c1Byb21pc2VzIiwibWFwIiwidGVhbSIsImlkIiwiaGVhZGVycyIsInRoZW4iLCJldmVudHNEYXRhIiwiUHJvbWlzZSIsImFsbCIsImV2ZW50c0J5VGVhbSIsInJlZHVjZSIsImFjYyIsImluZGV4Iiwic2xpY2UiLCJzZXRUZWFtRXZlbnRzIiwibGVuZ3RoIiwibG9nIiwiaDEiLCJzdHlsZSIsImNvbG9yIiwidGV4dEFsaWduIiwiYnIiLCJldmVudCIsInNtIiwibWQiLCJsZyIsInhsIiwiZGl2IiwiY29tcGV0aXRpb25zIiwiY29tcGV0aXRvcnMiLCJkaXNwbGF5TmFtZSIsImgzIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/favourite.js\n"));

/***/ })

});