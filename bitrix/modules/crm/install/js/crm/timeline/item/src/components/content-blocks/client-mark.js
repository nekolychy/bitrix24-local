import { LabelSize, LabelStyle } from 'ui.system.label';
import { Label as UILabel } from 'ui.system.label.vue';

import { ClientMark as ClientMarkType } from '../enums/client-mark';

// @vue/component
export const ClientMark = {
	components: {
		UILabel,
	},
	props: {
		mark: {
			type: String,
			default: ClientMarkType.POSITIVE,
			validator: (value) => Object.values(ClientMarkType).includes(value),
		},
		text: {
			type: String,
			default: '',
		},
	},

	computed: {
		clientMarkStyle(): string
		{
			const map = {
				[ClientMarkType.POSITIVE]: LabelStyle.TINTED_SUCCESS,
				[ClientMarkType.NEUTRAL]: LabelStyle.TINTED_WARNING,
				[ClientMarkType.NEGATIVE]: LabelStyle.FILLED_ALERT,
			};

			return map[this.mark] || LabelStyle.TINTED_SUCCESS;
		},

		clientMarkSize(): string
		{
			return LabelSize.SM;
		},
	},

	// language=Vue
	template: `
		<UILabel
			:style="clientMarkStyle"
			:size="clientMarkSize"
			:value="text"
			:bordered="true"
		/>
	`,
};
