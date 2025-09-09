(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/utils/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Authentication Utility Functions
 * 
 * This file contains utility functions for authentication-related operations
 * such as token validation, token decoding, and authentication state management.
 */ __turbopack_context__.s([
    "clearAuthState",
    ()=>clearAuthState,
    "getApiBaseUrl",
    ()=>getApiBaseUrl,
    "validateToken",
    ()=>validateToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
;
const validateToken = (token)=>{
    if (!token) {
        return {
            valid: false,
            error: 'No token provided'
        };
    }
    try {
        // Decode the token to get its payload
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(token);
        // Check if token has expiration claim
        if (!decoded.exp) {
            return {
                valid: false,
                error: 'Token has no expiration date',
                payload: decoded
            };
        }
        // Check if token is expired
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp < currentTime) {
            return {
                valid: false,
                error: 'Token expired',
                expiredAt: new Date(decoded.exp * 1000).toLocaleString(),
                currentTime: new Date().toLocaleString(),
                payload: decoded
            };
        }
        // Token is valid
        return {
            valid: true,
            payload: decoded,
            expiresAt: new Date(decoded.exp * 1000).toLocaleString()
        };
    } catch (error) {
        return {
            valid: false,
            error: "Token validation error: ".concat(error.message)
        };
    }
};
const clearAuthState = ()=>{
    try {
        localStorage.removeItem('user');
        return true;
    } catch (error) {
        console.error('Error clearing auth state:', error);
        return false;
    }
};
const getApiBaseUrl = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || '';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Toast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * Toast notification component for displaying user-friendly messages
 * @param {Object} props - Component props
 * @param {string} props.message - Message to display
 * @param {string} props.type - Type of toast (success, error, warning, info)
 * @param {number} props.duration - Duration in ms to show toast
 * @param {function} props.onClose - Function to call when toast is closed
 */ const Toast = (param)=>{
    let { message, type = 'info', duration = 5000, onClose } = param;
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": ()=>{
            const timer = setTimeout({
                "Toast.useEffect.timer": ()=>{
                    setVisible(false);
                    if (onClose) onClose();
                }
            }["Toast.useEffect.timer"], duration);
            return ({
                "Toast.useEffect": ()=>clearTimeout(timer)
            })["Toast.useEffect"];
        }
    }["Toast.useEffect"], [
        duration,
        onClose
    ]);
    const handleClose = ()=>{
        setVisible(false);
        if (onClose) onClose();
    };
    if (!visible) return null;
    // Define styles based on type
    const styles = {
        success: 'bg-green-50 border-green-500 text-green-700',
        error: 'bg-red-50 border-red-500 text-red-700',
        warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
        info: 'bg-blue-50 border-blue-500 text-blue-700'
    };
    const iconMap = {
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Toast.js",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Toast.js",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Toast.js",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Toast.js",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Toast.js",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Toast.js",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Toast.js",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Toast.js",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50 animate-fade-in-down",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center p-4 rounded-lg shadow-lg border-l-4 ".concat(styles[type]),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 mr-3",
                    children: iconMap[type]
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Toast.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Toast.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Toast.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "ml-4 text-gray-500 hover:text-gray-700 focus:outline-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Toast.js",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Toast.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Toast.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Toast.js",
            lineNumber: 65,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Toast.js",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toast, "+l2LUTlfMHnsWfc+O34BMiR0NHk=");
_c = Toast;
const __TURBOPACK__default__export__ = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/ToastContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Toast.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Create context
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const ToastProvider = (param)=>{
    let { children } = param;
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    /**
   * Show a toast notification
   * @param {string} message - Message to display
   * @param {string} type - Type of toast (success, error, warning, info)
   * @param {number} duration - Duration in ms to show toast
   */ const showToast = function(message) {
        let type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'info', duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5000;
        const id = Date.now();
        setToasts((prevToasts)=>[
                ...prevToasts,
                {
                    id,
                    message,
                    type,
                    duration
                }
            ]);
    };
    /**
   * Remove a toast notification
   * @param {number} id - ID of toast to remove
   */ const removeToast = (id)=>{
        setToasts((prevToasts)=>prevToasts.filter((toast)=>toast.id !== id));
    };
    // Convenience methods for different toast types
    const showSuccessToast = (message, duration)=>showToast(message, 'success', duration);
    const showErrorToast = (message, duration)=>showToast(message, 'error', duration);
    const showWarningToast = (message, duration)=>showToast(message, 'warning', duration);
    const showInfoToast = (message, duration)=>showToast(message, 'info', duration);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast,
            showSuccessToast,
            showErrorToast,
            showWarningToast,
            showInfoToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast-container",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: toast.message,
                        type: toast.type,
                        duration: toast.duration,
                        onClose: ()=>removeToast(toast.id)
                    }, toast.id, false, {
                        fileName: "[project]/src/app/context/ToastContext.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/context/ToastContext.js",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/context/ToastContext.js",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastProvider, "nD8TBOiFYf9ajstmZpZK2DP4rNo=");
_c = ToastProvider;
const useToast = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/auth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ToastContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // Load user from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    // Login user
    const login = async (email, password)=>{
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message || 'Login failed';
                toast.showErrorToast(errorMessage);
                throw new Error(errorMessage);
            }
            const data = await response.json();
            // Save user to state and localStorage
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            toast.showSuccessToast('Login successful');
            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };
    // Register user
    const register = async (userData)=>{
        try {
            const formData = new FormData();
            // Append all user data to formData
            Object.keys(userData).forEach((key)=>{
                formData.append(key, userData[key]);
            });
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (!response.ok) {
                // Handle specific error messages from the backend
                let errorMessage = data.message || 'Registration failed';
                if (data.message === 'User already exists') {
                    errorMessage = 'A user with this email already exists';
                } else if (data.message === 'Username already exists') {
                    errorMessage = 'This username is already taken';
                }
                toast.showErrorToast(errorMessage);
                throw new Error(errorMessage);
            }
            // Save user to state and localStorage
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            toast.showSuccessToast('Registration successful!');
            return data;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };
    // Logout user
    const logout = ()=>{
        setUser(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthState"])(); // Using clearAuthState from utils/auth.js
        toast.showInfoToast('You have been logged out');
        window.location.href = '/';
    };
    // Using getApiBaseUrl from utils/auth.js
    // Check if token is expired and needs refresh
    const checkTokenValidity = (token)=>{
        if (!token) return false;
        try {
            const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateToken"])(token);
            console.log('Token validation result:', validation);
            return validation.valid;
        } catch (error) {
            console.error('Token validation error:', error);
            return false;
        }
    };
    // Refresh the authentication token
    const refreshToken = async ()=>{
        try {
            if (!user || !user.token) {
                console.error('No user or refresh token available');
                return false;
            }
            console.log('Attempting to refresh token...');
            const response = await fetch("".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])(), "/api/auth/refresh"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: user.token
                }),
                credentials: 'include'
            });
            if (!response.ok) {
                console.error('Token refresh failed:', response.status);
                // If refresh fails, log out the user
                setUser(null);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthState"])();
                return false;
            }
            const data = await response.json();
            // Update user with new token
            const updatedUser = {
                ...user,
                token: data.token
            };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            console.log('Token refreshed successfully');
            return true;
        } catch (error) {
            console.error('Error refreshing token:', error);
            return false;
        }
    };
    // Get current user profile with improved error handling and token management
    const getUserProfile = async function() {
        let allowRetry = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        try {
            // Check if user is authenticated
            if (!user || !user.token) {
                console.error('No authentication token available');
                toast.showErrorToast('You need to log in first');
                return null; // Return null instead of throwing to prevent app crash
            }
            // Log token for debugging (first 10 chars only for security)
            const tokenPreview = user.token.substring(0, 10) + '...';
            console.log("Fetching profile with token: ".concat(tokenPreview));
            try {
                // Check if token is valid before making the request
                if (!checkTokenValidity(user.token)) {
                    console.log('Token appears to be expired, attempting refresh...');
                    const refreshed = await refreshToken();
                    if (!refreshed) {
                        console.error('Token refresh failed, redirecting to login');
                        toast.showWarningToast('Your session has expired. Please log in again.');
                        setUser(null);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthState"])();
                        return null;
                    }
                }
            } catch (validationError) {
                console.error('Token validation failed:', validationError.message || validationError);
                // If token validation fails completely, try to refresh
                const refreshed = await refreshToken();
                if (!refreshed) {
                    toast.showWarningToast('Authentication error. Please log in again.');
                    setUser(null);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthState"])();
                    return null;
                }
            }
            // Determine API URL
            const apiUrl = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])(), "/api/users/profile");
            console.log("Making request to: ".concat(apiUrl));
            let response;
            try {
                response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer ".concat(user.token),
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    // Prevent caching to always get fresh data
                    cache: 'no-store',
                    // Add credentials for cookie-based auth if needed
                    credentials: 'include'
                });
            } catch (fetchError) {
                // Handle network errors (offline, DNS failure, etc)
                const errorMessage = fetchError.message || 'Network connection error';
                console.error('Network error during profile fetch:', errorMessage);
                toast.showErrorToast('Unable to connect to the server. Please check your internet connection.');
                return null;
            }
            // Handle different response statuses
            if (!response.ok) {
                // Log detailed response information for debugging
                const errorDetails = {
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url,
                    headers: Object.fromEntries([
                        ...response.headers.entries()
                    ])
                };
                console.error('Profile fetch failed with details:', errorDetails);
                // Handle authentication errors
                if (response.status === 401 && allowRetry) {
                    console.error('Unauthorized: Token rejected by server');
                    toast.showWarningToast('Your session has expired. Please log in again.');
                    // Try to refresh token once
                    const refreshed = await refreshToken();
                    if (!refreshed) {
                        // Clear user data if unauthorized and refresh failed
                        setUser(null);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthState"])();
                        return null;
                    }
                    // Retry with new token (but only once to prevent infinite loops)
                    return getUserProfile(false); // Pass false to prevent further retries
                }
                // Try to get error details from response
                let errorMessage = "Failed to fetch user profile: ".concat(response.status, " ").concat(response.statusText);
                let errorData = {};
                try {
                    errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                    console.error('Server error response:', errorData);
                } catch (e) {
                    // If parsing JSON fails, use default error message
                    console.error('Could not parse error response:', e.message);
                }
                // Show user-friendly error message based on status code
                if (response.status === 403) {
                    toast.showErrorToast('You don\'t have permission to access this resource.');
                } else if (response.status === 404) {
                    toast.showErrorToast('Your profile information could not be found.');
                } else if (response.status >= 500) {
                    toast.showErrorToast('The server encountered an error. Please try again later.');
                } else {
                    toast.showErrorToast('Failed to load your profile. Please try again.');
                }
                // For other error codes, return null instead of throwing
                return null;
            }
            let data;
            try {
                data = await response.json();
            } catch (parseError) {
                console.error('Error parsing profile response:', parseError.message);
                toast.showErrorToast('There was a problem processing the server response.');
                return null;
            }
            if (!data) {
                console.error('Profile data is empty or invalid');
                toast.showErrorToast('Your profile information appears to be incomplete.');
                return null;
            }
            console.log('Profile fetched successfully:', data.name || data.email || 'Unknown user');
            // Only update user state if the data is different to prevent unnecessary re-renders
            const hasChanges = JSON.stringify(data) !== JSON.stringify({
                ...user,
                token: undefined // Exclude token from comparison
            });
            if (hasChanges) {
                console.log('User profile data changed, updating state');
                const updatedUser = {
                    ...user,
                    ...data
                };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
            } else {
                console.log('No changes in user profile data, skipping state update');
            }
            return data;
        } catch (error) {
            // Log detailed error information
            console.error('Get profile error:', {
                message: error.message || 'Unknown error',
                stack: error.stack,
                name: error.name,
                code: error.code
            });
            // Show a generic error message to the user
            toast.showErrorToast('An unexpected error occurred while loading your profile.');
            // Return null instead of throwing to prevent app crash
            return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            register,
            logout,
            getUserProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/AuthContext.js",
        lineNumber: 330,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "N0bNqoO7IRRunem7LcxX9ThfOb8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/AuthButtons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function AuthButtons() {
    _s();
    const { user, loading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // If loading, show a loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 w-20 bg-gray-200 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AuthButtons.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 w-20 bg-gray-200 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AuthButtons.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/AuthButtons.js",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    // If user is logged in, show profile and logout
    if (user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/profile",
                    className: "flex items-center space-x-2 bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm",
                    children: [
                        user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: user.profilePic,
                            alt: "Profile",
                            className: "h-6 w-6 rounded-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AuthButtons.js",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AuthButtons.js",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AuthButtons.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/AuthButtons.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: user.role === 'student' ? '/dashboard/student' : '/dashboard/teacher',
                    className: "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm",
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AuthButtons.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/AuthButtons.js",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    // Default: show login and register buttons
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/login",
                className: "bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm",
                children: "Sign In"
            }, void 0, false, {
                fileName: "[project]/src/app/components/AuthButtons.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/register",
                className: "bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm",
                children: "Register"
            }, void 0, false, {
                fileName: "[project]/src/app/components/AuthButtons.js",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AuthButtons, "J1wbEQUqGiSsIGaKjYslnCgfUz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthButtons;
var _c;
__turbopack_context__.k.register(_c, "AuthButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/FooterLinks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FooterLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function FooterLinks() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "text-gray-400 hover:text-white transition-colors",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/FooterLinks.js",
                    lineNumber: 10,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/FooterLinks.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            user ? // Show profile and dashboard links for logged in users
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/profile",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FooterLinks.js",
                            lineNumber: 14,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FooterLinks.js",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: user.role === 'student' ? '/dashboard/student' : '/dashboard/teacher',
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FooterLinks.js",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FooterLinks.js",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : // Show login and register links for guests
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FooterLinks.js",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FooterLinks.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/register",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Register"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FooterLinks.js",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FooterLinks.js",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/FooterLinks.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(FooterLinks, "9ep4vdl3mBfipxjmc+tQCDhw6Ik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = FooterLinks;
var _c;
__turbopack_context__.k.register(_c, "FooterLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_6d1c43fc._.js.map