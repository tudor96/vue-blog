<template>
	<div class="about">
		<h1>{{ $route.params.id }}</h1>
	</div>
</template>

<script lang="ts">
import { apiFactory } from "@/api";
import { Component, Prop, Vue } from "vue-property-decorator";
import { PostInterface } from "../interfaces/post.interface";

@Component<Details>({
	watch: {
		post: function (value) {
			console.log("watch", value);
		},
	},
})
export default class Details extends Vue {
	postId: string = this.$route.params.id;
	post: PostInterface | null = null;

	async fetchPost(postId: string): Promise<void> {
		const newPost = await apiFactory().data.posts().getPost(postId);
		this.post = newPost;
	}

	mounted() {
		this.fetchPost(this.postId);
	}
}
</script>

<style scoped lang="scss">
.paddingHeader {
	margin-top: 8vh;
}
</style>
