<template>
	<v-card class="graphDialog">
		<v-card-title>{{$t('DASHBOARD_ADDTHERMOMETER')}}</v-card-title>

		<v-card-text>
			<div layout-padding class="signal-details row">
				<v-text-field autofocus color ="orange" :label="$t('DASHBOARD_SIGNAL_NAME')" required v-model="newdata.id" class="col-md-6">{{$t('DASHBOARD_SIGNAL_NAME')}}</v-text-field>
				<v-text-field color ="orange" :label="$t('DASHBOARD_SIGNAL_DESCRIPTION')" required v-model="newdata.description" class="col-md-6">{{$t('DASHBOARD_SIGNAL_DESCRIPTION')}}</v-text-field>
			</div>

			<div class="sig-properties row">
				<v-text-field :label="$t('NAME')" v-model="newdata.figureName" class="col-md-6"></v-text-field>
				<div class="form__field col-md-6">
					<div class="form__label">{{$t('DASHBOARD_SIGNAL_COLOR')}}</div>
					<div class="form__input">
						<swatches v-model="newdata.color" colors="text-advanced" popover-to="right"></swatches>
					</div>
				</div>
				<v-text-field :label="$t('DASHBOARD_MIN_AXES_VALUE')" type="number" step=0.1 v-model="newdata.minAxesValue" class="col-md-6"></v-text-field>
				<v-text-field :label="$t('DASHBOARD_MIN_AXES_VALUE')" type="number" step=0.1 v-model="newdata.maxAxesValue" class="col-md-6"></v-text-field>
				<v-text-field :label="$t('DASHBOARD_AXIS_NAME')" v-model="newdata.axisName" class="col-md-6"></v-text-field>
			</div>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn text @click="close">{{$t('CLOSE')}}</v-btn>
			<v-btn class="newapp" text @click="createChart">{{$t('DASHBOARD_ADD_SIGNAL')}}</v-btn>
		</v-card-actions>
		
    </v-card>
</template>

<script>
import _ from 'lodash';
import Swatches from 'vue-swatches';
export default {
	name:'ThermometerDialog',
	components: {
		Swatches
	},
	props:['signal'],
	data() {
		return {
			newdata: _.assign ({
				id:'',
				description:'',
				color:'#48f542',
				minAxesValue: 0,
				maxAxesValue: 1000,
				axisName: '',	
				figureName: ''
			}, this.data)
		
		};
	},
	methods: {
		esc() {
			this.close();
		}, 
		enter() {
			this.createChart();
		}, 
		close ()
		{
			this.$root.$emit('submit');
		},
		createChart()
		{
			let title = this.newdata.id.replace(/ /g,'');
			if(title.length > 0)
				this.$root.$emit ('submit', this.newdata);
			else
				this.studio.workspace.showNotification('DASHBOARD_NO_TITLE');
		}
	},
};
</script>

