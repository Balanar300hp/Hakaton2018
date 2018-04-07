$(function(){
	"use strict";
	$('#info').css({opacity:1},500);
	
	$(".logo li a").on({
		mouseenter: function () {
        	$('#main').css({borderBottomColor:"#49bf9d",borderTopColor:"#49bf9d"});
			$('#content').addClass('color');
			
    	},
    	mouseleave: function () {
        	$('#main').css({borderBottomColor:"#efefef",borderTopColor:"#efefef"});
			$('#content').removeClass('color');
    	}
	});
	
	$("#header a").on({
		mouseenter: function () {
        	$('.copyright li a').css({color:"#49bf9d"});	
    	},
    	mouseleave: function () {
        	$('.copyright li a').css({color:"rgba(255, 255, 255, 0.4)"});
    	}
	});
	
	$('.one').click(function(){
		$("#info").css({opacity:0},100);
		
		setTimeout(function(){ 
			$.ajax({
				url:"../content/Kudashov.html",
				cache: false,
				success: function(html){  
        			$("#info").html(html);
				
    			} 
			});
		}, 500);
		
		setTimeout(function(){
			$('#info').css({opacity:1},500);
		}, 1200);
	});
	
	$('.two').click(function(){
		$("#info").css({opacity:0},100);
		
		setTimeout(function(){ 
			$.ajax({
				url:"../content/Gavrilov.html",
				cache: false,
				success: function(html){  
        			$("#info").html(html);
				
    			} 
			});
		}, 500);
		
		setTimeout(function(){
			$('#info').css({opacity:1},500);
		}, 1200);
	});
	
	$('.three').click(function(){
		$("#info").css({opacity:0},100);
		
		setTimeout(function(){ 
			$.ajax({
				url:"../content/Redchenko.html",
				cache: false,
				success: function(html){  
        			$("#info").html(html);
				
    			} 
			});
		}, 500);
		
		setTimeout(function(){
			$('#info').css({opacity:1},500);
		}, 1200);
	});
	
	$('.four').click(function(){
		
		
		$("#info").css({opacity:0},100);
		
		setTimeout(function(){ 
			$.ajax({
				url:"../content/Gadzhiev.html",
				cache: false,
				success: function(html){  
        			$("#info").html(html);
				
    			} 
			});
		}, 500);
		
		setTimeout(function(){
			$('#info').css({opacity:1},500);
		}, 1200);
		
		
	});
	
});