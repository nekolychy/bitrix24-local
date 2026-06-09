import { Type } from 'main.core';

// @vue/component
export default {
	props: {
		blocks: {
			type: Object,
			required: true,
			validator: (value) => Type.isObject(value) && Object.values(value).every((block) => Type.isObject(block)),
		},
	},

	computed: {
		visibleBlocks(): Array
		{
			if (!Type.isObject(this.blocks))
			{
				return [];
			}

			return Object.keys(this.blocks)
				.map((id) => ({ id, ...this.blocks[id] }))
				.filter((item) => (item.scope !== 'mobile'))
			;
		},
	},

	mounted(): void
	{
		const blocks = this.$refs.blocks;

		this.visibleBlocks.forEach((block, index) => {
			if (Type.isDomNode(blocks[index].$el))
			{
				blocks[index].$el.setAttribute('data-id', block.id);
			}
			else
			{
				throw new Error(`Vue component "${block.rendererName}" was not found`);
			}
		});
	},

	methods: {
		/**
		 * Finds and returns block component instance by its identifier
		 *
		 * @param {string} blockId - block identifier
		 *
		 * @return {Object|null} - block component instance or null if not found
		 *
		 * @public
		 */
		getBlockById(blockId: string): ?Object
		{
			const blockIndex = this.visibleBlocks.findIndex((block) => block.id === blockId);

			if (blockIndex === -1)
			{
				return null;
			}

			return this.$refs.blocks[blockIndex] || null;
		},
	},

	// language=Vue
	template: `
		<div class="crm-timeline__group-blocks">
			<div
				v-for="(block) in visibleBlocks"
				:key="block.id"
			>
				<component 
					:is="block.rendererName"
					v-bind="block.properties"
					ref="blocks"
				/>
			</div>
		</div>
	`,
};
