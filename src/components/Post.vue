<template>
	<div>
		<b-card
			:title="post.title"
			:img-src="random_image()"
			img-alt="Image"
			img-top
			tag="article"
			style="min-width: 20rem"
			class="mb-4"
		>
			<b-card-text>
				{{ post.body }}
			</b-card-text>

			<router-link :to="`/post/` + post.id">
				<b-button variant="primary">Go somewhere</b-button></router-link
			>
		</b-card>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PostInterface } from "../interfaces/post.interface";

@Component
export default class Post extends Vue {
	@Prop() private post!: PostInterface;

	mounted() {
		console.log(this.post);
	}
	random_image() {
		const newDate = new Date().toISOString();
		return `https://picsum.photos/600/300/?timestamp=` + newDate;
	}
}
</script>

<style scoped lang="scss"></style>
