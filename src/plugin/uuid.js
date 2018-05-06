import uuid from 'uuid';

export default{
	install(Vue){
		Vue.prototype.$_uuid = uuid;
	}
}