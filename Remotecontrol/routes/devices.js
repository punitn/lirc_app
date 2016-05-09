var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	var devices = '[' +
		'{ "id":"1" , "deviceName":"TV" },' +
		'{ "id":"2" , "deviceName":"CableBox" },' +
		'{ "id":"3" , "deviceName":"Receiver" } ]';
	var devicesJson = JSON.parse(devices);
	res.json(devicesJson);
});

router.get('/:id', function(req, res) {
    var deviceDetails;
    	
    switch(req.params.id) {
    	case "1":
    		deviceDetails = '[' +
    			'{ "id":"1", "actionId":"1" , "action":"Power" },' +
    			'{ "id":"1", "actionId":"2" , "action":"Volume Up" },' +
	    		'{ "id":"1", "actionId":"3" , "action":"Volume Down" } ]';
        	break;
    	case "2":
        	deviceDetails = '[' +
	    		'{ "id":"2", "actionId":"3" , "action":"Test Item 2" } ]';
        	break;
        case "3":
        	deviceDetails = '[' +
    			'{ "id":"3", "actionId":"1" , "action":"Test Item 3" } ]';
        	break;
    	default:
        	deviceDetails = '[' +
    			'{ "id":"-1", "actionId":"-1" , "action":"None" } ]';
	}
	
	var devicesDetailsJson = JSON.parse(deviceDetails);
	res.json(devicesDetailsJson);
    
});

module.exports = router;