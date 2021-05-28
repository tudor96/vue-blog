<template>
	<div class="home">
		<Posts v-bind:posts="posts" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Posts from "@/components/Posts.vue"; // @ is an alias to /src
import { PostInterface } from "../interfaces/post.interface";
import { apiFactory } from "../api";

@Component({
	components: {
		Posts,
	},
})
export default class Home extends Vue {
	posts: PostInterface[] = [];

	async mounted() {
		const newPosts = await apiFactory().data.posts().getAllPosts();
		this.posts = newPosts;
		console.log(newPosts);
	}
}
</script>

<style scoped></style>
