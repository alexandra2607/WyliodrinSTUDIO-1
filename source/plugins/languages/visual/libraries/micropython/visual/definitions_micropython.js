// DO NOT EDIT THIS FILE, IT IS AUTMATICALLY GENERATED

module.exports = function (blockly){
	var Blockly = blockly.Blockly;

	Blockly.Blocks['micropython_pin'] = {
		init: function() {
			this.appendValueInput('GPIO')
				.setCheck('Number')
				.appendField('Pin');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['IN','IN'], ['OUT','OUT'], ['PULL_UP','PULL_UP']]), 'type1');
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([['none','NONE'], ['IN','IN'], ['OUT','OUT'], ['PULL_UP','PULL_UP']]), 'type2');
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(255);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_set_value'] = {
		init: function() {
			this.appendValueInput('pin_setValue')
				.setCheck('Variables')
				.appendField('set value')
				.appendField(new Blockly.FieldDropdown([['HIGH','0'], ['LOW','1']]), 'set_value')
				.appendField('for');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_get_value'] = {
		init: function() {
			this.appendValueInput('get_value')
				.setCheck('Variables')
				.appendField('get value of');
			this.setOutput(true, null);
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_on_off'] = {
		init: function() {
			this.appendValueInput('set_valueLED')
				.setCheck('Variables')
				.appendField('set LED')
				.appendField(new Blockly.FieldDropdown([['on','on'], ['off','off']]), 'set_on/off');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_pwm'] = {
		init: function() {
			this.appendValueInput('pwm')
				.setCheck('micropython_pin')
				.appendField('PWM');
			this.appendValueInput('freq')
				.setCheck('Number')
				.appendField('freq');
			this.appendValueInput('duty')
				.setCheck('Number')
				.appendField('duty');
			this.setInputsInline(true);
			this.setOutput(true, null);
			this.setColour(315);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_pwm_methods'] = {
		init: function() {
			this.appendValueInput('methods')
				.setCheck(['Variables', 'Number'])
				.appendField('set PWM method ')
				.appendField(new Blockly.FieldDropdown([['freq','freq'], ['duty','duty'], ['deinit','deinit']]), 'methods');
			this.appendValueInput('NAME')
				.setCheck('Variables')
				.appendField('to');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(315);
			this.setTooltip('deinit() does not have parameter');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_declaration_rgb_1'] = {
		init: function() {
			this.appendValueInput('red')
				.setCheck(['micropython_pin', 'micropython_pwm'])
				.appendField('red');
			this.appendValueInput('green')
				.setCheck(['micropython_pin', 'micropython_pwm'])
				.appendField('green');
			this.appendValueInput('blue')
				.setCheck(['micropython_pin', 'micropython_pwm'])
				.appendField('blue');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(300);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_rgb_pwm_set'] = {
		init: function() {
			this.appendValueInput('NAME')
				.setCheck(null)
				.appendField('set rgb')
				.appendField(new Blockly.FieldDropdown([['red','red'], ['green','green'], ['blue','blue']]), 'rgb')
				.appendField(new Blockly.FieldTextInput('duty'), 'duty');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(300);
			this.setTooltip('pwm type');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_rgb_pin_set'] = {
		init: function() {
			this.appendDummyInput()
				.appendField('set rgb')
				.appendField(new Blockly.FieldDropdown([['red','red'], ['green','green'], ['blue','blue']]), 'rgb')
				.appendField(new Blockly.FieldDropdown([['on','on'], ['off','off']]), 'func');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(300);
			this.setTooltip('pin type');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_time'] = {
		init: function() {
			this.appendValueInput('micropython_time')
				.setCheck(['Number', 'Variables'])
				.appendField('time')
				.appendField(new Blockly.FieldDropdown([['sleep','sleep'], ['sleep_ms','sleep_ms'], ['sleep_us','sleep_us']]), 'time');
			this.setInputsInline(false);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(330);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_sleep_from_time'] = {
		init: function() {
			this.appendValueInput('micropython_sleep_from_time')
				.setCheck(['Number', 'Variables'])
				.appendField('time')
				.appendField('sleep')
				.appendField(new Blockly.FieldDropdown([['second','sleep'], ['milliseconds','sleep_ms'], ['microseconds','sleep_us']]), 'unit_measurement');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(330);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_utime'] = {
		init: function() {
			this.appendValueInput('micropython_utime')
				.setCheck(['Number', 'Variables'])
				.appendField('utime')
				.appendField(new Blockly.FieldDropdown([['sleep','sleep'], ['sleep_us','sleep_us'], ['sleep_ms','sleep_ms'], ['localtime','localtime']]), 'utime');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(345);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_machine_time_pulse_us'] = {
		init: function() {
			this.appendValueInput('pin/var')
				.setCheck(['micropython_pin', 'Variables'])
				.appendField('set time_pulse_us');
				
			this.appendDummyInput()
				.appendField('with pulse level')
				.appendField(new Blockly.FieldDropdown([['0','0'], ['1','1']]), 'pulse');
			this.appendValueInput('timeout_us')
				.setCheck('Number')
				.appendField('timeout');
			this.appendValueInput('var')
				.appendField('for')
				.setCheck('Variables');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(195);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_adc'] = {
		init: function() {
			this.appendValueInput('adc_var')
				.setCheck('Number')
				.appendField('ADC');
			this.setOutput(true, null);
			this.setColour(150);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_adc_method'] = {
		init: function() {
			this.appendValueInput('NAME')
				.setCheck('Variables')
				.appendField('read from ADC for');
			this.setOutput(true, null);
			this.setColour(150);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};


	Blockly.Blocks['micropython_adc_pin'] = {
		init: function() {
			this.appendValueInput('adc_pin')
				.setCheck('micropython_pin')
				.appendField('ADC');
			this.setOutput(true, null);
			this.setColour(150);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_print'] = {
		init: function() {
			this.appendDummyInput()
				.appendField('print');
			this.appendValueInput('print_value')
				.setCheck(null);
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(120);
			this.setTooltip('you can print anything');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_print_format'] = {
		init: function() {
			this.appendDummyInput()
				.appendField('format')
				.appendField('print')
				.appendField(new Blockly.FieldTextInput('some text'), 'text_quotation_mark');
			this.appendValueInput('var1')
				.setCheck('Variables');
			this.appendValueInput('var2')
				.setCheck('Variables');
			this.appendValueInput('var3')
				.setCheck('Variables');
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(120);
			this.setTooltip('In the field\'some text\' write brackets instead of variable name and in empty spaces put the variables.');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_dht'] = {
		init: function() {
			this.appendValueInput('dht')
				.setCheck('micropython_pin')
				.appendField('DHT11');
			this.setOutput(true, null);
			this.setColour(180);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_dht_sensors'] = {
		init: function() {
			this.appendValueInput('sensors')
				.setCheck('Variables')
				.appendField('DHT sensors')
				.appendField(new Blockly.FieldDropdown([['measure','measure'], ['temperature','temperature'], ['humidity','humidity']]), 'sensors')
				.appendField('for');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(180);
			this.setTooltip('first you have to measure');
			this.setHelpUrl('');
		}
	};

	Blockly.Blocks['micropython_get_dht_sensors'] = {
		init: function() {
			this.appendValueInput('get_value_sensor')
				.setCheck('Variables')
				.appendField('get value from DHT sensor')
				.appendField(new Blockly.FieldDropdown([['temperature','temperature'], ['humidity','humidity']]), 'sensors')
				.appendField('for');
			this.setInputsInline(false);
			this.setOutput(true, null);
			this.setColour(180);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};
	
	Blockly.Blocks['micropython_try_catch'] = {
		init: function() {
			this.appendStatementInput('try_catch')
				.setCheck(null)
				.appendField('try');
			this.appendValueInput('except')
				.setCheck('Variables')
				.appendField('exept')
				.appendField(new Blockly.FieldTextInput('OSError'), 'error')
				.appendField('as');
			this.appendStatementInput('except_code')
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(105);
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};



};