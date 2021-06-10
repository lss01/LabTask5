/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);window.addEventListener("batterystatus", onBatteryStatus, false);
document.getElementById("cameraTakePicture").addEventListener ("click", cameraTakePicture);

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#about *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function cordovaDevice() {
  alert("Cordova version: " + device.cordova + "\n" +
     "Device model: " + device.model + "\n" +
     "Device platform: " + device.platform + "\n" +
     "Device UUID: " + device.uuid + "\n" +
     "Device version: " + device.version);
}

function onBatteryStatus(info) { 
  alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged); 
}

function cameraTakePicture() { 
  navigator.camera.getPicture(onSuccess, onFail, {  
     quality: 50, 
     destinationType: Camera.DestinationType.DATA_URL 
  });  
  
  function onSuccess(imageData) { 
     var image = document.getElementById('myImage'); 
     image.src = "data:image/jpeg;base64," + imageData; 
  }  
  
  function onFail(message) { 
     alert('Failed because: ' + message); 
  } 
}
