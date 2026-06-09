import { mapGetters } from 'ui.vue3.vuex';
import 'ui.forms';
import 'ui.layout-form';
import type { BitrixVueComponentProps } from 'ui.vue3';

import { Model } from 'booking.const';
import type { NotificationsModel, NotificationsSenderModel } from 'booking.model.notifications';

import { BaseInfo } from './base-info/base-info';
import { Confirmation } from './confirmation/confirmation';
import { Reminder } from './reminder/reminder';
import { Feedback } from './feedback/feedback';
import { Late } from './late/late';
import { Cancellation } from './cancellation/cancellation';
import { TariffInfo } from './tariff-info/tariff-info';

import './resource-notification-card.css';

// @vue/component
export const ResourceNotificationCard = {
	name: 'ResourceNotificationCard',
	components: {
		TariffInfo,
	},
	computed: {
		...mapGetters({
			notifications: `${Model.Notifications}/get`,
			dictionary: `${Model.Dictionary}/getNotifications`,
			senders: `${Model.Notifications}/getSenders`,
			resource: `${Model.ResourceCreationWizard}/getResource`,
		}),
		needShowSenderSelector(): boolean
		{
			return this.senders.length > 1;
		},
		activeSender(): NotificationsSenderModel | null
		{
			return this.senders.find((s) => s.code === this.resource.senderCode) ?? this.senders[0] ?? null;
		},
		activeSenderCanUse(): boolean
		{
			return this.activeSender?.canUse ?? false;
		},
		supportedNotificationTypes(): string[]
		{
			if (!this.activeSender?.notifications)
			{
				return [];
			}

			return Object.values(this.activeSender.notifications).map((n) => n.value);
		},
		notificationViews(): { view: BitrixVueComponentProps, model: NotificationsModel, ordinal: number }[]
		{
			return this.notifications
				.filter((model: NotificationsModel) => this.supportedNotificationTypes.includes(model.type))
				.map((model: NotificationsModel, index: number) => {
					const ordinal = index + 1;

					return {
						[this.dictionary.Info.value]: { view: BaseInfo, model, ordinal },
						[this.dictionary.Confirmation.value]: { view: Confirmation, model, ordinal },
						[this.dictionary.Reminder.value]: { view: Reminder, model, ordinal },
						[this.dictionary.Delayed.value]: { view: Late, model, ordinal },
						[this.dictionary.Feedback.value]: { view: Feedback, model, ordinal },
						[this.dictionary.Cancellation.value]: { view: Cancellation, model, ordinal },
					}[model.type] ?? {};
				})
			;
		},
	},
	methods: {
		selectSender(code: string): void
		{
			void this.$store.dispatch(`${Model.ResourceCreationWizard}/updateResource`, { senderCode: code });
		},
	},
	template: `
		<div class="resource-notification-card">
			<div v-if="needShowSenderSelector" class="resource-notification-card__sender-selector">
				<div
					v-for="sender in senders"
					:key="sender.code"
					class="resource-notification-card__sender-item"
					:class="{ '--active': sender.code === resource.senderCode }"
					@click="selectSender(sender.code)"
				>
					{{ sender.code }}
				</div>
			</div>
			<TariffInfo/>
			<slot v-for="notification of notificationViews" :key="notification.view">
				<component
					:is="notification.view"
					:model="notification.model"
					:ordinal="notification.ordinal"
					:senderCanUse="activeSenderCanUse"
					:data-id="'brcw-resource-notification-view-' + notification.view"
				/>
			</slot>
		</div>
	`,
};
