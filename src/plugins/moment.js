import moment from 'moment';

moment.locale('zh-tw');

export default{
	install(Vue){
		Vue.prototype.$_moment = moment;
	}
}