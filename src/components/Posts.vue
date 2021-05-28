<template>
	<b-container class="paddingHeader">
		<b-row class="d-flex align-items-stretch align-content-stretch">
			<b-col v-for="post in posts" :key="post.id"><Post :post="post" /></b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PostInterface } from "../interfaces/post.interface";
import Post from "./Post.vue";

@Component({
	components: {
		Post,
	},
})
export default class Posts extends Vue {
	@Prop() private posts!: PostInterface[];

	mounted() {
		console.log(this.posts);
	}
}
</script>

<style scoped lang="scss">
.paddingHeader {
	margin-top: 8vh;
}
</style>
