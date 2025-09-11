module.exports = [
"[project]/.next-internal/server/app/dashboard/student/earthquakes/assignment/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// EarthquakeQuiz.jsx
// Single-file React component (no Tailwind).
// Usage: drop into src/ and import in App.jsx
__turbopack_context__.s([
    "default",
    ()=>EarthquakeQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
/* ---------- QUESTIONS (same as before) ---------- */ const QUESTIONS = [
    /* ... (same 10 questions from your earlier JSON) ... */ {
        id: 1,
        scenario: "You are sitting in your classroom during a lecture. Suddenly, the floor begins to shake violently. The ceiling fan rattles, books fall from shelves. Your teacher panics and yells: ‘Everyone, get out quickly!’ You also notice desks around you where you can hide.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Duck under a desk and hold on 🪑",
                isCorrect: true,
                feedback: "Correct! 🎉 During an earthquake, running outside can be dangerous because debris may fall. Standing near windows is risky as glass may shatter. The safest action is to DUCK under a sturdy desk, COVER your head, and HOLD until the shaking stops."
            },
            {
                text: "Run outside immediately 🏃",
                isCorrect: false,
                feedback: "Not safe ❌. Running outside during shaking increases the risk of falling objects, collapsing walls, or stampedes. Debris can fall unpredictably and exits become crowded — you’re more likely to get injured while trying to run."
            },
            {
                text: "Stand near a window to look outside 🪟",
                isCorrect: false,
                feedback: "Dangerous choice ❌. Windows may shatter, causing severe injuries. Glass can break into sharp shards and window frames or adjacent walls can fail — standing by a window exposes you to flying glass and falling debris."
            }
        ]
    },
    {
        id: 2,
        scenario: "You are on the 5th floor of a building when the earthquake hits. The walls are shaking, and lights are flickering. The exit staircase is crowded with people rushing down.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Push through the crowd to escape",
                isCorrect: false,
                feedback: "Not safe ❌. Pushing through a panicked crowd can cause trampling, falls, or people getting stuck. In a rush, you can be knocked over or blocked from safe exits — moving to cover and waiting is usually safer."
            },
            {
                text: "Stay inside, move away from walls, and take cover until shaking stops",
                isCorrect: true,
                feedback: "Correct! 🎉 Staying inside and taking cover is safer. Crowded stairs or elevators can be life-threatening during shaking."
            },
            {
                text: "Use the elevator to go down faster",
                isCorrect: false,
                feedback: "Extremely risky ❌. Elevators can lose power, get stuck, or suffer mechanical failure during quakes. If an elevator stops between floors you could become trapped — avoid elevators during shaking."
            }
        ]
    },
    {
        id: 3,
        scenario: "You are in your bedroom when the earthquake starts. The cupboard doors swing open, and items begin falling. There’s a sturdy bed and a nearby doorway.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Stand in the doorway",
                isCorrect: false,
                feedback: "Not safe ❌. Doorways don’t provide enough protection anymore. Modern doorframes are not necessarily stronger than walls, and they don’t stop falling contents from shelves or the ceiling — you can still be struck by debris."
            },
            {
                text: "Run outside barefoot",
                isCorrect: false,
                feedback: "Dangerous ❌. Running outside barefoot exposes you to broken glass, nails, and debris; you could badly injure your feet and then be unable to move to safety."
            },
            {
                text: "Drop beside the bed and cover your head",
                isCorrect: true,
                feedback: "Correct! 🎉 Dropping beside a sturdy bed or table gives you cover from falling items. This reduces the chance of being hit by falling objects."
            }
        ]
    },
    {
        id: 4,
        scenario: "You are walking outside on the street when the ground begins shaking. You see tall buildings, electric poles, and a small open park nearby.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Stand next to a building for support",
                isCorrect: false,
                feedback: "Not safe ❌. Standing next to buildings is risky because parts of the facade, windows, or masonry can fall outward. You could be struck by falling bricks, signage, or glass."
            },
            {
                text: "Move to the open park",
                isCorrect: true,
                feedback: "Correct! 🎉 Open spaces are the safest outdoors during an earthquake — they reduce the chance of being hit by falling debris."
            },
            {
                text: "Run inside the nearest shop",
                isCorrect: false,
                feedback: "Wrong ❌. Entering a shop puts you near glass windows, shelves, and heavy displays that can fall — indoor hazards may be worse than staying in an open area."
            }
        ]
    },
    {
        id: 5,
        scenario: "You are cooking in the kitchen when the earthquake begins. Hot oil is on the stove, and glass jars are rattling.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Leave the stove on and run outside",
                isCorrect: false,
                feedback: "Wrong ❌. Leaving hot oil or gas on can start fires or explosions while you’re away. A small spill can ignite and cause a much larger hazard for everyone."
            },
            {
                text: "Hold the cupboard doors shut",
                isCorrect: false,
                feedback: "Unsafe ❌. Trying to hold cupboards wastes time and puts your hands and arms at risk of being crushed by falling items; heavy objects can break free and still hit you."
            },
            {
                text: "Quickly turn off the stove and take cover nearby",
                isCorrect: true,
                feedback: "Correct! 🎉 Turning off heat sources reduces fire risk, then taking cover protects you from falling items and hot liquids."
            }
        ]
    },
    {
        id: 6,
        scenario: "You are in a movie theater when the earthquake begins. The lights go out, and people start screaming and rushing towards the exit.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Duck down between the seats and cover",
                isCorrect: true,
                feedback: "Correct! 🎉 Staying low between seats and covering your head reduces your exposure to falling debris and flying objects until shaking stops."
            },
            {
                text: "Run with the crowd immediately",
                isCorrect: false,
                feedback: "Wrong ❌. Crowds rushing at once can cause trampling, bottlenecks, and injured people. In the dark and chaos, you’re more likely to fall or get hurt trying to force your way out."
            },
            {
                text: "Stand still near the exit",
                isCorrect: false,
                feedback: "Unsafe ❌. Exit zones can become congested and may have doors, glass, or fixtures that fail — standing there gives you no cover from falling items."
            }
        ]
    },
    {
        id: 7,
        scenario: "You are driving when the earthquake begins. The road starts shaking, and you see an overpass ahead.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Drive faster to cross the overpass quickly",
                isCorrect: false,
                feedback: "Wrong ❌. Speeding during shaking reduces control and increases crash risk. Overpasses and bridges can be damaged in quakes — driving fast could put you on a compromised structure."
            },
            {
                text: "Park under a bridge for shelter",
                isCorrect: false,
                feedback: "Unsafe ❌. Bridges and overpasses may suffer structural damage and falling debris; parking underneath can trap you or expose you to collapse."
            },
            {
                text: "Pull over safely and stop",
                isCorrect: true,
                feedback: "Correct! 🎉 Pulling over safely away from traffic and hazards lowers the chance of accidents and gives you time to assess damage."
            }
        ]
    },
    {
        id: 8,
        scenario: "You are inside a shopping mall when an earthquake strikes. Glass windows begin cracking, and people are panicking.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Run towards the escalator immediately",
                isCorrect: false,
                feedback: "Wrong ❌. Escalators can jam, collapse, or become chokepoints — running toward them can cause falls and block rescue routes."
            },
            {
                text: "Stand near a glass shop to watch",
                isCorrect: false,
                feedback: "Dangerous ❌. Glass storefronts can shatter and display fixtures can fall — watching puts you directly in the path of flying glass and falling objects."
            },
            {
                text: "Stay away from windows and large shelves, drop and cover near sturdy furniture",
                isCorrect: true,
                feedback: "Correct! 🎉 Keeping distance from windows and heavy shelving and taking cover near solid furniture reduces risk of cuts and crushing injuries."
            }
        ]
    },
    {
        id: 9,
        scenario: "After the shaking stops, you are trapped inside a room with dust and broken objects. You have your phone with you.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Stay calm, cover your mouth, call for help/send location",
                isCorrect: true,
                feedback: "Correct! 🎉 Staying calm, covering your mouth from dust, and using your phone to call for help or send your location conserves energy and gets rescuers to you faster."
            },
            {
                text: "Shout continuously and waste your energy",
                isCorrect: false,
                feedback: "Wrong ❌. Constant shouting uses up energy and breath and may not improve rescue chances. Short, periodic signals or using your phone conserves energy and is more effective."
            },
            {
                text: "Try to move heavy debris alone",
                isCorrect: false,
                feedback: "Unsafe ❌. Lifting heavy debris can cause collapse or serious injury — wait for trained rescuers or use safe leverage/assistance rather than attempting large moves alone."
            }
        ]
    },
    {
        id: 10,
        scenario: "You are in school, and after the shaking stops, you and your classmates exit the building. Some students want to go back inside to collect their bags.",
        prompt: "What would you do?",
        points: 10,
        options: [
            {
                text: "Go back inside quickly to get your own bag",
                isCorrect: false,
                feedback: "Wrong ❌. Re-entering a structure after a quake is dangerous because aftershocks can cause additional collapses or falling debris; personal items aren’t worth risking safety."
            },
            {
                text: "Stop them and wait in the open assembly area until authorities say it’s safe",
                isCorrect: true,
                feedback: "Correct! 🎉 Waiting in the open area reduces the risk from aftershocks and falling debris — wait for official clearance before re-entering."
            },
            {
                text: "Stand near the building to wait for friends",
                isCorrect: false,
                feedback: "Unsafe ❌. Standing close to buildings exposes you to falling bricks, glass, or signage during aftershocks — stay in the clear assembly area instead."
            }
        ]
    }
];
/* ---------- helpers & icons ---------- */ const clamp = (v, a, b)=>Math.max(a, Math.min(b, v));
const IconCheck = ({ className = "icon" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 13l4 4L19 7",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
            lineNumber: 288,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
        lineNumber: 287,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconX = ({ className = "icon" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 6L6 18M6 6l12 12",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
            lineNumber: 299,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
        lineNumber: 298,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
/* ---------- Progress Bar ---------- */ function ProgressBar({ answeredCount, total }) {
    const pct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.round(answeredCount / total * 100), [
        answeredCount,
        total
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "progress-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Progress"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            pct,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-track",
                role: "progressbar",
                "aria-valuenow": pct,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-fill",
                    style: {
                        width: `${clamp(pct, 0, 100)}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
function EarthquakeQuiz() {
    const total = QUESTIONS.length;
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]); // store { qid, chosenIndex, isCorrect }
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shakeAnim, setShakeAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Reset selection/animation when question changes
        setSelected(null);
        setShakeAnim(false);
    }, [
        current
    ]);
    const currentQ = QUESTIONS[current];
    function handleChoose(idx) {
        if (selected !== null) return;
        setSelected(idx);
        const opt = currentQ.options[idx];
        const isCorrect = !!opt.isCorrect;
        setAnswers((p)=>[
                ...p,
                {
                    qid: currentQ.id,
                    chosenIndex: idx,
                    isCorrect
                }
            ]);
        if (isCorrect) {
            setScore((s)=>s + currentQ.points);
        } else {
            setShakeAnim(true);
            setTimeout(()=>setShakeAnim(false), 500);
        }
    }
    function handleNext() {
        if (selected === null) return;
        if (current + 1 < total) {
            setCurrent((c)=>c + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    }
    function restart() {
        setCurrent(0);
        setSelected(null);
        setAnswers([]);
        setScore(0);
        setShowResult(false);
    }
    const progressCount = answers.length + (selected !== null && !answers.some((a)=>a.qid === currentQ.id) ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo-circle",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
                                            stroke: "#fff",
                                            strokeWidth: "1.2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 8v4",
                                            stroke: "#fff",
                                            strokeWidth: "1.6",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "16",
                                            r: "1",
                                            fill: "#fff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brand-title",
                                        children: "Disaster Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brand-sub",
                                        children: "Earthquake Safety Quiz"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "meta",
                                children: [
                                    "Questions: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: total
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                        lineNumber: 426,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "meta",
                                children: [
                                    "Points per Q: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                        lineNumber: 429,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "live-pill",
                                children: "Live"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                        answeredCount: answers.length,
                        total: total
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    !showResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `card ${shakeAnim ? "shake" : ""}`,
                        "aria-live": "polite",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-main",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "q-header",
                                            children: [
                                                "Question ",
                                                current + 1,
                                                " of ",
                                                total
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 445,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "q-title",
                                            children: currentQ.prompt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "q-scenario",
                                            children: currentQ.scenario
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "options",
                                            children: currentQ.options.map((opt, idx)=>{
                                                const isChosen = selected === idx;
                                                const hasAnswered = selected !== null;
                                                const tone = hasAnswered ? opt.isCorrect ? "correct" : isChosen ? "wrong" : "muted" : "idle";
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleChoose(idx),
                                                    disabled: selected !== null,
                                                    className: `option option-${tone}`,
                                                    "aria-pressed": isChosen,
                                                    "aria-label": `Option ${idx + 1}: ${opt.text}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "option-text",
                                                            children: opt.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 472,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "option-badge",
                                                            children: hasAnswered ? opt.isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                                                className: "icon-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 476,
                                                                columnNumber: 31
                                                            }, this) : isChosen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                                                className: "icon-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 478,
                                                                columnNumber: 31
                                                            }, this) : null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "select-label",
                                                                children: "Select"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 481,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 473,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        selected !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "feedback",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feedback-left",
                                                    children: currentQ.options[selected].isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "feedback-pill correct",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconCheck, {
                                                                className: "icon-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 494,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Correct"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 495,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                        lineNumber: 493,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "feedback-pill wrong",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconX, {
                                                                className: "icon-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 499,
                                                                columnNumber: 27
                                                            }, this),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Not Safe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                lineNumber: 499,
                                                                columnNumber: 60
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                        lineNumber: 498,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feedback-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "feedback-text",
                                                            children: currentQ.options[selected].feedback
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 504,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "feedback-points",
                                                            children: [
                                                                "Points: ",
                                                                currentQ.points,
                                                                " ",
                                                                currentQ.options[selected].isCorrect ? "(awarded)" : "(0)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 507,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "feedback-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "score-display",
                                                                    children: [
                                                                        "Preparedness Points: ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: score
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                            lineNumber: 515,
                                                                            columnNumber: 48
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleNext,
                                                                    className: "next-btn",
                                                                    children: current + 1 < total ? "Next Question" : "See Results"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 513,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 503,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hint",
                                            children: "Choose the most appropriate action — each correct answer gives +10 Preparedness Points."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 526,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                    lineNumber: 444,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "card-aside",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aside-title",
                                            children: "Quick Stats"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aside-score",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "score-label",
                                                    children: "Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "score-value",
                                                    children: score
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 537,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "score-total",
                                                    children: [
                                                        "out of ",
                                                        total * 10
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 535,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aside-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "small-label",
                                                    children: "Current Question"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 542,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "small-value",
                                                    children: [
                                                        current + 1,
                                                        " / ",
                                                        total
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aside-tip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "small-label",
                                                    children: "Tip"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 549,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "small-text",
                                                    children: "If unsure, pick the safest action that minimizes exposure to falling debris and fire risk."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 550,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 548,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                    lineNumber: 533,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                            lineNumber: 443,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card result-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "result-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "result-main",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "result-title",
                                            children: "Quiz Complete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "result-sub",
                                            children: "Nice work — you’ve completed the Earthquake Safety quiz. Here’s how you did:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result-top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "score-circle",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "score-big",
                                                            children: score
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 570,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "score-small",
                                                            children: [
                                                                "/",
                                                                total * 10
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 571,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "score-summary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "preparedness",
                                                            children: "Preparedness Level"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 575,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "preparedness-text",
                                                            children: score >= total * 10 * 0.9 ? "Excellent — you clearly know safe choices!" : score >= total * 10 * 0.7 ? "Good — solid understanding, review a few points." : score >= total * 10 * 0.4 ? "Fair — consider revisiting the scenarios." : "Needs improvement — review the feedback and practice again."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 576,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "result-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: restart,
                                                                    className: "primary",
                                                                    children: "Restart Quiz"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>window.print(),
                                                                    className: "secondary",
                                                                    children: "Print / Save"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 574,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "review-list",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "review-title",
                                                    children: "Review"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 601,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                    className: "review-ol",
                                                    children: QUESTIONS.map((q, qi)=>{
                                                        const ans = answers.find((a)=>a.qid === q.id);
                                                        const chosen = ans ? q.options[ans.chosenIndex] : null;
                                                        const isCorrect = ans ? ans.isCorrect : false;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `review-item ${isCorrect ? "rev-correct" : "rev-wrong"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rev-left",
                                                                    children: isCorrect ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rev-status correct",
                                                                        children: "Correct"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                        lineNumber: 616,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rev-status wrong",
                                                                        children: "Incorrect"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                        lineNumber: 618,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                    lineNumber: 614,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rev-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rev-q",
                                                                            children: [
                                                                                "Q",
                                                                                qi + 1,
                                                                                ": ",
                                                                                q.prompt
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                            lineNumber: 622,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rev-scenario",
                                                                            children: q.scenario
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                            lineNumber: 625,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rev-your",
                                                                            children: [
                                                                                "Your answer:",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: chosen ? chosen.text : "No answer"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                                    lineNumber: 628,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                            lineNumber: 626,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "rev-exp",
                                                                            children: [
                                                                                "Explanation:",
                                                                                " ",
                                                                                chosen ? chosen.feedback : q.options[q.options.findIndex((o)=>o.isCorrect)].feedback
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                            lineNumber: 632,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                                    lineNumber: 621,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, q.id, true, {
                                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                            lineNumber: 608,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "result-aside",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-title",
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 649,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "summary-label",
                                                    children: "Total Questions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 651,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "summary-value",
                                                    children: total
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "summary-label",
                                                    children: "Correct"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 655,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "summary-value",
                                                    children: answers.filter((a)=>a.isCorrect).length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 656,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "summary-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "summary-label",
                                                    children: "Incorrect"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "summary-value",
                                                    children: answers.filter((a)=>!a.isCorrect).length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                                    lineNumber: 662,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                                    lineNumber: 648,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                            lineNumber: 560,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                        lineNumber: 559,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "page-footer",
                children: "Made for training • Interactive earthquake safety quiz"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                lineNumber: 672,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        :root{
          --bg1: #07103a;
          --bg2: #0b2146;
          --card-start: rgba(255,255,255,0.04);
          --card-end: rgba(255,255,255,0.02);
          --muted: rgba(255,255,255,0.7);
          --accent1: #2b6fff; /* blue */
          --accent2: #8a3df5; /* purple */
          --green1: #15a85a;
          --red1: #ff4d4f;
          --glass: rgba(255,255,255,0.06);
        }

        * { box-sizing: border-box; font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        body { margin: 0; }

        .page-root {
            min-height: 100vh;
            height: 100%;       /* 🔥 force full screen */
            width: 100vw;        /* 🔥 span full width */
            background: linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 100%);
            color: #fff;
            display: flex;
            flex-direction: column;
            padding: 0;          /* remove extra padding */
        }


        .topbar {
          width: 100%;
          max-width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 24px;
          margin-bottom: 12px;
        }
        .brand { display:flex; align-items:center; gap:12px; }
        .logo-circle{
          width:44px; height:44px; border-radius:50%;
          background: rgba(255,255,255,0.06);
          display:flex; align-items:center; justify-content:center;
        }
        .brand-title { font-weight: 700; font-size: 14px; }
        .brand-sub { font-size: 12px; color: rgba(255,255,255,0.65); }

        .top-right { display:flex; gap:14px; align-items:center; }
        .meta { font-size: 13px; color: rgba(255,255,255,0.68); }
        .live-pill { padding:6px 10px; background: rgba(255,255,255,0.06); border-radius: 20px; font-size:12px; }

        .main-container {
          flex: 1;             /* 🔥 take all available space */
          width: 100%;
          padding: 0 24px;
          margin: 0;
          display: flex;
          flex-direction: column;
        }


        /* Progress */
        .progress-wrapper { padding: 12px 8px; }
        .progress-top { display:flex; justify-content:space-between; font-size:12px; color: rgba(255,255,255,0.7); margin-bottom:8px; }
        .progress-track { width:100%; height:10px; background: rgba(255,255,255,0.06); border-radius:6px; overflow:hidden; }
        .progress-fill { height:100%; background: linear-gradient(90deg, var(--accent1), var(--accent2)); width: 0%; transition: width 450ms ease; }

        /* Card */
        .card {
          margin-top: 16px;
          background: linear-gradient(180deg, var(--card-start), var(--card-end));
          border-radius: 16px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 10px 36px rgba(2,6,23,0.6);
        }
        .card-grid { display:flex; gap:18px; flex-direction:row; }
        @media (max-width: 900px) { .card-grid { flex-direction: column; } }

        .card-main { flex:1; min-width:0; }
        .q-header { font-size:12px; color: rgba(255,255,255,0.65); letter-spacing:1px; text-transform:uppercase; margin-bottom:8px; }
        .q-title { font-size:28px; margin:0 0 8px 0; line-height:1.05; font-weight:800; }
        .q-scenario { color: rgba(255,255,255,0.8); margin-bottom:16px; }

        .options { display:flex; flex-direction:column; gap:12px; }

        .option {
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:14px 14px;
          border-radius:10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.03);
          cursor:pointer;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
          text-align:left;
        }
        .option:disabled { cursor: default; opacity:0.95; }
        .option:hover { transform: translateY(-4px); box-shadow: 0 8px 22px rgba(2,6,23,0.45); }

        .option-idle { background: rgba(255,255,255,0.04); }
        .option-muted { background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.78); }
        .option-correct { background: linear-gradient(90deg, #11c77f 0%, #0e9e53 100%); box-shadow: 0 8px 20px rgba(16, 141, 87, 0.22); color:white; }
        .option-wrong { background: linear-gradient(90deg, #ff6b6b 0%, #ff3b3b 100%); box-shadow: 0 8px 20px rgba(255, 57, 57, 0.15); color:white; }

        .option-text { font-weight:600; font-size:15px; }
        .option-badge { width:52px; display:flex; align-items:center; justify-content:center; }

        .select-label { font-size:12px; color: rgba(255,255,255,0.6); }

        .feedback { margin-top:16px; padding:12px; border-radius:10px; background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.04); display:flex; gap:12px; flex-direction:row; align-items:flex-start; }
        @media (max-width: 720px) { .feedback { flex-direction: column; } }

        .feedback-pill { display:inline-flex; gap:8px; align-items:center; padding:6px 10px; border-radius:8px; font-weight:600; }
        .feedback-pill.correct { background: rgba(255,255,255,0.05); color: #8ff0c7; }
        .feedback-pill.wrong { background: rgba(255,255,255,0.05); color: #ffb6b6; }

        .feedback-text { color: rgba(255,255,255,0.92); margin:0 0 8px 0; }
        .feedback-points { color: rgba(255,255,255,0.6); font-size:13px; margin-bottom:8px; }
        .feedback-actions { display:flex; gap:12px; align-items:center; justify-content:flex-end; }

        .next-btn { background: linear-gradient(90deg, var(--accent1), var(--accent2)); border:none; color:white; padding:8px 14px; border-radius:8px; cursor:pointer; font-weight:600; }
        .next-btn:hover { transform: translateY(-2px); }

        .score-display { color: rgba(255,255,255,0.85); margin-right:12px; }

        .hint { margin-top:12px; color: rgba(255,255,255,0.68); font-size:13px; }

        /* aside */
        .card-aside { width:260px; background: rgba(255,255,255,0.03); border-radius:10px; padding:12px; border:1px solid rgba(255,255,255,0.04); }
        .aside-title { font-size:12px; color: rgba(255,255,255,0.7); margin-bottom:8px; }
        .aside-score .score-label { font-size:13px; color: rgba(255,255,255,0.9); }
        .aside-score .score-value { font-size:26px; font-weight:800; margin-top:6px; }
        .aside-score .score-total { font-size:12px; color: rgba(255,255,255,0.6); }

        .aside-row { margin-top:12px; display:flex; justify-content:space-between; align-items:center; }
        .small-label { color: rgba(255,255,255,0.68); font-size:12px; }
        .small-value { font-weight:700; }

        .aside-tip { margin-top:12px; color: rgba(255,255,255,0.75); font-size:13px; }

        /* result */
        .result-card { margin-top: 16px; }
        .result-grid { display:flex; gap:18px; align-items:flex-start; }
        @media (max-width: 900px) { .result-grid { flex-direction: column; } }

        .result-title { font-size:34px; margin:0; font-weight:900; }
        .result-sub { color: rgba(255,255,255,0.8); margin:10px 0 18px 0; }

        .result-top { display:flex; gap:18px; align-items:center; }
        .score-circle { width:120px; height:120px; border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; background: linear-gradient(90deg, var(--accent1), var(--accent2)); box-shadow: 0 10px 30px rgba(10,30,80,0.4); }
        .score-big { font-size:28px; font-weight:900; }
        .score-small { font-size:12px; opacity:0.95; }

        .score-summary { max-width: 520px; }
        .preparedness { font-weight:700; margin-bottom:6px; }
        .preparedness-text { color: rgba(255,255,255,0.78); margin-bottom:10px; }

        .result-actions { display:flex; gap:10px; }
        .primary { background: linear-gradient(90deg, var(--accent1), var(--accent2)); color:white; padding:8px 14px; border-radius:8px; border:none; cursor:pointer; font-weight:700; }
        .secondary { background: rgba(255,255,255,0.06); color:white; padding:8px 14px; border-radius:8px; border:none; cursor:pointer; }

        .review-list { margin-top:18px; }
        .review-title { font-weight:700; margin-bottom:8px; }
        .review-ol { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }

        .review-item { display:flex; gap:12px; padding:10px; border-radius:8px; background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.04); }
        .rev-left { width:82px; display:flex; align-items:flex-start; }
        .rev-status { padding:6px 8px; border-radius:6px; font-size:13px; font-weight:700; }
        .rev-status.correct { color: #8ff0c7; }
        .rev-status.wrong { color: #ffb6b6; }
        .rev-right { flex:1; }
        .rev-q { font-weight:700; margin-bottom:6px; }
        .rev-scenario { font-size:13px; color: rgba(255,255,255,0.75); margin-bottom:8px; }
        .rev-your { font-size:13px; }
        .rev-exp { font-size:13px; color: rgba(255,255,255,0.8); margin-top:6px; }

        .result-aside { width:260px; padding:12px; border-radius:10px; background: rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.04); }
        .summary-title { font-weight:700; margin-bottom:8px; }
        .summary-row { display:flex; justify-content:space-between; margin-top:8px; color: rgba(255,255,255,0.9); }

        .page-footer { margin-top:26px; color: rgba(255,255,255,0.6); font-size:13px; }

        /* small icon styles */
        .icon { width:20px; height:20px; color: white; }
        .icon-white { width:18px; height:18px; color: white; }

        /* shake animation */
        @keyframes shake-key {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .shake { animation: shake-key 0.5s; }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
                lineNumber: 677,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx",
        lineNumber: 399,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/dashboard/student/earthquakes/assignment/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0c71f28._.js.map