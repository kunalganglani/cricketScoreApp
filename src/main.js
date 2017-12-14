/**
 * This is our "Entry Point"
 */

import * as appModule from 'controller/appcontroller';
import {playerData} from 'model/content';

setTimeout(function(){
    //window.location.reload(1);
 }, 20000);

var apiKey = "e5tm4EqM-icynfPTE9LjWu7mJOHm-oe4";
var myDB = "players_score";
var myCollection = "scoreTable";

/* 
if(localStorage.getItem("key"))
$.ajax({
    url: "https://api.mlab.com/api/1/databases/" + myDB + "/collections/" + myCollection + "?apiKey=" + apiKey,
    type: "GET",
    success: function(data) {
        console.log(data);
    },
 });

 if (typeof(Storage) !== "undefined") {
    localStorage.setItem("key", data);
    appModule.loadContent(playerData);
} 
 */ 
appModule.loadContent(playerData);

var acc = document.getElementsByClassName("accordian");
appModule.showPlayerDetails(acc);