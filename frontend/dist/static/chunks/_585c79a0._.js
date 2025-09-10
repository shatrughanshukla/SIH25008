(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/auth/success/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ToastContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AuthSuccess() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs to track state and prevent duplicate operations
    const hasShownToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasProcessedAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const redirectTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const errorRedirectTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Set isClient to true once component mounts (client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthSuccess.useEffect": ()=>{
            setIsClient(true);
        }
    }["AuthSuccess.useEffect"], []);
    // Display initial success message only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthSuccess.useEffect": ()=>{
            if (isClient && !hasShownToast.current) {
                toast.showSuccessToast('Login successful! Redirecting to dashboard...');
                hasShownToast.current = true;
            }
        }
    }["AuthSuccess.useEffect"], [
        isClient,
        toast
    ]);
    // Main authentication logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthSuccess.useEffect": ()=>{
            // Only run on client-side
            if (!isClient) return;
            // Get token and userId from URL params
            const token = searchParams.get('token');
            const userId = searchParams.get('userId');
            console.log('Auth Success Page - Token:', token ? 'Present' : 'Missing');
            console.log('Auth Success Page - UserId:', userId ? 'Present' : 'Missing');
            // Prevent processing more than once
            if (hasProcessedAuth.current) return;
            // Check if we've already processed this login in a previous session
            const hasProcessed = sessionStorage.getItem('auth_processed');
            if (hasProcessed) {
                console.log('Auth already processed, redirecting to dashboard');
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    try {
                        const user = JSON.parse(storedUser);
                        // Update the AuthContext state with the stored user
                        setUser(user);
                        const redirectPath = user.role === 'teacher' ? '/dashboard/teacher' : '/dashboard/student';
                        router.push(redirectPath);
                    } catch (e) {
                        console.error('Error parsing stored user:', e);
                        router.push('/login');
                    }
                } else {
                    // If no user in localStorage but we have token/userId in URL, process the auth again
                    if (token && userId) {
                        console.log('No stored user but have token/userId, processing auth again');
                        sessionStorage.removeItem('auth_processed');
                    } else {
                        router.push('/login');
                        return;
                    }
                }
                return;
            }
            // Mark that we've started processing this authentication
            hasProcessedAuth.current = true;
            const processAuthentication = {
                "AuthSuccess.useEffect.processAuthentication": async ()=>{
                    if (!token || !userId) {
                        handleAuthError('Missing token or user ID');
                        return;
                    }
                    try {
                        // Fetch user data to get role and other information
                        const apiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
                        const profileUrl = "".concat(apiUrl, "/api/users/profile");
                        console.log('Fetching user profile from:', profileUrl);
                        const response = await fetch(profileUrl, {
                            headers: {
                                'Authorization': "Bearer ".concat(token),
                                'Content-Type': 'application/json'
                            },
                            cache: 'no-store' // Prevent caching issues
                        });
                        console.log('Profile API Response Status:', response.status);
                        if (!response.ok) {
                            throw new Error("Failed to fetch user profile: ".concat(response.status));
                        }
                        const userData = await response.json();
                        console.log('User data received:', userData);
                        // Create user object with token and user data
                        const user = {
                            _id: userId,
                            name: userData.name,
                            email: userData.email,
                            username: userData.username,
                            role: userData.role || 'student',
                            token: token
                        };
                        console.log('Saving user to localStorage and AuthContext:', user);
                        // Save user to localStorage
                        localStorage.setItem('user', JSON.stringify(user));
                        // Update the AuthContext state with the user
                        setUser(user);
                        // Mark this authentication as processed in session storage AFTER successful profile fetch
                        sessionStorage.setItem('auth_processed', 'true');
                        // Show success message (only if we haven't already)
                        if (!hasShownToast.current) {
                            toast.showSuccessToast('Successfully logged in with Google!');
                            hasShownToast.current = true;
                        }
                        setLoading(false);
                        // Redirect based on user role
                        const redirectPath = userData.role === 'teacher' ? '/dashboard/teacher' : '/dashboard/student';
                        console.log('Redirecting to:', redirectPath);
                        // Add a small delay before redirecting to ensure localStorage is updated
                        redirectTimer.current = setTimeout({
                            "AuthSuccess.useEffect.processAuthentication": ()=>{
                                router.push(redirectPath);
                            }
                        }["AuthSuccess.useEffect.processAuthentication"], 2000);
                    } catch (error) {
                        console.error('Error during Google auth success:', error);
                        handleAuthError(error.message);
                    }
                }
            }["AuthSuccess.useEffect.processAuthentication"];
            const handleAuthError = {
                "AuthSuccess.useEffect.handleAuthError": (errorMessage)=>{
                    setError(errorMessage);
                    setLoading(false);
                    toast.showErrorToast("Authentication error: ".concat(errorMessage));
                    // Clear the auth processed flag on error
                    sessionStorage.removeItem('auth_processed');
                    // Clear any existing user data to prevent login loops
                    localStorage.removeItem('user');
                    // Clear the AuthContext state
                    setUser(null);
                    errorRedirectTimer.current = setTimeout({
                        "AuthSuccess.useEffect.handleAuthError": ()=>{
                            router.push('/login');
                        }
                    }["AuthSuccess.useEffect.handleAuthError"], 3000);
                }
            }["AuthSuccess.useEffect.handleAuthError"];
            processAuthentication();
            // Return cleanup function to clear timers and session storage if component unmounts
            return ({
                "AuthSuccess.useEffect": ()=>{
                    if (redirectTimer.current) clearTimeout(redirectTimer.current);
                    if (errorRedirectTimer.current) clearTimeout(errorRedirectTimer.current);
                }
            })["AuthSuccess.useEffect"];
        }
    }["AuthSuccess.useEffect"], [
        isClient,
        searchParams,
        router,
        toast
    ]); // Add isClient as dependency
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-6 text-3xl font-extrabold text-gray-900",
                            children: error ? 'Authentication Error' : 'Completing login...'
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/success/page.js",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-gray-600",
                            children: error ? "Error: ".concat(error, ". Redirecting to login page...") : 'Please wait while we redirect you to your dashboard.'
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/success/page.js",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 bg-gray-100 rounded text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Debug Info:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/success/page.js",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Token: ",
                                        searchParams.get('token') ? 'Present' : 'Missing'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/success/page.js",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "User ID: ",
                                        searchParams.get('userId') ? 'Present' : 'Missing'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/auth/success/page.js",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/auth/success/page.js",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth/success/page.js",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/success/page.js",
                        lineNumber: 201,
                        columnNumber: 13
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-12 w-12 text-red-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/success/page.js",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/success/page.js",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-12 w-12 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 13l4 4L19 7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth/success/page.js",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/success/page.js",
                        lineNumber: 207,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/success/page.js",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/success/page.js",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/success/page.js",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(AuthSuccess, "av+Cu2BthO/2grJTa2BhKHCNFnM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AuthSuccess;
var _c;
__turbopack_context__.k.register(_c, "AuthSuccess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_585c79a0._.js.map