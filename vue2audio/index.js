/**
 * Created by MDHH on 2017/6/30.
 */
import Audio from './src/audio.vue';

Audio.install = function (Vue) {
  Vue.component(Audio.name, Audio);
};

export default Audio;
