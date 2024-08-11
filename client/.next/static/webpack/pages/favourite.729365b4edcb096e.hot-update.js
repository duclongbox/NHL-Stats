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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FavTeamCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FavTeamCard */ \"./components/FavTeamCard.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Container,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FavouritePage = (param)=>{\n    let {} = param;\n    _s();\n    const [favoriteTeams, setFavoriteTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let logo1 = \"\";\n    let logo2 = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFavoriteTeams = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5001/api/favouriteteam\", {\n                    method: \"GET\"\n                });\n                const data = await response.json();\n                setFavoriteTeams(data);\n            } catch (err) {\n                console.error(\"Error fetching favourite teams:\", err);\n            }\n        };\n        fetchFavoriteTeams();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchEvents = async ()=>{\n            try {\n                const response = await fetch(\"https://nhl-api5.p.rapidapi.com/schedule-team?season=2023&teamId=\".concat(favoriteTeams[0].id), {\n                    method: \"GET\",\n                    headers: {\n                        \"X-RapidAPI-Key\": \"eefbd83667msh07bc10831bc5508p1bb942jsn3715de833f51\",\n                        \"X-RapidAPI-Host\": \"nhl-api5.p.rapidapi.com\"\n                    }\n                });\n                const data = await response.json();\n                const slicedEvents = (data.events || []).slice(0, 2);\n                setEvents(slicedEvents);\n            } catch (err) {\n                console.error(\"Error fetching favourite teams:\", err);\n            }\n        };\n        fetchEvents();\n    }, []);\n    if (events && events.length > 0 && events[0].competitions) {\n        logo1 = events[0].competitions[0].competitors[0].team.logos ? events[0].competitions[0].competitors[0].team.logos[0].href : \"no logo\";\n        logo2 = events[0].competitions[0].competitors[1].team.logos ? events[0].competitions[0].competitors[1].team.logos[0].href : \"no logo\";\n        console.log(\"Logo1: \", logo1);\n        console.log(\"Logo2: \", logo2);\n    }\n    const formatDate = (dateString)=>{\n        // Extract the month and date from the date string\n        const month = dateString.substring(5, 7);\n        const day = dateString.substring(8, 10);\n        return \"\".concat(month, \"-\").concat(day);\n    };\n    const formatTime = (dateString)=>{\n        // Extract the time from the date string\n        const time = dateString.substring(11, 16);\n        return time;\n    };\n    console.log(favoriteTeams);\n    console.log(events);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"white\",\n                    textAlign: \"center\"\n                },\n                children: \"Team Schedule Expected here\"\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 76,\n                columnNumber: 96\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 76,\n                columnNumber: 103\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                style: {\n                    color: \"white\",\n                    textAlign: \"center\"\n                },\n                children: events && events.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        sm: 12,\n                        md: 6,\n                        lg: 4,\n                        xl: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: event.competitions[0].competitors[0].team.logos[0].href,\n                                            alt: \"Team 1 Logo\",\n                                            style: {\n                                                width: \"50px\",\n                                                height: \"50px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        \" vs \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: event.competitions[0].competitors[1].team.logos[0].href,\n                                            alt: \"Team 2 Logo\",\n                                            style: {\n                                                width: \"50px\",\n                                                height: \"50px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 161\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: formatDate(event.date)\n                                }, void 0, false, {\n                                    fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: formatTime(event.date)\n                                }, void 0, false, {\n                                    fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"white\",\n                    textAlign: \"center\"\n                },\n                children: \"Your Favourite Teams\"\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 91,\n                columnNumber: 89\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 91,\n                columnNumber: 96\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                children: favoriteTeams && favoriteTeams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        sm: 12,\n                        md: 6,\n                        lg: 3,\n                        xl: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FavTeamCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            team: team\n                        }, void 0, false, {\n                            fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, undefined)\n                    }, team.id, false, {\n                        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                        lineNumber: 95,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iam28/Desktop/Seneca CPA/Semester 4/WEB422/TheFinalProject/NHL-Stats/client/pages/favourite.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FavouritePage, \"obDQb3+hJZiw6HfHc1Qn7Rn4BEQ=\");\n_c = FavouritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavouritePage);\nvar _c;\n$RefreshReg$(_c, \"FavouritePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUNqQyw4REFBQzNCLHlGQUFHQTt3QkFBZTZDLElBQUk7d0JBQUlDLElBQUk7d0JBQUdDLElBQUk7d0JBQUdDLElBQUk7a0NBQ3pDLDRFQUFDbkQsK0RBQVdBOzRCQUFDOEIsTUFBTUE7Ozs7Ozt1QkFEYkEsS0FBS1AsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQWhHTWpCO0tBQUFBO0FBa0dOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zhdm91cml0ZS5qcz80MGY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmF2VGVhbUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0ZhdlRlYW1DYXJkJztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmF2b3VyaXRlUGFnZSA9ICh7fSkgPT4ge1xuICBjb25zdCBbZmF2b3JpdGVUZWFtcywgc2V0RmF2b3JpdGVUZWFtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgbGV0IGxvZ28xID0gJyc7XG4gIGxldCBsb2dvMiA9ICcnO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRmF2b3JpdGVUZWFtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDEvYXBpL2Zhdm91cml0ZXRlYW0nLCB7XG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RmF2b3JpdGVUZWFtcyhkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZhdm91cml0ZSB0ZWFtczonLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZmV0Y2hGYXZvcml0ZVRlYW1zKCk7XG4gICAgfSwgW10pO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL25obC1hcGk1LnAucmFwaWRhcGkuY29tL3NjaGVkdWxlLXRlYW0/c2Vhc29uPTIwMjMmdGVhbUlkPSR7ZmF2b3JpdGVUZWFtc1swXS5pZH1gLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLVJhcGlkQVBJLUtleSc6ICdlZWZiZDgzNjY3bXNoMDdiYzEwODMxYmM1NTA4cDFiYjk0MmpzbjM3MTVkZTgzM2Y1MScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ25obC1hcGk1LnAucmFwaWRhcGkuY29tJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlZEV2ZW50cyA9IChkYXRhLmV2ZW50cyB8fCBbXSkuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICAgICAgICBzZXRFdmVudHMoc2xpY2VkRXZlbnRzKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBmYXZvdXJpdGUgdGVhbXM6JywgZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgXG4gICAgICAgICAgZmV0Y2hFdmVudHMoKTtcbiAgICAgIH0sIFtdKTtcblxuICAgIGlmIChldmVudHMgJiYgZXZlbnRzLmxlbmd0aCA+IDAgJiYgZXZlbnRzWzBdLmNvbXBldGl0aW9ucykge1xuICAgICAgICBsb2dvMSA9IGV2ZW50c1swXS5jb21wZXRpdGlvbnNbMF0uY29tcGV0aXRvcnNbMF0udGVhbS5sb2dvcyA/IGV2ZW50c1swXS5jb21wZXRpdGlvbnNbMF0uY29tcGV0aXRvcnNbMF0udGVhbS5sb2dvc1swXS5ocmVmIDogJ25vIGxvZ28nO1xuICAgICAgICBsb2dvMiA9IGV2ZW50c1swXS5jb21wZXRpdGlvbnNbMF0uY29tcGV0aXRvcnNbMV0udGVhbS5sb2dvcyA/IGV2ZW50c1swXS5jb21wZXRpdGlvbnNbMF0uY29tcGV0aXRvcnNbMV0udGVhbS5sb2dvc1swXS5ocmVmIDogJ25vIGxvZ28nOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nbzE6IFwiLCBsb2dvMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nbzI6IFwiLCBsb2dvMik7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIG1vbnRoIGFuZCBkYXRlIGZyb20gdGhlIGRhdGUgc3RyaW5nXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcoNSwgNyk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKDgsIDEwKTtcbiAgICAgICAgcmV0dXJuIGAke21vbnRofS0ke2RheX1gO1xuICAgIH07XG5cbiAgICBjb25zdCBmb3JtYXRUaW1lID0gKGRhdGVTdHJpbmcpID0+IHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgdGltZSBmcm9tIHRoZSBkYXRlIHN0cmluZ1xuICAgICAgICBjb25zdCB0aW1lID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcoMTEsIDE2KTtcbiAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlVGVhbXMpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50cyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5UZWFtIFNjaGVkdWxlIEV4cGVjdGVkIGhlcmU8L2gxPiA8YnIgLz4gPGJyIC8+XG5cbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIHtldmVudHMgJiYgZXZlbnRzLm1hcCgoZXZlbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9IG1kPXs2fSBsZz17NH0geGw9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZlbnQuY29tcGV0aXRpb25zWzBdLmNvbXBldGl0b3JzWzBdLnRlYW0ubG9nb3NbMF0uaHJlZn0gYWx0PVwiVGVhbSAxIExvZ29cIiBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICc1MHB4JyB9fS8+IHZzIDxpbWcgc3JjPXtldmVudC5jb21wZXRpdGlvbnNbMF0uY29tcGV0aXRvcnNbMV0udGVhbS5sb2dvc1swXS5ocmVmfSBhbHQ9XCJUZWFtIDIgTG9nb1wiIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJzUwcHgnIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2Zvcm1hdERhdGUoZXZlbnQuZGF0ZSl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtYXRUaW1lKGV2ZW50LmRhdGUpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5Zb3VyIEZhdm91cml0ZSBUZWFtczwvaDE+IDxiciAvPiA8YnIgLz5cblxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICB7ZmF2b3JpdGVUZWFtcyAmJiBmYXZvcml0ZVRlYW1zLm1hcCgodGVhbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17dGVhbS5pZH0gc209ezEyfSBtZD17Nn0gbGc9ezN9IHhsPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYXZUZWFtQ2FyZCB0ZWFtPXt0ZWFtfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJGYXZUZWFtQ2FyZCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmF2b3VyaXRlUGFnZSIsImZhdm9yaXRlVGVhbXMiLCJzZXRGYXZvcml0ZVRlYW1zIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwibG9nbzEiLCJsb2dvMiIsImZldGNoRmF2b3JpdGVUZWFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImZldGNoRXZlbnRzIiwiaWQiLCJoZWFkZXJzIiwic2xpY2VkRXZlbnRzIiwic2xpY2UiLCJsZW5ndGgiLCJjb21wZXRpdGlvbnMiLCJjb21wZXRpdG9ycyIsInRlYW0iLCJsb2dvcyIsImhyZWYiLCJsb2ciLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsIm1vbnRoIiwic3Vic3RyaW5nIiwiZGF5IiwiZm9ybWF0VGltZSIsInRpbWUiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJiciIsIm1hcCIsImV2ZW50Iiwic20iLCJtZCIsImxnIiwieGwiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwiZGF0ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/favourite.js\n"));

/***/ })

});