import { createGlobalStyle } from 'styled-components'


export const Global = createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    .border-box { box-sizing: border-box; }
    .content-box { box-sizing: content-box; }

    .circle { border-radius: 100%; }

    .nowrap     { white-space: nowrap; }
    .pre        { white-space: pre; }
    .pre-line   { white-space: pre-line; }
    .pre-wrap   { white-space: pre-wrap; }


    .red        { background-color: red !important; }
    .green      { background-color: green !important; }
    .blue       { background-color: blue !important; }
    .cyan       { background-color: cyan !important; }
    .magenta    { background-color: magenta !important; }
    .yellow     { background-color: yellow !important; }


    .white { color: white; }
    .black { color: black; }

    .bg-white { background-color: white; }
    .bg-black { background-color: black; }


    .bg-cover       { background-size: cover; }
    .bg-contain     { background-size: contain; }
    .bg-center      { background-position: center; }
    .bg-norepeat    { background-repeat: no-repeat; }

    .obj-cover      { object-fit: cover; }
    .obj-contain    { object-fit: contain; }
    .obj-center     { object-position: center; }

    .hidden  { visibility: hidden; }
    .visible { visibility: visible; }
    .display-none { display: none; }


    .inline         { display: inline !important; }
    .block          { display: block !important; }
    .none           { display: none !important; }
    .flex           { display: flex !important; }
    .inline-block   { display: inline-block !important; }
    .inline-flex    { display: inline-flex !important; }

    .row    { flex-direction: row; }
    .column { flex-direction: column; }

    .jc-start   { justify-content: flex-start; }
    .jc-center  { justify-content: center; }
    .jc-end     { justify-content: flex-end; }
    .jc-between { justify-content: space-between; }
    .jc-around  { justify-content: space-around; }
    .jc-evenly  { justify-content: space-evenly; }

    .ai-start   { align-items: flex-start; }
    .ai-center  { align-items: center; } 
    .ai-end     { align-items: flex-end; }
    .ai-between { align-items: space-between; }
    .ai-around  { align-items: space-around; } 
    .ai-evenly  { align-items: space-evenly; } 

    .ac-start   { align-content: flex-start; }
    .ac-center  { align-content: center; }
    .ac-end     { align-content: flex-end; }
    .ac-between { align-content: space-between; }
    .ac-around  { align-content: space-around; }
    .ac-evenly  { align-content: space-evenly; }


    .flex-wrap { flex-wrap: wrap; }

    .width-max          { width: 100%; }
    .width-maxscreen    { width: 100vw; }
    .width-min-content  { width: min-content; }
    .width-fit-content  { width: fit-content; }
    .width-max-content  { width: max-content; }

    .height-max         { height: 100%; }
    .height-maxscreen   { height: 100vh; }
    .height-min-content { height: min-content; }
    .height-fit-content { height: fit-content; }
    .height-max-content { height: max-content; }


    .float-left     { float: left; }
    .float-right    { float: right; }


    .absolute   { position: absolute; }
    .relative   { position: relative; }
    .fixed      { position: fixed; }
    .sticky     { position: sticky; }

    .top-min { top: 0; }
    .top-mid { top: 50%; }
    .top-max { top: 100%; }
    .right-min { right: 0; }
    .right-mid { right: 50%; }
    .right-max { right: 100%; }
    .bottom-min { bottom: 0; }
    .bottom-mid { bottom: 50%; }
    .bottom-max { bottom: 100%; }
    .left-min { left: 0; }
    .left-mid { left: 50%; }
    .left-max { left: 100%; }

    .horizontal-auto { left: auto; right: auto; }
    .vertical-auto   { top: auto; bottom: auto; }

    .margin-left-auto       { margin-left: auto; }
    .margin-right-auto      { margin-right: auto; }
    .margin-horizontal-auto { margin-left: auto; margin-right: auto; }

    .margin-top-auto        { margin-top: auto; }
    .margin-bottom-auto     { margin-bottom: auto; }
    .margin-vertical-auto   { margin-top: auto; margin-bottom: auto; }

    .x-start  { transform: translateX(-0%); }
    .x-center { transform: translateX(-50%); }
    .x-end    { transform: translateX(-100%); }
    .y-start  { transform: translateY(-0%); }
    .y-center { transform: translateY(-50%); }
    .y-end    { transform: translateY(-100%); }

    .xy-start-start   { transform: translate(-0%, -0%); }
    .xy-start-center  { transform: translate(-0%, -50%); }
    .xy-start-end     { transform: translate(-0%, -100%); }

    .xy-center-start  { transform: translate(-50%, -0%); }
    .xy-center-center { transform: translate(-50%, -50%); }
    .xy-center-end    { transform: translate(-50%, -100%); }

    .xy-end-start     { transform: translate(-100%, -0%); }
    .xy-end-center    { transform: translate(-100%, -50%); }
    .xy-end-end       { transform: translate(-100%, -100%); }

    .w-300 { font-weight: 300; }
    .w-400 { font-weight: 400; }
    .w-500 { font-weight: 500; }
    .w-600 { font-weight: 600; }
    .w-700 { font-weight: 700; }

    .overflow-hidden { overflow: hidden; }
    .overflow-auto   { overflow: auto; }
    .overflow-scroll { overflow: scroll; }

    .overflow-x-hidden { overflow-x: hidden; }
    .overflow-x-auto   { overflow-x: auto; }
    .overflow-x-scroll { overflow-x: scroll; }

    .overflow-y-hidden { overflow-y: hidden; }
    .overflow-y-auto   { overflow-y: auto; }
    .overflow-y-scroll { overflow-y: scroll; }


    .text-ellipsis { text-overflow: ellipsis; }

    .text-center { text-align: center; }

    .pointer            { cursor: pointer; }
    .cursor-default     { cursor: default; }
    .pointer-i          { cursor: pointer !important; }
    .cursor-default-i   { cursor: default !important; }


    .pointer-cascade { 
        &, & * { cursor: pointer; } 
    }

    .hover-visible:hover {
        visibility: visible;
    }

    .hover-visible-parent:hover .hover-visible-child {
        visibility: visible;
    } 

    .before-hidden {
        &:before {
            visibility: hidden;
        }
    }
    .after-hidden {
        &:after {
            visibility: hidden;
        }
    }

    .opacity-zero {
        opacity: 0;
    }
    .opacity-one {
        opacity: 1;
    }

    .hover-opacity-zero:hover {
        opacity: 0;
    }
    .hover-opacity-one:hover {
        opacity: 1;
    }



    .hover-opacity-zero-parent:hover .hover-opacity-zero-child {
        opacity: 0;
    }
    .hover-opacity-zero-parent:hover .hover-opacity-zero-child-i {
        opacity: 0 !important;
    }

    .saturate-zero {
        filter: saturate(0);
    }
    .grayscale {
        filter: grayscale(1);
    }
    .grayscale-i {
        filter: grayscale(1);
    }
`