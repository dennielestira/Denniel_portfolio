/* ---------- SHARED SITE DATA ---------- */
/* Used by both index.html and detail.html so project/Figma info stays in one place. */

const skills = [
  {name:"HTML", pct:85},
  {name:"CSS", pct:80},
  {name:"Python", pct:65},
  {name:"JavaScript", pct:60},
];

const projects = [
  {id:"p1", title:"Django Inventory App", tag:"Django · Python", img:"./photos/pic.png",
   summary:"A stock‑tracking app built with Django, covering CRUD operations and a simple admin dashboard.",
   body:["Built to practice model relationships and form handling in Django.",
         "Includes login, item categories, and low‑stock alerts."]},
  {id:"p2", title:"Django Blog Platform", tag:"Django · Python", img:"./photos/pic1.png",
   summary:"A minimal blog engine with posts, comments and a tag system.",
   body:["Focused on practicing templating and database queries in Django."]},
];

const figma = [
  {id:"f1", title:"Mobile Banking Concept", tag:"UI · Mobile", img:"./photos/gf.jpg",
   summary:"An exploratory Figma concept for a simplified mobile banking flow.",
   body:["A UI exploration focused on clarity for first‑time users."], link:"#"},
  {id:"f2", title:"Portfolio Redesign Draft", tag:"UI · Web", img:"./photos/photo2.jpg",
   summary:"Early wireframes for this very portfolio, before it was coded.",
   body:["Sketched in Figma to test layout and hierarchy before building in HTML/CSS."], link:"#"},
  {id:"f3", title:"Mobile Banking Concept", tag:"UI · Mobile", img:"./photos/gf.jpg",
   summary:"An exploratory Figma concept for a simplified mobile banking flow.",
   body:["A UI exploration focused on clarity for first‑time users."], link:"#"},
  {id:"f4", title:"Portfolio Redesign Draft", tag:"UI · Web", img:"./photos/photo2.jpg",
   summary:"Early wireframes for this very portfolio, before it was coded.",
   body:["Sketched in Figma to test layout and hierarchy before building in HTML/CSS."], link:"#"},
];