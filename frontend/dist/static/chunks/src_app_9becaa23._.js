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
    return ("TURBOPACK compile-time value", "http://localhost:5000") || '';
};
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
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
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
                throw new Error(errorData.message || 'Login failed');
            }
            const data = await response.json();
            // Save user to state and localStorage
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
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
                if (data.message === 'User already exists') {
                    throw new Error('A user with this email already exists');
                } else if (data.message === 'Username already exists') {
                    throw new Error('This username is already taken');
                } else {
                    throw new Error(data.message || 'Registration failed');
                }
            }
            // Save user to state and localStorage
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
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
    const getUserProfile = async ()=>{
        try {
            // Check if user is authenticated
            if (!user || !user.token) {
                console.error('No authentication token available');
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
                console.error('Network error during profile fetch:', fetchError.message || 'Unknown network error');
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
                if (response.status === 401) {
                    console.error('Unauthorized: Token rejected by server');
                    // Try to refresh token once
                    const refreshed = await refreshToken();
                    if (!refreshed) {
                        // Clear user data if unauthorized and refresh failed
                        setUser(null);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuthState"])();
                        return null;
                    }
                    // Retry with new token (but only once to prevent infinite loops)
                    return getUserProfile();
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
                // For other error codes, return null instead of throwing
                return null;
            }
            let data;
            try {
                data = await response.json();
            } catch (parseError) {
                console.error('Error parsing profile response:', parseError.message);
                return null;
            }
            if (!data) {
                console.error('Profile data is empty or invalid');
                return null;
            }
            console.log('Profile fetched successfully:', data.name || data.email || 'Unknown user');
            // Update user in state and localStorage with latest data
            const updatedUser = {
                ...user,
                ...data
            };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return data;
        } catch (error) {
            // Log detailed error information
            console.error('Get profile error:', {
                message: error.message || 'Unknown error',
                stack: error.stack,
                name: error.name,
                code: error.code
            });
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
        lineNumber: 290,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
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

//# sourceMappingURL=src_app_9becaa23._.js.map