<script lang="tsx">
import {toRefs} from 'vue'
export default {
    props: ['count'],
    emits: ['tapCount'],
    methods: {
        
    },
    setup(props, {emit}) {
        // console.log(count, emit)
        const {count} = toRefs(props)
        const tapCount = () => {
            // console.log(emit)
            emit('tapCount')
        }
        return () => (<span onClick={() =>tapCount()}>{`${count.value}`}</span>)
    }
}
</script>