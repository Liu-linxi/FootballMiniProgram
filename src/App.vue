<script setup>
	const { addNetWorkInterceptor } = addInterceptor()
	onLaunch(()=>{
		addNetWorkInterceptor()
	})
</script>

<style>
	/*每个页面公共css */
	@import url("common/base.css");
	@import url("common/common.css");
</style>