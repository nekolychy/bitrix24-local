/* eslint-disable */
this.BX = this.BX || {};
this.BX.Crm = this.BX.Crm || {};
(function (exports, crm_timeline_item, crm_timeline_tools, main_core, ui_vue3, main_loader, main_date, rest_client, ui_analytics, ui_notification, ui_infoHelper, ui_system_menu, ui_buttons, main_popup, ui_hint, crm_field_colorSelector, main_core_events, ui_vue3_directives_hint, ui_label, ui_cnt, crm_router, ui_dialogs_messagebox, ui_entitySelector, crm_common, crm_timeline, ui_imageStackSteps, ui_iconSet_main, ui_designTokens, main_sidepanel, calendar_sharing_interface, calendar_util, crm_ai_call, ui_feedback_form, crm_ai_nameService, ui_iconSet_api_vue, ui_system_chip_vue, location_core, location_widget, ui_iconSet_api_core, ui_system_label, ui_system_label_vue, crm_timeline_editors_commentEditor, ui_bbcode_formatter_htmlFormatter, ui_textEditor, ui_lottie, main_lazyload, ui_progressround, ui_avatar, crm_activity_fileUploaderPopup, ui_icons_generator, crm_audioPlayer, ui_iconSet_actions, crm_field_itemSelector, currency_currencyCore, ui_alerts, crm_field_pingSelector, bizproc_types, crm_entityEditor, pull_client, crm_entityEditor_field_paymentDocuments, ui_sidepanel, crm_integration_analytics) {
	'use strict';

	const StreamType = {
		history: 0,
		scheduled: 1,
		pinned: 2
	};

	function _classPrivateMethodInitSpec$y(e, a) { _checkPrivateRedeclaration$B(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$f(e, t, a) { _checkPrivateRedeclaration$B(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$B(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$e(s, a) { return s.get(_assertClassBrand$B(s, a)); }
	function _classPrivateFieldSet$f(s, a, r) { return s.set(_assertClassBrand$B(s, a), r), r; }
	function _assertClassBrand$B(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _menu = /*#__PURE__*/new WeakMap();
	var _vueComponent$1 = /*#__PURE__*/new WeakMap();
	var _onAction = /*#__PURE__*/new WeakMap();
	var _SystemMenu_brand = /*#__PURE__*/new WeakSet();
	let SystemMenu = /*#__PURE__*/function () {
		function SystemMenu(vueComponent, menu, menuOptions, onAction) {
			babelHelpers.classCallCheck(this, SystemMenu);
			_classPrivateMethodInitSpec$y(this, _SystemMenu_brand);
			_classPrivateFieldInitSpec$f(this, _menu, null);
			_classPrivateFieldInitSpec$f(this, _vueComponent$1, void 0);
			_classPrivateFieldInitSpec$f(this, _onAction, void 0);
			_classPrivateFieldSet$f(_vueComponent$1, this, vueComponent);
			_classPrivateFieldSet$f(_onAction, this, onAction);
			const {
				items: _mappedItems,
				sections: mappedSections
			} = _assertClassBrand$B(_SystemMenu_brand, this, _normalizeMenu).call(this, menu.items ?? [], menu.sections ?? []);
			_classPrivateFieldSet$f(_menu, this, new ui_system_menu.Menu({
				...menuOptions,
				items: _mappedItems,
				sections: mappedSections,
				animation: menuOptions?.animation ?? 'fading-slide',
				autoHide: menuOptions?.autoHide ?? true,
				cacheable: menuOptions?.cacheable ?? false
			}));
		}
		return babelHelpers.createClass(SystemMenu, [{
			key: "show",
			value: function show() {
				_classPrivateFieldGet$e(_menu, this)?.show();
			}
		}, {
			key: "isShown",
			value: function isShown() {
				return _classPrivateFieldGet$e(_menu, this)?.getPopup()?.isShown() ?? false;
			}
		}, {
			key: "destroy",
			value: function destroy() {
				_classPrivateFieldGet$e(_menu, this)?.destroy();
				_classPrivateFieldSet$f(_menu, this, null);
			}
		}], [{
			key: "showMenu",
			value: function showMenu(vueComponent, menu, menuOptions, onAction) {
				const instance = new SystemMenu(vueComponent, menu, menuOptions, onAction);
				instance.show();
				return instance;
			}
		}]);
	}();
	function _normalizeMenu(items, sections) {
		if (main_core.Type.isArrayFilled(sections)) {
			return {
				items: items.filter(item => !item.delimiter).map(item => _assertClassBrand$B(_SystemMenu_brand, this, _createMenuItem).call(this, item)),
				sections: sections
			};
		}
		return _assertClassBrand$B(_SystemMenu_brand, this, _normalizeWithDelimiters).call(this, items);
	}
	function _createMenuItem(item) {
		const menuItem = {
			title: item.title ?? ''
		};
		if (main_core.Type.isStringFilled(item.subtitle)) {
			menuItem.subtitle = item.subtitle;
		}
		if (main_core.Type.isStringFilled(item.icon)) {
			menuItem.icon = item.icon;
		}
		if (main_core.Type.isStringFilled(item.design)) {
			menuItem.design = item.design;
		}
		if (main_core.Type.isBoolean(item.isSelected)) {
			menuItem.isSelected = item.isSelected;
		}
		if (main_core.Type.isBoolean(item.isLocked)) {
			menuItem.isLocked = item.isLocked;
		}
		if (main_core.Type.isObject(item.badgeText)) {
			menuItem.badgeText = item.badgeText;
		}
		if (main_core.Type.isStringFilled(item.sectionCode)) {
			menuItem.sectionCode = item.sectionCode;
		}
		if (main_core.Type.isObject(item.action) && main_core.Type.isFunction(_classPrivateFieldGet$e(_onAction, this))) {
			menuItem.onClick = () => {
				_classPrivateFieldGet$e(_menu, this)?.close();
				_classPrivateFieldGet$e(_onAction, this).call(this, item.action);
			};
		}
		if (main_core.Type.isObject(item.menu)) {
			const {
				items: subItems,
				sections: subSections
			} = _assertClassBrand$B(_SystemMenu_brand, this, _normalizeMenu).call(this, Object.values(item.menu.items ?? {}), item.menu.sections ?? []);
			menuItem.subMenu = {
				items: subItems
			};
			if (main_core.Type.isArrayFilled(subSections)) {
				menuItem.subMenu.sections = subSections;
			}
		}
		return menuItem;
	}
	function _normalizeWithDelimiters(items) {
		const groups = [[]];
		const sectionTitles = [null];
		for (const item of items) {
			if (item.delimiter) {
				groups.push([]);
				sectionTitles.push(item.title || null);
				continue;
			}
			groups[groups.length - 1].push(item);
		}
		if (groups.length === 1) {
			return {
				items: groups[0].map(item => _assertClassBrand$B(_SystemMenu_brand, this, _createMenuItem).call(this, item)),
				sections: []
			};
		}
		const sections = [];
		const mappedItems = [];
		groups.forEach((group, index) => {
			if (group.length === 0) {
				return;
			}
			const code = `generated-section-${index}`;
			const section = {
				code
			};
			if (sectionTitles[index]) {
				section.title = sectionTitles[index];
			}
			sections.push(section);
			for (const item of group) {
				const mapped = _assertClassBrand$B(_SystemMenu_brand, this, _createMenuItem).call(this, item);
				mapped.sectionCode = code;
				mappedItems.push(mapped);
			}
		});
		return {
			items: mappedItems,
			sections
		};
	}

	function _classPrivateMethodInitSpec$x(e, a) { _checkPrivateRedeclaration$A(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$e(e, t, a) { _checkPrivateRedeclaration$A(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$A(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$d(s, a) { return s.get(_assertClassBrand$A(s, a)); }
	function _classPrivateFieldSet$e(s, a, r) { return s.set(_assertClassBrand$A(s, a), r), r; }
	function _assertClassBrand$A(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	const AnimationTarget = {
		block: 'block',
		item: 'item'
	};
	const AnimationType = {
		disable: 'disable',
		loader: 'loader'
	};
	const ActionType = {
		JS_EVENT: 'jsEvent',
		AJAX_ACTION: {
			STARTED: 'ajaxActionStarted',
			FINISHED: 'ajaxActionFinished',
			FAILED: 'ajaxActionFailed'
		},
		isJsEvent(type) {
			return type === this.JS_EVENT;
		},
		isAjaxAction(type) {
			return type === this.AJAX_ACTION.STARTED || type === this.AJAX_ACTION.FINISHED || type === this.AJAX_ACTION.FAILED;
		}
	};
	Object.freeze(ActionType.AJAX_ACTION);
	Object.freeze(ActionType);
	var _type$1 = /*#__PURE__*/new WeakMap();
	var _value = /*#__PURE__*/new WeakMap();
	var _actionParams = /*#__PURE__*/new WeakMap();
	var _animation = /*#__PURE__*/new WeakMap();
	var _analytics = /*#__PURE__*/new WeakMap();
	var _Action_brand = /*#__PURE__*/new WeakSet();
	let Action = /*#__PURE__*/function () {
		function Action(_params) {
			babelHelpers.classCallCheck(this, Action);
			_classPrivateMethodInitSpec$x(this, _Action_brand);
			_classPrivateFieldInitSpec$e(this, _type$1, null);
			_classPrivateFieldInitSpec$e(this, _value, null);
			_classPrivateFieldInitSpec$e(this, _actionParams, null);
			_classPrivateFieldInitSpec$e(this, _animation, null);
			_classPrivateFieldInitSpec$e(this, _analytics, null);
			_classPrivateFieldSet$e(_type$1, this, _params.type);
			_classPrivateFieldSet$e(_value, this, _params.value);
			_classPrivateFieldSet$e(_actionParams, this, _params.actionParams);
			_classPrivateFieldSet$e(_animation, this, main_core.Type.isPlainObject(_params.animation) ? _params.animation : null);
			_classPrivateFieldSet$e(_analytics, this, main_core.Type.isPlainObject(_params.analytics) ? _params.analytics : null);
		}
		return babelHelpers.createClass(Action, [{
			key: "execute",
			value: function execute(vueComponent) {
				return new Promise((resolve, reject) => {
					if (this.isJsEvent()) {
						vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
							action: _classPrivateFieldGet$d(_value, this),
							actionType: ActionType.JS_EVENT,
							actionData: _classPrivateFieldGet$d(_actionParams, this),
							animationCallbacks: {
								onStart: _assertClassBrand$A(_Action_brand, this, _startAnimation).bind(this, vueComponent),
								onStop: _assertClassBrand$A(_Action_brand, this, _stopAnimation).bind(this, vueComponent)
							}
						});
						_assertClassBrand$A(_Action_brand, this, _sendAnalytics).call(this);
						resolve(true);
					} else if (this.isJsCode()) {
						_assertClassBrand$A(_Action_brand, this, _startAnimation).call(this, vueComponent);

						// eslint-disable-next-line no-eval -- intentional: executes jsCode action type from server-side timeline layout
						eval(_classPrivateFieldGet$d(_value, this));
						_assertClassBrand$A(_Action_brand, this, _stopAnimation).call(this, vueComponent);
						_assertClassBrand$A(_Action_brand, this, _sendAnalytics).call(this);
						resolve(true);
					} else if (this.isAjaxAction() || this.isAjaxJsonAction()) {
						_assertClassBrand$A(_Action_brand, this, _startAnimation).call(this, vueComponent);
						vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
							action: _classPrivateFieldGet$d(_value, this),
							actionType: ActionType.AJAX_ACTION.STARTED,
							actionData: _classPrivateFieldGet$d(_actionParams, this)
						});
						const ajaxConfig = {
							[this.isAjaxJsonAction() ? 'json' : 'data']: _assertClassBrand$A(_Action_brand, this, _prepareRunActionParams).call(this, _classPrivateFieldGet$d(_actionParams, this))
						};
						if (_classPrivateFieldGet$d(_analytics, this)) {
							ajaxConfig.analytics = _classPrivateFieldGet$d(_analytics, this);
						}
						main_core.ajax.runAction(_classPrivateFieldGet$d(_value, this), ajaxConfig).then(response => {
							_assertClassBrand$A(_Action_brand, this, _stopAnimation).call(this, vueComponent);
							vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
								action: _classPrivateFieldGet$d(_value, this),
								actionType: ActionType.AJAX_ACTION.FINISHED,
								actionData: _classPrivateFieldGet$d(_actionParams, this),
								response
							});
							resolve(response);
						}, response => {
							_assertClassBrand$A(_Action_brand, this, _stopAnimation).call(this, vueComponent, true);
							ui_notification.UI.Notification.Center.notify({
								content: response.errors[0].message,
								autoHideDelay: 5000
							});
							vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
								action: _classPrivateFieldGet$d(_value, this),
								actionType: ActionType.AJAX_ACTION.FAILED,
								actionParams: _classPrivateFieldGet$d(_actionParams, this),
								response
							});
							resolve(response);
						});
					} else if (this.isCallRestBatch()) {
						_assertClassBrand$A(_Action_brand, this, _startAnimation).call(this, vueComponent);
						vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
							action: _classPrivateFieldGet$d(_value, this),
							actionType: 'ajaxActionStarted',
							actionData: _classPrivateFieldGet$d(_actionParams, this)
						});
						rest_client.rest.callBatch(_assertClassBrand$A(_Action_brand, this, _prepareCallBatchParams).call(this, _classPrivateFieldGet$d(_actionParams, this)), restResult => {
							for (const result in restResult) {
								const response = restResult[result].answer;
								if (response.error) {
									_assertClassBrand$A(_Action_brand, this, _stopAnimation).call(this, vueComponent);
									ui_notification.UI.Notification.Center.notify({
										content: response.error.error_description,
										autoHideDelay: 5000
									});
									vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
										action: _classPrivateFieldGet$d(_value, this),
										actionType: 'ajaxActionFailed',
										actionParams: _classPrivateFieldGet$d(_actionParams, this)
									});
									reject(restResult);
									return;
								}
							}
							_assertClassBrand$A(_Action_brand, this, _stopAnimation).call(this, vueComponent);
							vueComponent.$Bitrix.eventEmitter.emit('crm:timeline:item:action', {
								action: _classPrivateFieldGet$d(_value, this),
								actionType: 'ajaxActionFinished',
								actionData: _classPrivateFieldGet$d(_actionParams, this)
							});
							resolve(restResult);
						}, true);
					} else if (this.isRedirect()) {
						_assertClassBrand$A(_Action_brand, this, _startAnimation).call(this, vueComponent);
						const linkAttrs = {
							href: _classPrivateFieldGet$d(_value, this)
						};
						if (_classPrivateFieldGet$d(_actionParams, this) && _classPrivateFieldGet$d(_actionParams, this).target) {
							linkAttrs.target = _classPrivateFieldGet$d(_actionParams, this).target;
						}
						// this magic allows auto opening internal links in slider if possible:
						const link = main_core.Dom.create('a', {
							attrs: linkAttrs,
							text: '',
							style: {
								display: 'none'
							}
						});
						main_core.Dom.append(link, document.body);
						link.click();
						setTimeout(() => main_core.Dom.remove(link), 10);
						_assertClassBrand$A(_Action_brand, this, _sendAnalytics).call(this);
						resolve(_classPrivateFieldGet$d(_value, this));
					} else if (this.isShowMenu()) {
						SystemMenu.showMenu(vueComponent, {
							items: _assertClassBrand$A(_Action_brand, this, _prepareMenuItems).call(this, _classPrivateFieldGet$d(_value, this).items ?? [], vueComponent),
							sections: _classPrivateFieldGet$d(_value, this).sections ?? []
						}, {
							bindElement: vueComponent.$el,
							minWidth: vueComponent.$el.offsetWidth,
							cacheable: false
						}, actionData => {
							const action = new Action(actionData);
							void action.execute(vueComponent);
						});
						_assertClassBrand$A(_Action_brand, this, _sendAnalytics).call(this);
						resolve(true);
					} else if (this.isShowInfoHelper()) {
						BX.UI.InfoHelper?.show(_classPrivateFieldGet$d(_value, this));
						_assertClassBrand$A(_Action_brand, this, _sendAnalytics).call(this);
						resolve(true);
					} else {
						reject(false);
					}
				});
			}
		}, {
			key: "isJsEvent",
			value: function isJsEvent() {
				return _classPrivateFieldGet$d(_type$1, this) === 'jsEvent';
			}
		}, {
			key: "isJsCode",
			value: function isJsCode() {
				return _classPrivateFieldGet$d(_type$1, this) === 'jsCode';
			}
		}, {
			key: "isAjaxAction",
			value: function isAjaxAction() {
				return _classPrivateFieldGet$d(_type$1, this) === 'runAjaxAction';
			}
		}, {
			key: "isAjaxJsonAction",
			value: function isAjaxJsonAction() {
				return _classPrivateFieldGet$d(_type$1, this) === 'runAjaxJsonAction';
			}
		}, {
			key: "isCallRestBatch",
			value: function isCallRestBatch() {
				return _classPrivateFieldGet$d(_type$1, this) === 'callRestBatch';
			}
		}, {
			key: "isRedirect",
			value: function isRedirect() {
				return _classPrivateFieldGet$d(_type$1, this) === 'redirect';
			}
		}, {
			key: "isShowInfoHelper",
			value: function isShowInfoHelper() {
				return _classPrivateFieldGet$d(_type$1, this) === 'showInfoHelper';
			}
		}, {
			key: "isShowMenu",
			value: function isShowMenu() {
				return _classPrivateFieldGet$d(_type$1, this) === 'showMenu';
			}
		}, {
			key: "getValue",
			value: function getValue() {
				return _classPrivateFieldGet$d(_value, this);
			}
		}, {
			key: "getActionParam",
			value: function getActionParam(param) {
				return _classPrivateFieldGet$d(_actionParams, this) && _classPrivateFieldGet$d(_actionParams, this).hasOwnProperty(param) ? _classPrivateFieldGet$d(_actionParams, this)[param] : null;
			}
		}]);
	}();
	function _prepareRunActionParams(params) {
		const result = {};
		if (main_core.Type.isUndefined(params)) {
			return result;
		}
		for (const paramName in params) {
			const paramValue = params[paramName];
			if (main_core.Type.isDate(paramValue)) {
				result[paramName] = main_date.DateTimeFormat.format(crm_timeline_tools.DatetimeConverter.getSiteDateTimeFormat(), paramValue);
			} else if (main_core.Type.isPlainObject(paramValue)) {
				result[paramName] = _assertClassBrand$A(_Action_brand, this, _prepareRunActionParams).call(this, paramValue);
			} else {
				result[paramName] = paramValue;
			}
		}
		return result;
	}
	function _prepareCallBatchParams(params) {
		const result = {};
		if (main_core.Type.isUndefined(params)) {
			return result;
		}
		for (const paramName in params) {
			result[paramName] = {
				method: params[paramName].method,
				params: _assertClassBrand$A(_Action_brand, this, _prepareRunActionParams).call(this, params[paramName].params)
			};
		}
		return result;
	}
	function _prepareMenuItems(items, vueComponent) {
		return Object.values(items).filter(item => item.state !== 'hidden' && item.scope !== 'mobile' && (!vueComponent.isReadOnly || !item.hideIfReadonly)).sort((a, b) => a.sort - b.sort);
	}
	function _startAnimation(vueComponent) {
		if (!_assertClassBrand$A(_Action_brand, this, _isAnimationValid).call(this)) {
			return;
		}
		if (_classPrivateFieldGet$d(_animation, this).target === AnimationTarget.item) {
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.disable) {
				vueComponent.$root.setFaded(true);
			}
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.loader) {
				vueComponent.$root.showLoader(true);
			}
		}
		if (_classPrivateFieldGet$d(_animation, this).target === AnimationTarget.block) {
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.disable) {
				if (main_core.Type.isFunction(vueComponent.setDisabled)) {
					vueComponent.setDisabled(true);
				}
			}
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.loader) {
				if (main_core.Type.isFunction(vueComponent.setLoading)) {
					vueComponent.setLoading(true);
				}
			}
		}
	}
	function _stopAnimation(vueComponent, force = false) {
		if (!_assertClassBrand$A(_Action_brand, this, _isAnimationValid).call(this)) {
			return;
		}
		if (_classPrivateFieldGet$d(_animation, this).forever && !force) {
			return; // should not be stopped
		}
		if (_classPrivateFieldGet$d(_animation, this).target === AnimationTarget.item) {
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.disable) {
				vueComponent.$root.setFaded(false);
			}
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.loader) {
				vueComponent.$root.showLoader(false);
			}
		}
		if (_classPrivateFieldGet$d(_animation, this).target === AnimationTarget.block) {
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.disable) {
				if (main_core.Type.isFunction(vueComponent.setDisabled)) {
					vueComponent.setDisabled(false);
				}
			}
			if (_classPrivateFieldGet$d(_animation, this).type === AnimationType.loader) {
				if (main_core.Type.isFunction(vueComponent.setLoading)) {
					vueComponent.setLoading(false);
				}
			}
		}
	}
	function _isAnimationValid() {
		if (!_classPrivateFieldGet$d(_animation, this)) {
			return false;
		}
		if (!AnimationTarget.hasOwnProperty(_classPrivateFieldGet$d(_animation, this).target)) {
			return false;
		}
		return AnimationType.hasOwnProperty(_classPrivateFieldGet$d(_animation, this).type);
	}
	function _sendAnalytics() {
		if (_classPrivateFieldGet$d(_analytics, this) && _classPrivateFieldGet$d(_analytics, this).hit) {
			const clonedAnalytics = {
				..._classPrivateFieldGet$d(_analytics, this)
			};
			delete clonedAnalytics.hit;
			ui_analytics.sendData(clonedAnalytics);
		}
	}

	const Logo = {
		props: {
			type: String,
			addIcon: String,
			addIconType: String,
			icon: String,
			iconType: String,
			backgroundUrl: String,
			backgroundSize: Number,
			inCircle: {
				type: Boolean,
				required: false,
				default: false
			},
			action: Object
		},
		data() {
			return {
				currentIcon: this.icon
			};
		},
		computed: {
			className() {
				return ['crm-timeline__card-logo', `--${this.type}`, {
					'--clickable': this.action
				}];
			},
			iconClassname() {
				return ['crm-timeline__card-logo_icon', `--${this.currentIcon}`, {
					'--in-circle': this.inCircle,
					[`--type-${this.iconType}`]: !!this.iconType && !this.backgroundUrl,
					'--custom-bg': !!this.backgroundUrl
				}];
			},
			addIconClassname() {
				return ['crm-timeline__card-logo_add-icon', `--type-${this.addIconType}`, `--icon-${this.addIcon}`];
			},
			iconInteriorStyle() {
				const result = {};
				if (this.backgroundUrl) {
					result.backgroundImage = 'url(' + encodeURI(main_core.Text.encode(this.backgroundUrl)) + ')';
				}
				if (this.backgroundSize) {
					result.backgroundSize = parseInt(this.backgroundSize) + 'px';
				}
				return result;
			}
		},
		watch: {
			icon(newIcon) {
				this.currentIcon = newIcon;
			}
		},
		methods: {
			executeAction() {
				if (!this.action) {
					return;
				}
				const action = new Action(this.action);
				action.execute(this);
			},
			setIcon(icon) {
				this.currentIcon = icon;
			}
		},
		template: `
		<div :class="className" @click="executeAction">
			<div class="crm-timeline__card-logo_content">
				<div :class="iconClassname">
					<i :style="iconInteriorStyle"></i>
				</div>
				<div :class="addIconClassname" v-if="addIcon">
					<i></i>
				</div>
			</div>
		</div>
	`
	};

	const CalendarIcon = {
		props: {
			timestamp: {
				type: Number,
				required: true,
				default: 0
			},
			calendarEventId: {
				type: Number,
				required: false,
				default: null
			}
		},
		computed: {
			date() {
				return this.formatUserTime('d');
			},
			month() {
				return this.formatUserTime('F');
			},
			dayWeek() {
				const dayShortName = this.formatUserTime('D');
				if (this.time.length > 5)
					// "12:34".length === 5, if +" PM" than > 5
					{
						return dayShortName.slice(0, 2);
					}
				return dayShortName;
			},
			time() {
				return this.getDateTimeConverter().toTimeString();
			},
			userTime() {
				return this.getDateTimeConverter().getValue();
			},
			hasCalendarEventId() {
				return this.calendarEventId > 0;
			}
		},
		methods: {
			getDateTimeConverter() {
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.timestamp).toUserTime();
			},
			formatUserTime(format) {
				return main_date.DateTimeFormat.format(format, this.userTime);
			}
		},
		template: `
		<div class="crm-timeline__calendar-icon-container">
			<div v-if="hasCalendarEventId" class="crm-timeline__calendar-icon_event_icon"></div>
			<div class="crm-timeline__calendar-icon">
				<header class="crm-timeline__calendar-icon_top">
					<div class="crm-timeline__calendar-icon_bullets">
						<div class="crm-timeline__calendar-icon_bullet"></div>
						<div class="crm-timeline__calendar-icon_bullet"></div>
					</div>
				</header>
				<main class="crm-timeline__calendar-icon_content">
					<div class="crm-timeline__calendar-icon_day">{{ date }}</div>
					<div class="crm-timeline__calendar-icon_month">{{ month }}</div>
					<div class="crm-timeline__calendar-icon_date">
						<span class="crm-timeline__calendar-icon_day-week">{{ dayWeek }}</span>
						<span class="crm-timeline__calendar-icon_time">{{ time }}</span>
					</div>
				</main>
			</div>
		</div>
	`
	};

	const LogoCalendar = ui_vue3.BitrixVue.cloneComponent(Logo, {
		components: {
			CalendarIcon
		},
		props: {
			timestamp: {
				type: Number,
				required: false,
				default: 0
			},
			addIcon: String,
			addIconType: String,
			calendarEventId: {
				type: Number,
				required: false,
				default: null
			},
			backgroundColor: {
				type: String,
				required: false,
				default: null
			}
		},
		computed: {
			addIconClassname() {
				return ['crm-timeline__card-logo_add-icon', `--type-${this.addIconType}`, `--icon-${this.addIcon}`];
			},
			logoStyle() {
				if (main_core.Type.isStringFilled(this.backgroundColor)) {
					return {
						'--crm-timeline__logo-background': main_core.Text.encode(this.backgroundColor)
					};
				}
				return {};
			}
		},
		template: `
		<div 
			:class="className"
			:style="logoStyle"
			@click="executeAction"
		>
			<div class="crm-timeline__card-logo_content">
				<CalendarIcon :timestamp="timestamp" :calendar-event-id="calendarEventId" />
				<div :class="addIconClassname" v-if="addIcon">
					<i></i>
				</div>
			</div>
		</div>
	`
	});

	const Body = {
		components: {
			Logo,
			LogoCalendar
		},
		props: {
			logo: Object,
			blocks: Object
		},
		data() {
			return {
				blockRefs: {}
			};
		},
		mounted() {
			const blocks = this.$refs.blocks;
			if (!blocks || !this.visibleBlocks) {
				return;
			}
			this.visibleBlocks.forEach((block, index) => {
				if (main_core.Type.isDomNode(blocks[index].$el)) {
					blocks[index].$el.setAttribute('data-id', block.id);
				} else {
					throw new Error('Vue component "' + block.rendererName + '" was not found');
				}
			});
		},
		beforeUpdate() {
			this.blockRefs = {};
		},
		computed: {
			visibleBlocks() {
				if (!main_core.Type.isPlainObject(this.blocks)) {
					return [];
				}
				return Object.keys(this.blocks).map(id => ({
					id,
					...this.blocks[id]
				})).filter(item => item.scope !== 'mobile').sort((a, b) => {
					let aSort = a.sort === undefined ? 0 : a.sort;
					let bSort = b.sort === undefined ? 0 : b.sort;
					if (aSort < bSort) {
						return -1;
					}
					if (aSort > bSort) {
						return 1;
					}
					return 0;
				});
			},
			contentContainerClassname() {
				return ['crm-timeline__card-container', {
					'--without-logo': !this.logo
				}];
			}
		},
		methods: {
			getContentBlockById(blockId) {
				return this.blockRefs[blockId] ?? null;
			},
			getLogo() {
				return this.$refs.logo;
			},
			saveRef(ref, id) {
				this.blockRefs[id] = ref;
			}
		},
		template: `
		<div class="crm-timeline__card-body">
			<div v-if="logo" class="crm-timeline__card-logo_container">
				<LogoCalendar v-if="logo.icon === 'calendar'" v-bind="logo"></LogoCalendar>
				<Logo v-else v-bind="logo" ref="logo"></Logo>
			</div>
			<div :class="contentContainerClassname">
				<div
					v-for="block in visibleBlocks"
					:key="block.id"
					class="crm-timeline__card-container_block"
				>
					<component
						:is="block.rendererName"
						v-bind="block.properties"
						:ref="(el) => this.saveRef(el, block.id)"
					/>
				</div>
			</div>
		</div>
	`
	};

	let ButtonScope = /*#__PURE__*/babelHelpers.createClass(function ButtonScope() {
		babelHelpers.classCallCheck(this, ButtonScope);
	});
	babelHelpers.defineProperty(ButtonScope, "MOBILE", 'mobile');

	let ButtonState = /*#__PURE__*/babelHelpers.createClass(function ButtonState() {
		babelHelpers.classCallCheck(this, ButtonState);
	});
	babelHelpers.defineProperty(ButtonState, "DEFAULT", '');
	babelHelpers.defineProperty(ButtonState, "LOADING", 'loading');
	babelHelpers.defineProperty(ButtonState, "DISABLED", 'disabled');
	babelHelpers.defineProperty(ButtonState, "HIDDEN", 'hidden');
	babelHelpers.defineProperty(ButtonState, "LOCKED", 'locked');
	babelHelpers.defineProperty(ButtonState, "AI_LOADING", 'ai-loading');
	babelHelpers.defineProperty(ButtonState, "AI_SUCCESS", 'ai-success');

	let ButtonType = /*#__PURE__*/babelHelpers.createClass(function ButtonType() {
		babelHelpers.classCallCheck(this, ButtonType);
	});
	babelHelpers.defineProperty(ButtonType, "ICON", 'icon');
	babelHelpers.defineProperty(ButtonType, "PRIMARY", 'primary');
	babelHelpers.defineProperty(ButtonType, "SECONDARY", 'secondary');
	babelHelpers.defineProperty(ButtonType, "LIGHT", 'light');
	babelHelpers.defineProperty(ButtonType, "AI", 'ai');

	const BaseButton = {
		props: {
			id: {
				type: String,
				required: false,
				default: ''
			},
			title: {
				type: String,
				required: false,
				default: ''
			},
			tooltip: {
				type: String,
				required: false,
				default: ''
			},
			state: {
				type: String,
				required: false,
				default: ButtonState.DEFAULT
			},
			props: Object,
			action: Object
		},
		data() {
			return {
				currentState: this.state
			};
		},
		computed: {
			itemStateToButtonStateDict() {
				return {
					[ButtonState.LOADING]: ui_buttons.Button.State.WAITING,
					[ButtonState.DISABLED]: ui_buttons.Button.State.DISABLED,
					[ButtonState.AI_LOADING]: ui_buttons.Button.State.AI_WAITING
				};
			}
		},
		methods: {
			setDisabled(disabled) {
				if (disabled) {
					this.setButtonState(ButtonState.DISABLED);
				} else {
					this.setButtonState(ButtonState.DEFAULT);
				}
			},
			setLoading(loading) {
				if (loading) {
					this.setButtonState(ButtonState.LOADING);
				} else {
					this.setButtonState(ButtonState.DEFAULT);
				}
			},
			setButtonState(state) {
				if (this.currentState !== state) {
					this.currentState = state;
				}
			},
			onLayoutUpdated() {
				this.setButtonState(this.state);
			},
			executeAction() {
				if (this.action && this.currentState !== ButtonState.DISABLED && this.currentState !== ButtonState.LOADING && this.currentState !== ButtonState.AI_LOADING) {
					const action = new Action(this.action);
					action.execute(this);
				}
			}
		},
		created() {
			this.$Bitrix.eventEmitter.subscribe('layout:updated', this.onLayoutUpdated);
		},
		beforeUnmount() {
			this.$Bitrix.eventEmitter.unsubscribe('layout:updated', this.onLayoutUpdated);
		},
		template: `<button></button>`
	};

	function _classPrivateFieldInitSpec$d(e, t, a) { _checkPrivateRedeclaration$z(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$z(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$c(s, a) { return s.get(_assertClassBrand$z(s, a)); }
	function _classPrivateFieldSet$d(s, a, r) { return s.set(_assertClassBrand$z(s, a), r), r; }
	function _assertClassBrand$z(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _menuOptions = /*#__PURE__*/new WeakMap();
	var _vueComponent = /*#__PURE__*/new WeakMap();
	let Menu$1 = /*#__PURE__*/function () {
		function Menu(vueComponent, menuItems, menuOptions) {
			babelHelpers.classCallCheck(this, Menu);
			_classPrivateFieldInitSpec$d(this, _menuOptions, {});
			_classPrivateFieldInitSpec$d(this, _vueComponent, {});
			_classPrivateFieldSet$d(_vueComponent, this, vueComponent);
			_classPrivateFieldSet$d(_menuOptions, this, menuOptions || {});
			_classPrivateFieldSet$d(_menuOptions, this, {
				angle: false,
				cacheable: false,
				..._classPrivateFieldGet$c(_menuOptions, this)
			});
			_classPrivateFieldGet$c(_menuOptions, this).items = [];
			for (const item of menuItems) {
				_classPrivateFieldGet$c(_menuOptions, this).items.push(this.createMenuItem(item));
			}
		}
		return babelHelpers.createClass(Menu, [{
			key: "getMenuItems",
			value: function getMenuItems() {
				return _classPrivateFieldGet$c(_menuOptions, this).items;
			}
		}, {
			key: "show",
			value: function show() {
				main_popup.MenuManager.show(_classPrivateFieldGet$c(_menuOptions, this));
			}
		}, {
			key: "createMenuItem",
			value: function createMenuItem(item) {
				if (Object.prototype.hasOwnProperty.call(item, 'delimiter') && item.delimiter) {
					return {
						text: item.title || '',
						delimiter: true
					};
				}
				const result = {
					text: item.title,
					value: item.title
				};
				if (item.icon) {
					result.className = `menu-popup-item-${item.icon}`;
				}
				if (item.menu) {
					result.items = [];
					for (const subItem of Object.values(item.menu.items || {})) {
						result.items.push(this.createMenuItem(subItem));
					}
				} else if (item.action) {
					if (item.action.type === 'redirect') {
						result.href = item.action.value;
					} else if (item.action.type === 'jsCode') {
						result.onclick = item.action.value;
					} else {
						result.onclick = () => {
							void this.onMenuItemClick(item);
						};
					}
				}
				return result;
			}
		}, {
			key: "onMenuItemClick",
			value: function onMenuItemClick(item) {
				const menu = main_popup.MenuManager.getCurrentMenu();
				if (menu) {
					menu.close();
				}
				const action = new Action(item.action);
				void action.execute(_classPrivateFieldGet$c(_vueComponent, this));
			}
		}], [{
			key: "showMenu",
			value: function showMenu(vueComponent, menuItems, menuOptions) {
				const menu = new Menu(vueComponent, menuItems, menuOptions);
				menu.show();
			}
		}]);
	}();

	function _callSuper$B(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$B() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$B() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$B = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$w(e, a) { _checkPrivateRedeclaration$y(e, a), a.add(e); }
	function _checkPrivateRedeclaration$y(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$y(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _ButtonMenu_brand = /*#__PURE__*/new WeakSet();
	let ButtonMenu = /*#__PURE__*/function (_Menu) {
		function ButtonMenu(vueComponent, menuItems, menuOptions) {
			var _this;
			babelHelpers.classCallCheck(this, ButtonMenu);
			_this = _callSuper$B(this, ButtonMenu, [vueComponent, menuItems, menuOptions]);
			_classPrivateMethodInitSpec$w(_this, _ButtonMenu_brand);
			_assertClassBrand$y(_ButtonMenu_brand, _this, _applyMenuItems).call(_this);
			return _this;
		}

		/**
		 * @override
		 */
		babelHelpers.inherits(ButtonMenu, _Menu);
		return babelHelpers.createClass(ButtonMenu, [{
			key: "createMenuItem",
			value: function createMenuItem(item) {
				const result = {
					text: item.title,
					value: item.title
				};
				if (main_core.Type.isStringFilled(item.state)) {
					switch (item.state) {
						case ButtonState.AI_LOADING:
							result.className = 'menu-popup-item-ai-loading menu-popup-item-disabled';
							break;
						case ButtonState.AI_SUCCESS:
							result.className = 'menu-popup-item-accept menu-popup-item-disabled';
							break;
						case ButtonState.DISABLED:
							result.className = 'menu-popup-no-icon menu-popup-item-disabled';
							break;
						case ButtonState.LOCKED:
							result.className = 'menu-popup-item-locked';
							break;
						default:
							result.className = '';
					}
				}
				if (main_core.Type.isObject(item.action)) {
					if (item.action.type === 'redirect') {
						result.href = item.action.value;
					} else if (item.action.type === 'jsCode') {
						result.onclick = item.action.value;
					} else {
						result.onclick = () => {
							void this.onMenuItemClick(item);
						};
					}
				}
				return result;
			}
		}], [{
			key: "showMenu",
			value: function showMenu(vueComponent, menuItems, menuOptions) {
				const menu = new ButtonMenu(vueComponent, menuItems, menuOptions);
				menu.show();
			}
		}]);
	}(Menu$1);
	function _applyMenuItems() {
		const items = this.getMenuItems();
		if (!items) {
			return;
		}
		const emptyClassItems = items.filter(item => item.className === '');
		if (emptyClassItems.length === items.length) {
			return;
		}
		items.forEach(item => {
			if (item.className === '') {
				// eslint-disable-next-line no-param-reassign
				item.className = 'menu-popup-empty-icon';
			}
		});
	}

	const Button = ui_vue3.BitrixVue.cloneComponent(BaseButton, {
		props: {
			type: {
				type: String,
				required: false,
				default: ButtonType.SECONDARY
			},
			iconName: {
				type: String,
				required: false,
				default: ''
			},
			size: {
				type: String,
				required: false,
				default: 'extra_small'
			},
			menuItems: {
				type: Object,
				required: false,
				default: null
			}
		},
		data() {
			return {
				timerSecondsRemaining: 0,
				currentState: this.state,
				hintText: main_core.Type.isStringFilled(this.tooltip) ? this.tooltip : ''
			};
		},
		computed: {
			itemTypeToButtonColorDict() {
				return {
					[ButtonType.PRIMARY]: ui_buttons.Button.Color.PRIMARY,
					[ButtonType.SECONDARY]: ui_buttons.Button.Color.LIGHT_BORDER,
					[ButtonType.LIGHT]: ui_buttons.Button.Color.LIGHT,
					[ButtonType.ICON]: ui_buttons.Button.Color.LINK,
					[ButtonType.AI]: ui_buttons.Button.Color.AI
				};
			},
			buttonContainerRef() {
				return this.$refs.buttonContainer;
			},
			containerClasses() {
				return [this.$attrs.class, {
					'--has-ai-icon': this.iconName?.toLowerCase() === 'ai',
					'--has-icon-only': this.type === ButtonType.ICON
				}];
			}
		},
		methods: {
			getButtonOptions() {
				const upperCaseIconName = main_core.Type.isString(this.iconName) ? this.iconName.toUpperCase() : '';
				const upperCaseButtonSize = main_core.Type.isString(this.size) ? this.size.toUpperCase() : 'extra_small';
				const btnColor = this.itemTypeToButtonColorDict[this.type] || ui_buttons.Button.Color.LIGHT_BORDER;
				const titleText = this.type === ButtonType.ICON ? '' : this.title;
				return {
					id: this.id,
					round: true,
					dependOnTheme: false,
					size: ui_buttons.Button.Size[upperCaseButtonSize],
					text: titleText,
					color: btnColor,
					state: this.itemStateToButtonStateDict[this.currentState],
					icon: ui_buttons.Button.Icon[upperCaseIconName],
					props: main_core.Type.isPlainObject(this.props) ? this.props : {}
				};
			},
			getUiButton() {
				return this.uiButton;
			},
			disableWithTimer(sec) {
				this.setButtonState(ButtonState.DISABLED);
				const btn = this.getUiButton();
				let remainingSeconds = sec;
				btn.setText(this.formatSeconds(remainingSeconds));
				const timer = setInterval(() => {
					if (remainingSeconds < 1) {
						clearInterval(timer);
						btn.setText(this.title);
						this.setButtonState(ButtonState.DEFAULT);
						return;
					}
					remainingSeconds--;
					btn.setText(this.formatSeconds(remainingSeconds));
				}, 1000);
			},
			formatSeconds(sec) {
				const minutes = Math.floor(sec / 60);
				const seconds = sec % 60;
				const formatMinutes = this.formatNumber(minutes);
				const formatSeconds = this.formatNumber(seconds);
				return `${formatMinutes}:${formatSeconds}`;
			},
			formatNumber(num) {
				return num < 10 ? `0${num}` : num;
			},
			setButtonState(state) {
				this.parentSetButtonState(state);
				this.getUiButton()?.setState(this.itemStateToButtonStateDict[this.currentState] ?? null);
			},
			createSplitButton() {
				const menuItems = Object.keys(this.menuItems).map(key => this.menuItems[key]);
				const options = this.getButtonOptions();
				const showMenu = () => {
					ButtonMenu.showMenu(this, menuItems, {
						id: `split-button-menu-${this.id}`,
						className: 'crm-timeline__split-button-menu',
						width: 250,
						angle: true,
						cacheable: false,
						offsetLeft: 13,
						bindElement: this.$el.querySelector('.ui-btn-menu')
					});
				};
				options.menuButton = {
					onclick: (element, event) => {
						event.stopPropagation();
						showMenu();
					}
				};
				if (options.state === ui_buttons.ButtonState.DISABLED) {
					options.mainButton = {
						onclick: (element, event) => {
							event.stopPropagation();
							showMenu();
						}
					};
				}
				return new ui_buttons.SplitButton(options);
			},
			renderButton() {
				if (!this.buttonContainerRef) {
					return;
				}
				this.buttonContainerRef.innerHTML = '';
				const button = this.menuItems ? this.createSplitButton() : new ui_buttons.Button(this.getButtonOptions());
				button.renderTo(this.buttonContainerRef);
				this.uiButton = button;
			},
			setTooltip(tooltip) {
				this.hintText = tooltip;
			},
			showTooltip() {
				if (this.hintText === '') {
					return;
				}
				BX.UI.Hint.show(this.$el, this.hintText, true);
			},
			hideTooltip() {
				if (this.hintText === '') {
					return;
				}
				BX.UI.Hint.hide(this.$el);
			},
			isInViewport() {
				const rect = this.$el.getBoundingClientRect();
				return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
			},
			isPropEqual(propName, value) {
				return this.getButtonOptions().props[propName] === value;
			}
		},
		watch: {
			state(newValue) {
				this.setButtonState(newValue);
			},
			tooltip(newValue) {
				this.hintText = main_core.Type.isStringFilled(newValue) ? main_core.Text.encode(newValue) : '';
			}
		},
		mounted() {
			this.renderButton();
		},
		updated() {
			this.renderButton();
		},
		template: `
		<div
			:class="containerClasses"
			ref="buttonContainer"
			@click="executeAction"
			@mouseover="showTooltip"
			@mouseleave="hideTooltip"
		>
		</div>
	`
	});

	const AdditionalButtonIcon = Object.freeze({
		NOTE: 'note',
		SCRIPT: 'script',
		PRINT: 'print',
		DOTS: 'dots'
	});
	const AdditionalButtonColor = Object.freeze({
		DEFAULT: 'default',
		PRIMARY: 'primary'
	});
	const AdditionalButton = ui_vue3.BitrixVue.cloneComponent(BaseButton, {
		props: {
			iconName: {
				type: String,
				required: false,
				default: '',
				validator(value) {
					return Object.values(AdditionalButtonIcon).indexOf(value) > -1;
				}
			},
			color: {
				type: String,
				required: false,
				default: AdditionalButtonColor.DEFAULT,
				validator(value) {
					return Object.values(AdditionalButtonColor).indexOf(value) > -1;
				}
			}
		},
		computed: {
			className() {
				return ['crm-timeline__card_add-button', {
					[`--icon-${this.iconName}`]: this.iconName,
					[`--color-${this.color}`]: this.color,
					[`--state-${this.currentState}`]: this.currentState
				}];
			},
			ButtonState() {
				return ButtonState;
			},
			loaderHtml() {
				const loader = new main_loader.Loader({
					mode: 'inline',
					size: 20
				});
				loader.show();
				return loader.layout.outerHTML;
			}
		},
		template: `
		<transition name="crm-timeline__card_add-button-fade" mode="out-in">
			<div
				v-if="currentState === ButtonState.LOADING"
				v-html="loaderHtml"
				class="crm-timeline__card_add-button"
			></div>
			<div
				v-else
				:title="title"
				@click="executeAction"
				:class="className">
			</div>
		</transition>
	`
	});

	const Buttons = {
		components: {
			Button
		},
		props: {
			items: {
				type: Array,
				required: false,
				default: () => []
			}
		},
		methods: {
			getButtonById(buttonId) {
				const buttons = this.$refs.buttons;
				return this.items.reduce((found, button, index) => {
					if (found) {
						return found;
					}
					if (button.id === buttonId) {
						return buttons[index];
					}
					return null;
				}, null);
			}
		},
		template: `
			<div class="crm-timeline__card-action_buttons">
				<Button class="crm-timeline__card-action-btn" v-for="item in items" v-bind="item" ref="buttons" />
			</div>
		`
	};

	const DEFAULT_MENU_WIDTH = 250;

	// @vue/component
	const Menu = {
		components: {
			AdditionalButton
		},
		props: {
			buttons: Array,
			// buttons that didn't fit into footer
			items: Object,
			// real menu items
			sections: {
				type: Array,
				default: () => []
			}
		},
		inject: ['isReadOnly'],
		computed: {
			isMenuFilled() {
				const menuItems = this.menuItems;
				return menuItems.length > 0;
			},
			itemsArray() {
				if (!this.items) {
					return [];
				}
				return Object.values(this.items).filter(item => item.state !== 'hidden' && item.scope !== 'mobile' && (!this.isReadOnly || !item.hideIfReadonly)).sort((a, b) => a.sort - b.sort);
			},
			menuItems() {
				let result = this.buttons;
				if (this.buttons.length && this.itemsArray.length) {
					result.push({
						delimiter: true
					});
				}
				result = [...result, ...this.itemsArray];
				return result;
			},
			buttonProps() {
				return {
					color: AdditionalButtonColor.DEFAULT,
					icon: AdditionalButtonIcon.DOTS
				};
			}
		},
		beforeUnmount() {
			this.menuInstance?.destroy();
			this.menuInstance = null;
		},
		methods: {
			showMenu() {
				if (this.menuInstance?.isShown()) {
					this.menuInstance.destroy();
					this.menuInstance = null;
					return;
				}
				this.menuInstance?.destroy();
				const bindElement = this.$el;
				this.menuInstance = SystemMenu.showMenu(this, {
					items: this.menuItems,
					sections: this.sections ?? []
				}, {
					className: 'crm-timeline__card_more-menu',
					bindElement,
					width: DEFAULT_MENU_WIDTH,
					angle: false,
					cacheable: false,
					autoHideHandler: event => !bindElement.contains(event.target)
				}, actionData => {
					const action = new Action(actionData);
					void action.execute(this);
				});
			}
		},
		// language=Vue
		template: `
		<div 
			v-if="isMenuFilled" 
			class="crm-timeline__card-action_menu-item" 
			@click="showMenu"
		>
			<AdditionalButton iconName="dots" color="default"></AdditionalButton>
		</div>
	`
	};

	const Footer = {
		components: {
			Buttons,
			Menu,
			Button,
			AdditionalButton
		},
		props: {
			buttons: Object,
			menu: Object,
			additionalButtons: {
				type: Object,
				required: false,
				default: () => ({})
			},
			maxBaseButtonsCount: {
				type: Number,
				required: false,
				default: 3
			}
		},
		inject: ['isReadOnly'],
		computed: {
			containerClassname() {
				return ['crm-timeline__card-action', {
					'--no-margin-top': this.baseButtons.length < 1
				}];
			},
			baseButtons() {
				return this.visibleAndSortedButtons.slice(0, this.maxBaseButtonsCount);
			},
			moreButtons() {
				return this.visibleAndSortedButtons.slice(this.maxBaseButtonsCount);
			},
			visibleAndSortedButtons() {
				return this.visibleButtons.sort(this.buttonsSorter);
			},
			visibleAndSortedAdditionalButtons() {
				return this.visibleAdditionalButtons.sort(this.buttonsSorter);
			},
			visibleButtons() {
				if (!main_core.Type.isPlainObject(this.buttons)) {
					return [];
				}
				return this.buttons ? Object.keys(this.buttons).map(id => ({
					id,
					...this.buttons[id]
				})).filter(this.visibleButtonsFilter) : [];
			},
			visibleAdditionalButtons() {
				return this.additionalButtonsArray ? Object.values(this.additionalButtonsArray).filter(this.visibleButtonsFilter) : [];
			},
			additionalButtonsArray() {
				return Object.entries(this.additionalButtons).map(([id, button]) => {
					return {
						id,
						type: ButtonType.ICON,
						...button
					};
				});
			},
			hasMenu() {
				return this.moreButtons.length || main_core.Type.isPlainObject(this.menu) && Object.keys(this.menu).length;
			}
		},
		methods: {
			visibleButtonsFilter(buttonItem) {
				return buttonItem.state !== ButtonState.HIDDEN && buttonItem.scope !== ButtonScope.MOBILE && (!this.isReadOnly || !buttonItem.hideIfReadonly);
			},
			buttonsSorter(buttonA, buttonB) {
				return buttonA?.sort - buttonB?.sort;
			},
			getButtonById(buttonId) {
				if (this.$refs.buttons) {
					const foundButton = this.$refs.buttons.getButtonById(buttonId);
					if (foundButton) {
						return foundButton;
					}
				}
				if (this.$refs.additionalButtons) {
					return this.visibleAndSortedAdditionalButtons.reduce((found, button, index) => {
						if (found) {
							return found;
						}
						if (button.id === buttonId) {
							return buttons[index];
						}
						return null;
					}, null);
				}
				return null;
			},
			getMenu() {
				if (this.$refs.menu) {
					return this.$refs.menu;
				}
				return null;
			}
		},
		template: `
		<div :class="containerClassname">
			<div class="crm-timeline__card-action_menu">
				<div
					v-for="button in visibleAndSortedAdditionalButtons"
					:key="button.id"
					class="crm-timeline__card-action_menu-item"
				>
					<additional-button
						v-bind="button"
					>
					</additional-button>
				</div>
				<Menu v-if="hasMenu" :buttons="moreButtons" v-bind="menu" ref="menu"/>
			</div>
			<Buttons ref="buttons" :items="baseButtons" />
		</div>
	`
	};

	const ChangeStreamButton = {
		props: {
			disableIfReadonly: Boolean,
			type: String,
			title: String,
			action: Object
		},
		data() {
			return {
				isReadonlyMode: false,
				isComplete: false
			};
		},
		inject: ['isReadOnly'],
		mounted() {
			this.isReadonlyMode = this.isReadOnly;
		},
		computed: {
			isShowPinButton() {
				return this.type === 'pin' && !this.isReadonlyMode;
			},
			isShowUnpinButton() {
				return this.type === 'unpin' && !this.isReadonlyMode;
			}
		},
		methods: {
			executeAction() {
				if (!this.action) {
					return;
				}
				this.isComplete = true;
				const action = new Action(this.action);
				action.execute(this).then(() => {}).catch(() => {
					this.isComplete = false;
				});
			},
			onClick() {
				if (this.action) {
					const action = new Action(this.action);
					action.execute(this);
				}
			},
			setDisabled(disabled) {
				if (!this.isReadonly && !disabled) {
					this.isReadonlyMode = false;
				}
				if (disabled) {
					this.isReadonlyMode = true;
				}
			},
			markCheckboxUnchecked() {
				this.isComplete = false;
			}
		},
		template: `
		<div class="crm-timeline__card-top_controller">
			<input
				v-if="type === 'complete'"
				@click="executeAction"
				type="checkbox"
				:disabled="isReadonlyMode"
				:checked="isComplete"
				class="crm-timeline__card-top_checkbox"
			/>
			<div
				v-else-if="isShowPinButton"
				:title="title"
				@click="executeAction"
				class="crm-timeline__card-top_icon --pin"
			></div>
			<div
				v-else-if="isShowUnpinButton"
				:title="title"
				@click="executeAction"
				class="crm-timeline__card-top_icon --unpin"
			></div>
		</div>
	`
	};

	const ColorSelector = {
		directives: {
			hint: ui_vue3_directives_hint.hint
		},
		props: {
			valuesList: {
				type: Object,
				required: true
			},
			selectedValueId: {
				type: String,
				default: 'default'
			},
			readOnlyMode: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		data() {
			return {
				currentValueId: this.selectedValueId
			};
		},
		methods: {
			getValue() {
				return this.currentValueId;
			},
			setValue(value) {
				this.currentValueId = value;
				if (this.itemSelector) {
					this.itemSelector.setValue(value);
				}
			},
			onItemSelectorValueChange({
				data
			}) {
				const valueId = data.value;
				if (this.currentValueId !== valueId) {
					this.currentValueId = valueId;
					this.emitEvent('ColorSelector:Change', {
						colorId: valueId
					});
				}
			},
			emitEvent(eventName, actionParams) {
				const action = new Action({
					type: 'jsEvent',
					value: eventName,
					actionParams
				});
				action.execute(this);
			}
		},
		mounted() {
			void this.$nextTick(() => {
				this.itemSelector = new crm_field_colorSelector.ColorSelector({
					target: this.$refs.itemSelectorRef,
					colorList: this.valuesList,
					selectedColorId: this.currentValueId,
					readOnlyMode: this.readOnlyMode
				});
				if (!this.readOnlyMode) {
					main_core_events.EventEmitter.subscribe(this.itemSelector, crm_field_colorSelector.ColorSelectorEvents.EVENT_COLORSELECTOR_VALUE_CHANGE, this.onItemSelectorValueChange);
				}
			});
		},
		computed: {
			hint() {
				if (this.readOnlyMode) {
					return null;
				}
				return {
					text: this.$Bitrix.Loc.getMessage('CRM_ACTIVITY_TODO_COLOR_SELECTOR_HINT'),
					popupOptions: {
						angle: {
							offset: 30,
							position: 'top'
						},
						offsetTop: 2
					}
				};
			}
		},
		template: `
		<div class="crm-activity__todo-editor-v2_color-selector">
			<div ref="itemSelectorRef" v-hint="hint"></div>
		</div>
	`
	};

	const FormatDate = {
		name: 'FormatDate',
		props: {
			timestamp: {
				type: Number,
				required: true,
				default: 0
			},
			datePlaceholder: {
				type: String,
				required: false,
				default: ''
			},
			useShortTimeFormat: {
				type: Boolean,
				required: false,
				default: false
			},
			class: {
				type: [Array, Object, String],
				required: false,
				default: ''
			}
		},
		computed: {
			formattedDate() {
				if (!this.timestamp) {
					return this.datePlaceholder;
				}
				const converter = crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.timestamp).toUserTime();
				return this.useShortTimeFormat ? converter.toTimeString() : converter.toDatetimeString({
					delimiter: ', '
				});
			}
		},
		template: `
		<div :class="$props.class">{{ formattedDate }}</div>
	`
	};

	const Hint = {
		data() {
			return {
				isMouseOnHintArea: false,
				hintPopup: null
			};
		},
		props: {
			icon: {
				type: String,
				required: false,
				default: ''
			},
			textBlocks: {
				type: Array,
				required: false,
				default: []
			}
		},
		computed: {
			hintContentIcon() {
				if (this.icon === '') {
					return null;
				}
				const iconElement = main_core.Dom.create('i');
				return main_core.Dom.create('div', {
					attrs: {
						classname: this.hintContentIconClassname
					},
					children: [iconElement]
				});
			},
			hintContentText() {
				return main_core.Dom.create('div', {
					attrs: {
						classname: 'crm-timeline__hint_popup-content-text'
					},
					children: this.hintContentTextBlocks
				});
			},
			hintContentTextBlocks() {
				return this.textBlocks.map(this.getContentBlockNode);
			},
			hintContentIconClassname() {
				const baseClassname = 'crm-timeline__hint_popup-content-icon';
				return `${baseClassname} --${this.icon}`;
			},
			hintIconClassname() {
				return ['ui-hint', 'crm-timeline__header-hint', {
					'--active': this.hintPopup
				}];
			},
			hasContent() {
				return this.textBlocks.length > 0;
			}
		},
		methods: {
			getHintContent() {
				return main_core.Dom.create('div', {
					attrs: {
						classname: 'crm-timeline__hint_popup-content'
					},
					style: {
						display: 'flex'
					},
					children: [this.hintContentIcon, this.hintContentText]
				});
			},
			getPopupOptions() {
				return {
					darkMode: true,
					autoHide: false,
					content: this.getHintContent(),
					maxWidth: 400,
					bindOptions: {
						position: 'top'
					},
					animation: 'fading-slide'
				};
			},
			getPopupPosition() {
				const hintElem = this.$refs.hint;
				const defaultAngleLeftOffset = main_popup.Popup.getOption('angleLeftOffset');
				const {
					width: hintWidth,
					left: hintLeftOffset,
					top: hintTopOffset
				} = main_core.Dom.getPosition(hintElem);
				const {
					width: popupWidth
				} = main_core.Dom.getPosition(this.hintPopup?.getPopupContainer());
				return {
					left: hintLeftOffset + defaultAngleLeftOffset - (popupWidth - hintWidth) / 2,
					top: hintTopOffset + 15
				};
			},
			getPopupAngleOffset(popupContainer) {
				const angleWidth = 33;
				const {
					width: popupWidth
				} = main_core.Dom.getPosition(popupContainer);
				return (popupWidth - angleWidth) / 2;
			},
			onMouseEnterToPopup() {
				this.isMouseOnHintArea = true;
			},
			onHintAreaMouseLeave() {
				this.isMouseOnHintArea = false;
				setTimeout(() => {
					if (!this.isMouseOnHintArea) {
						this.hideHintPopup();
					}
				}, 400);
			},
			onMouseEnterToHint() {
				this.isMouseOnHintArea = true;
				this.showHintPopupWithDebounce();
			},
			showHintPopup() {
				if (!this.isMouseOnHintArea || this.hintPopup && this.hintPopup.isShown()) {
					return;
				}
				this.hintPopup = ui_vue3.markRaw(new main_popup.Popup(this.getPopupOptions()));
				const popupContainer = this.hintPopup.getPopupContainer();
				main_core.Event.bind(popupContainer, 'mouseenter', this.onMouseEnterToPopup);
				main_core.Event.bind(popupContainer, 'mouseleave', this.onHintAreaMouseLeave);
				this.hintPopup.show();
				this.hintPopup.setBindElement(this.getPopupPosition());
				this.hintPopup.setAngle(false);
				this.hintPopup.setAngle({
					offset: this.getPopupAngleOffset(popupContainer, this.$refs.hint)
				});
				this.hintPopup.adjustPosition();
				this.hintPopup.show();
			},
			showHintPopupWithDebounce() {
				main_core.Runtime.debounce(this.showHintPopup, 300, this)();
			},
			hideHintPopup() {
				if (!this.hintPopup) {
					return;
				}
				this.hintPopup.close();
				const popupContainer = this.hintPopup.getPopupContainer();
				main_core.Event.unbind(popupContainer, 'mouseenter', this.onMouseEnterToPopup);
				main_core.Event.unbind(popupContainer, 'mouseleave', this.onHintAreaMouseLeave);
				this.hintPopup.destroy();
				this.hintPopup = null;
			},
			hideHintPopupWithDebounce() {
				return main_core.Runtime.debounce(this.hideHintPopup, 300, this);
			},
			getContentBlockNode(contentBlock) {
				if (contentBlock.type === 'text') {
					return this.getTextNode(contentBlock.options);
				} else if (contentBlock.type === 'link') {
					return this.getLinkNode(contentBlock.options);
				}
				return null;
			},
			getTextNode(textOptions = {}) {
				return main_core.Dom.create('span', {
					text: textOptions.text
				});
			},
			getLinkNode(linkOptions = {}) {
				const link = main_core.Dom.create('span', {
					text: linkOptions.text
				});
				main_core.Dom.addClass(link, 'crm-timeline__hint_popup-content-link');
				link.onclick = () => {
					this.executeAction(linkOptions.action);
				};
				return link;
			},
			executeAction(actionObj) {
				if (actionObj) {
					const action = new Action(actionObj);
					action.execute(this);
				}
			}
		},
		template: `
		<span
			ref="hint"
			@click.stop.prevent
			@mouseenter="onMouseEnterToHint"
			@mouseleave="onHintAreaMouseLeave"
			v-if="hasContent"
			:class="hintIconClassname"
		>
			<span class="ui-hint-icon" />
		</span>
	`
	};

	let TagType = /*#__PURE__*/babelHelpers.createClass(function TagType() {
		babelHelpers.classCallCheck(this, TagType);
	});
	babelHelpers.defineProperty(TagType, "PRIMARY", 'primary');
	babelHelpers.defineProperty(TagType, "SECONDARY", 'secondary');
	babelHelpers.defineProperty(TagType, "SUCCESS", 'success');
	babelHelpers.defineProperty(TagType, "WARNING", 'warning');
	babelHelpers.defineProperty(TagType, "FAILURE", 'failure');
	babelHelpers.defineProperty(TagType, "LAVENDER", 'lavender');

	const Tag = {
		props: {
			title: {
				type: String,
				required: false,
				default: ''
			},
			hint: {
				type: String,
				required: false,
				default: ''
			},
			action: {
				type: Object,
				required: false,
				default: null
			},
			type: {
				type: String,
				required: false,
				default: TagType.SECONDARY
			},
			state: String
		},
		computed: {
			className() {
				return {
					'crm-timeline__card-status': true,
					'--clickable': Boolean(this.action),
					'--hint': Boolean(this.hint)
				};
			},
			tagTypeToLabelColorDict() {
				return {
					[TagType.PRIMARY]: ui_label.Label.Color.LIGHT_BLUE,
					[TagType.SECONDARY]: ui_label.Label.Color.LIGHT,
					[TagType.LAVENDER]: ui_label.Label.Color.LAVENDER,
					[TagType.SUCCESS]: ui_label.Label.Color.LIGHT_GREEN,
					[TagType.WARNING]: ui_label.Label.Color.LIGHT_YELLOW,
					[TagType.FAILURE]: ui_label.Label.Color.LIGHT_RED
				};
			},
			tagContainerRef() {
				return this.$refs.tag;
			}
		},
		methods: {
			getLabelColorFromTagType(tagType) {
				const lowerCaseTagType = tagType ? tagType.toLowerCase() : '';
				const labelColor = this.tagTypeToLabelColorDict[lowerCaseTagType];
				return labelColor || ui_label.Label.Color.LIGHT;
			},
			// eslint-disable-next-line consistent-return
			renderTag(tagOptions) {
				if (!tagOptions || !this.tagContainerRef) {
					return null;
				}
				const {
					title,
					type
				} = tagOptions;
				const uppercaseTitle = title && main_core.Type.isString(title) ? title.toUpperCase() : '';
				const label = new ui_label.Label({
					text: uppercaseTitle,
					color: this.getLabelColorFromTagType(type),
					fill: true
				});
				main_core.Dom.clean(this.tagContainerRef);
				main_core.Dom.append(label.render(), this.tagContainerRef);
			},
			executeAction() {
				if (!this.action) {
					return;
				}
				const action = new Action(this.action);
				action.execute(this);
			},
			showTooltip() {
				if (this.hint === '') {
					return;
				}
				main_core.Runtime.debounce(() => {
					BX.UI.Hint.show(this.$el, this.hint, true);
				}, 50, this)();
			},
			hideTooltip() {
				if (this.hint === '') {
					return;
				}
				BX.UI.Hint.hide(this.$el);
			}
		},
		mounted() {
			this.renderTag({
				title: this.title,
				type: this.type
			});
		},
		updated() {
			this.renderTag({
				title: this.title,
				type: this.type
			});
		},
		template: `
		<div
			ref="tag"
			:class="className"
			@mouseover="showTooltip"
			@mouseleave="hideTooltip"
			@click="executeAction"
			data-hint-interactivity
		></div>
	`
	};

	const Title = {
		props: {
			title: String,
			action: Object
		},
		inject: ['isLogMessage'],
		computed: {
			className() {
				return ['crm-timeline__card-title', {
					'--light': this.isLogMessage,
					'--action': !!this.action
				}];
			},
			href() {
				if (!this.action) {
					return null;
				}
				const action = new Action(this.action);
				if (action.isRedirect()) {
					return action.getValue();
				}
				return null;
			}
		},
		methods: {
			executeAction() {
				if (!this.action) {
					return;
				}
				const action = new Action(this.action);
				action.execute(this);
			}
		},
		template: `
		<a
			v-if="href"
			:href="href"
			:class="className"
			tabindex="0"
			:title="title"
		>
			{{title}}
		</a>
		<span
			v-else
			@click="executeAction"
			:class="className"
			tabindex="0"
			:title="title"
		>
			{{title}}
		</span>`
	};

	const User = {
		props: {
			title: String,
			detailUrl: String,
			imageUrl: String
		},
		inject: ['isLogMessage'],
		computed: {
			styles() {
				if (!this.imageUrl) {
					return {};
				}
				return {
					backgroundImage: "url('" + encodeURI(main_core.Text.encode(this.imageUrl)) + "')",
					backgroundSize: '21px'
				};
			},
			className() {
				return ['ui-icon', 'ui-icon-common-user', 'crm-timeline__user-icon', {
					'--muted': this.isLogMessage
				}];
			}
		},
		// language=Vue
		template: `<a :class="className" :href="detailUrl"
					target="_blank" :title="title"><i :style="styles"></i></a>`
	};

	const Header = {
		components: {
			ColorSelector,
			ChangeStreamButton,
			Title,
			Tag,
			User,
			FormatDate,
			Hint
		},
		props: {
			title: String,
			titleAction: Object,
			date: Number,
			datePlaceholder: String,
			useShortTimeFormat: Boolean,
			changeStreamButton: Object | null,
			tags: Object,
			user: Object,
			infoHelper: Object,
			colorSettings: {
				type: Object,
				required: false,
				default: null
			}
		},
		inject: ['isReadOnly', 'isLogMessage'],
		computed: {
			visibleTags() {
				if (!main_core.Type.isPlainObject(this.tags)) {
					return [];
				}
				return this.tags ? Object.values(this.tags).filter(element => this.isVisibleTagFilter(element)) : [];
			},
			visibleAndAscSortedTags() {
				const tagsCopy = main_core.Runtime.clone(this.visibleTags);
				return tagsCopy.sort(this.tagsAscSorter);
			},
			isShowDate() {
				return this.date || this.datePlaceholder;
			},
			className() {
				return ['crm-timeline__card-top', {
					'--log-message': this.isReadOnly || this.isLogMessage
				}];
			}
		},
		methods: {
			isVisibleTagFilter(tag) {
				return tag.state !== 'hidden' && tag.scope !== 'mobile' && (!this.isReadOnly || !tag.hideIfReadonly);
			},
			tagsAscSorter(tagA, tagB) {
				return tagA.sort - tagB.sort;
			},
			getChangeStreamButton() {
				return this.$refs.changeStreamButton;
			}
		},
		created() {
			this.$watch('colorSettings', newColorSettings => {
				this.$refs.colorSelector.setValue(newColorSettings.selectedValueId);
			}, {
				deep: true
			});
		},
		template: `
		<div :class="className">
			<div class="crm-timeline__card-top_info">
				<div class="crm-timeline__card-top_info_left">
					<ChangeStreamButton 
						v-if="changeStreamButton" 
						v-bind="changeStreamButton" 
						ref="changeStreamButton"
					/>
					<Title :title="title" :action="titleAction"></Title>
					<Hint v-if="infoHelper" v-bind="infoHelper"></Hint>
				</div>
				<div ref="tags" class="crm-timeline__card-top_info_right">
					<Tag
						v-for="(tag, index) in visibleAndAscSortedTags"
						:key="index"
						v-bind="tag"
					/>
					<FormatDate
						v-if="isShowDate"
						:timestamp="date"
						:use-short-time-format="useShortTimeFormat"
						:date-placeholder="datePlaceholder"
						class="crm-timeline__card-time"
					/>
				</div>
			</div>
			<div class="crm-timeline__card-top_components-container">
				<ColorSelector
					v-if="colorSettings"
					ref="colorSelector"
					:valuesList="colorSettings.valuesList"
					:selectedValueId="colorSettings.selectedValueId"
					:readOnlyMode="colorSettings.readOnlyMode"
				/>
				<User v-bind="user"></User>
			</div>
		</div>
	`
	};

	let IconBackgroundColor = /*#__PURE__*/babelHelpers.createClass(function IconBackgroundColor() {
		babelHelpers.classCallCheck(this, IconBackgroundColor);
	});
	babelHelpers.defineProperty(IconBackgroundColor, "PRIMARY", 'primary');
	babelHelpers.defineProperty(IconBackgroundColor, "PRIMARY_ALT", 'primary_alt');
	babelHelpers.defineProperty(IconBackgroundColor, "FAILURE", 'failure');

	const Icon = {
		props: {
			code: {
				type: String,
				required: false,
				default: 'none'
			},
			counterType: {
				type: String,
				required: false,
				default: ''
			},
			backgroundColorToken: {
				type: String,
				required: false,
				default: IconBackgroundColor.PRIMARY
			},
			backgroundUri: String,
			backgroundColor: {
				type: String,
				required: false,
				default: null
			}
		},
		inject: ['isLogMessage'],
		computed: {
			className() {
				return {
					'crm-timeline__card_icon': true,
					[`--bg-${this.backgroundColorToken}`]: Boolean(this.backgroundColorToken),
					[`--code-${this.code}`]: Boolean(this.code) && !this.backgroundUri,
					'--custom-bg': Boolean(this.backgroundUri),
					'--muted': this.isLogMessage
				};
			},
			counterNodeContainer() {
				return this.$refs.counter;
			},
			styles() {
				if (!this.backgroundUri) {
					return {};
				}
				return {
					backgroundImage: `url('${encodeURI(main_core.Text.encode(this.backgroundUri))}')`
				};
			},
			iconStyle() {
				if (main_core.Type.isStringFilled(this.backgroundColor)) {
					return {
						'--crm-timeline-card-icon-background': main_core.Text.encode(this.backgroundColor)
					};
				}
				return {};
			}
		},
		methods: {
			renderCounter() {
				if (!this.counterType) {
					return;
				}
				main_core.Dom.clean(this.counterNodeContainer);
				const counter = new ui_cnt.Counter({
					value: 1,
					border: true,
					color: ui_cnt.Counter.Color[this.counterType.toUpperCase()]
				});
				counter.renderTo(this.counterNodeContainer);
			}
		},
		mounted() {
			this.renderCounter();
		},
		watch: {
			counterType(newCounterType)
			// update if counter state changed
			{
				void this.$nextTick(() => {
					this.renderCounter();
				});
			}
		},
		template: `
		<div :class="className" :style="iconStyle">
			<i :style="styles"></i>
			<div ref="counter" v-show="!!counterType" class="crm-timeline__card_icon_counter"></div>
		</div>
	`
	};

	const MarketPanel = {
		props: {
			text: String,
			detailsText: String,
			detailsTextAction: Object
		},
		computed: {
			needShowDetailsText() {
				return main_core.Type.isStringFilled(this.detailsText);
			},
			href() {
				if (!this.detailsTextAction) {
					return null;
				}
				const action = new Action(this.detailsTextAction);
				if (action.isRedirect()) {
					return action.getValue();
				}
				return null;
			}
		},
		methods: {
			executeAction() {
				if (this.detailsTextAction) {
					const action = new Action(this.detailsTextAction);
					action.execute(this);
				}
			}
		},
		template: `
		<div class="crm-timeline__card-bottom">
		<div class="crm-timeline__card-market">
			<div class="crm-timeline__card-market_container">
				<span class="crm-timeline__card-market_logo"></span>
				<span class="crm-timeline__card-market_text">{{ text }}</span>
				<a
					v-if="href && needShowDetailsText"
					:href="href"
					class="crm-timeline__card-market_more"
				>
					{{detailsText}}
				</a>
				<span
					v-if="!href && needShowDetailsText"
					@click="executeAction"
					class="crm-timeline__card-market_more"
				>
				{{detailsText}}
				</span>
			</div>
			<div class="crm-timeline__card-market_cross"><i></i></div>
		</div>
		</div>
	`
	};

	const UserPick = {
		template: `
		<div class="ui-icon ui-icon-common-user crm-timeline__card-top_user-icon">
			<i></i>
		</div>
	`
	};

	const Item$1 = {
		components: {
			Icon,
			Header,
			Body,
			Footer,
			MarketPanel,
			UserPick
		},
		props: {
			initialLayout: Object,
			id: String,
			useShortTimeFormat: Boolean,
			isLogMessage: Boolean,
			isReadOnly: Boolean,
			currentUser: Object | null,
			onAction: Function,
			initialColor: {
				type: Object,
				required: false,
				default: null
			},
			streamType: {
				type: Number,
				required: false,
				default: StreamType.history
			}
		},
		data() {
			return {
				layout: this.initialLayout,
				color: this.initialColor,
				isFaded: false
			};
		},
		provide() {
			return {
				isLogMessage: Boolean(this.initialLayout?.isLogMessage),
				isReadOnly: this.isReadOnly,
				currentUser: this.currentUser
			};
		},
		created() {
			this.$Bitrix.eventEmitter.subscribe('crm:timeline:item:action', this.onActionEvent);
		},
		beforeUnmount() {
			this.$Bitrix.eventEmitter.unsubscribe('crm:timeline:item:action', this.onActionEvent);
		},
		methods: {
			onActionEvent(event) {
				const eventData = event.getData();
				this.onAction(main_core.Runtime.clone(eventData));
			},
			setLayout(newLayout) {
				this.layout = newLayout;
				this.isFaded = false;
				this.$Bitrix.eventEmitter.emit('layout:updated');
			},
			setColor(newColor) {
				this.color = newColor;
			},
			setFaded(faded) {
				this.isFaded = faded;
			},
			showLoader(showLoader) {
				if (showLoader) {
					this.setFaded(true);
					if (!this.loader) {
						this.loader = new main_loader.Loader();
					}
					this.loader.show(this.$el.parentNode);
				} else {
					if (this.loader) {
						this.loader.hide();
					}
					this.setFaded(false);
				}
			},
			getContentBlockById(blockId) {
				if (!this.$refs.body) {
					return null;
				}
				return this.$refs.body.getContentBlockById(blockId);
			},
			getLogo() {
				if (!this.$refs.body) {
					return null;
				}
				return this.$refs.body.getLogo();
			},
			getHeaderChangeStreamButton() {
				if (!this.$refs.header) {
					return null;
				}
				return this.$refs.header.getChangeStreamButton();
			},
			getFooterButtonById(buttonId) {
				if (!this.$refs.footer) {
					return null;
				}
				return this.$refs.footer.getButtonById(buttonId);
			},
			getFooterMenu() {
				if (!this.$refs.footer) {
					return null;
				}
				return this.$refs.footer.getMenu();
			},
			highlightContentBlockById(blockId, isHighlighted) {
				if (!isHighlighted) {
					this.isFaded = false;
				}
				const block = this.getContentBlockById(blockId);
				if (!block) {
					return;
				}
				if (isHighlighted) {
					this.isFaded = true;
					main_core.Dom.addClass(block.$el, '--highlighted');
				} else {
					this.isFaded = false;
					main_core.Dom.removeClass(block.$el, '--highlighted');
				}
			}
		},
		computed: {
			timelineCardClassname() {
				return {
					'crm-timeline__card': true,
					'crm-timeline__card-scope': true,
					'--stream-type-history': this.streamType === StreamType.history,
					'--stream-type-scheduled': this.streamType === StreamType.scheduled,
					'--stream-type-pinned': this.streamType === StreamType.pinned,
					'--log-message': this.isLogMessage
				};
			},
			timelineCardStyle() {
				if (main_core.Type.isPlainObject(this.color) && this.streamType === StreamType.scheduled) {
					return {
						'--crm-timeline__card-color-background': main_core.Text.encode(this.color.itemBackground)
					};
				}
				return {};
			}
		},
		template: `
			<div class="crm-timeline__card-wrapper">
			<div class="crm-timeline__card_icon_container">
				<Icon v-bind="layout.icon"></Icon>
			</div>
			<div 
				:data-id="id" 
				ref="timelineCard" 
				:class="timelineCardClassname"
				:style="timelineCardStyle"
			>
				<div class="crm-timeline__card_fade" v-if="isFaded"></div>
				<Header 
					v-if="layout.header"
					v-bind="layout.header"
					:use-short-time-format="useShortTimeFormat"
					ref="header"
				/>
				<Body v-if="layout.body" v-bind="layout.body" ref="body"></Body>
				<Footer v-if="layout.footer" v-bind="layout.footer" ref="footer"></Footer>
				<MarketPanel v-if="layout.marketPanel" v-bind="layout.marketPanel"></MarketPanel>
			</div>
		</div>
	`
	};

	function _classPrivateFieldInitSpec$c(e, t, a) { _checkPrivateRedeclaration$x(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$x(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet$c(s, a, r) { return s.set(_assertClassBrand$x(s, a), r), r; }
	function _assertClassBrand$x(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _id = /*#__PURE__*/new WeakMap();
	let ControllerManager = /*#__PURE__*/function () {
		function ControllerManager(id) {
			babelHelpers.classCallCheck(this, ControllerManager);
			_classPrivateFieldInitSpec$c(this, _id, null);
			_classPrivateFieldSet$c(_id, this, id);
		}
		return babelHelpers.createClass(ControllerManager, [{
			key: "getItemControllers",
			value: function getItemControllers(item) {
				const foundControllers = [];
				for (const controller of ControllerManager.getRegisteredControllers()) {
					if (controller.isItemSupported(item)) {
						const controllerInstance = new controller();
						controllerInstance.onInitialize(item);
						foundControllers.push(controllerInstance);
					}
				}
				return foundControllers;
			}
		}], [{
			key: "getInstance",
			value: function getInstance(timelineId) {
				if (!_assertClassBrand$x(ControllerManager, this, _instances)._.hasOwnProperty(timelineId)) {
					_assertClassBrand$x(ControllerManager, this, _instances)._[timelineId] = new ControllerManager(timelineId);
				}
				return _assertClassBrand$x(ControllerManager, this, _instances)._[timelineId];
			}
		}, {
			key: "registerController",
			value: function registerController(controller) {
				_assertClassBrand$x(ControllerManager, this, _availableControllers)._.push(controller);
			}
		}, {
			key: "getRegisteredControllers",
			value: function getRegisteredControllers() {
				return _assertClassBrand$x(ControllerManager, this, _availableControllers)._;
			}
		}]);
	}();
	var _instances = {
		_: {}
	};
	var _availableControllers = {
		_: []
	};

	let Base = /*#__PURE__*/function () {
		function Base() {
			babelHelpers.classCallCheck(this, Base);
		}
		return babelHelpers.createClass(Base, [{
			key: "getDeleteActionMethod",
			value: function getDeleteActionMethod() {
				return '';
			}
		}, {
			key: "getDeleteActionCfg",
			value: function getDeleteActionCfg(recordId, ownerTypeId, ownerId) {
				return {
					data: {
						recordId,
						ownerTypeId,
						ownerId
					}
				};
			}
		}, {
			key: "onInitialize",
			value: function onInitialize(item) {}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {}
		}, {
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(item) {
				return {};
			}
		}, {
			key: "onAfterItemRefreshLayout",
			value: function onAfterItemRefreshLayout(item) {}
		}, {
			key: "onAfterItemLayout",
			value: function onAfterItemLayout(item, options) {}

			/**
			 * Will be executed before item node deleted from DOM
			 * @param item
			 */
		}, {
			key: "onBeforeItemClearLayout",
			value: function onBeforeItemClearLayout(item) {}

			/**
			 * Delete timeline record action
			 *
			 * @param recordId Timeline record ID
			 * @param ownerTypeId Owner type ID
			 * @param ownerId Owner type ID
			 * @param animationCallbacks
			 *
			 * @returns {Promise}
			 *
			 * @protected
			 */
		}, {
			key: "runDeleteAction",
			value: function runDeleteAction(recordId, ownerTypeId, ownerId, animationCallbacks) {
				if (animationCallbacks.onStart) {
					animationCallbacks.onStart();
				}
				return main_core.ajax.runAction(this.getDeleteActionMethod(), this.getDeleteActionCfg(recordId, ownerTypeId, ownerId)).then(() => {
					if (animationCallbacks.onStop) {
						animationCallbacks.onStop();
					}
					return true;
				}, response => {
					ui_notification.UI.Notification.Center.notify({
						content: response.errors[0].message,
						autoHideDelay: 5000
					});
					if (animationCallbacks.onStop) {
						animationCallbacks.onStop();
					}
					return true;
				});
			}

			/**
			 * Schedule TODO activity action
			 *
			 * @param activityId Activity ID
			 * @param scheduleDate Date to use in editor
			 * @param description Default description to use in editor
			 *
			 * @protected
			 */
		}, {
			key: "runScheduleAction",
			value: function runScheduleAction(activityId, scheduleDate, description = '') {
				const menuBar = BX.Crm?.Timeline?.MenuBar?.getDefault();
				if (menuBar) {
					menuBar.setActiveItemById('todo');
					menuBar.scrollIntoView();
					setTimeout(() => {
						const todoEditor = menuBar.getItemById('todo');
						todoEditor.focus();
						todoEditor.setParentActivityId(activityId);
						todoEditor.setDeadLine(scheduleDate);
						if (main_core.Type.isStringFilled(description)) {
							todoEditor.setDescription(description);
							todoEditor.focus();
						}
					}, 250);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return false;
			}
		}]);
	}();

	let Item = /*#__PURE__*/function () {
		function Item() {
			babelHelpers.classCallCheck(this, Item);
			this._id = '';
			this._isTerminated = false;
			this._wrapper = null;
		}
		return babelHelpers.createClass(Item, [{
			key: "getId",
			value: function getId() {
				return this._id;
			}
		}, {
			key: "_setId",
			value: function _setId(id) {
				this._id = BX.type.isNotEmptyString(id) ? id : BX.util.getRandomString(4);
			}

			/**
			 * @abstract
			 */
		}, {
			key: "setData",
			value: function setData(data) {
				throw new Error('Item.setData() must be overridden');
			}

			/**
			 * @abstract
			 */
		}, {
			key: "layout",
			value: function layout(options) {
				throw new Error('Item.layout() must be overridden');
			}
		}, {
			key: "refreshLayout",
			value: function refreshLayout() {
				const anchor = this._wrapper.previousSibling;
				this.clearLayout();
				this.layout({
					anchor: anchor
				});
			}
		}, {
			key: "clearLayout",
			value: function clearLayout() {
				main_core.Dom.remove(this._wrapper);
				this._wrapper = undefined;
			}
		}, {
			key: "destroy",
			value: function destroy() {
				this.clearLayout();
			}
		}, {
			key: "getWrapper",
			value: function getWrapper() {
				return this._wrapper;
			}
		}, {
			key: "setWrapper",
			value: function setWrapper(wrapper) {
				this._wrapper = wrapper;
			}
		}, {
			key: "addWrapperClass",
			value: function addWrapperClass(className, timeout) {
				if (!this._wrapper) {
					return;
				}
				main_core.Dom.addClass(this._wrapper, className);
				if (main_core.Type.isNumber(timeout) && timeout >= 0) {
					window.setTimeout(this.removeWrapperClass.bind(this, className), timeout);
				}
			}
		}, {
			key: "removeWrapperClass",
			value: function removeWrapperClass(className, timeout) {
				if (!this._wrapper) {
					return;
				}
				main_core.Dom.removeClass(this._wrapper, className);
				if (main_core.Type.isNumber(timeout) && timeout >= 0) {
					window.setTimeout(this.addWrapperClass.bind(this, className), timeout);
				}
			}
		}, {
			key: "isTerminated",
			value: function isTerminated() {
				return this._isTerminated;
			}
		}, {
			key: "markAsTerminated",
			value: function markAsTerminated(terminated) {
				terminated = !!terminated;
				if (this._isTerminated === terminated) {
					return;
				}
				this._isTerminated = terminated;
				if (!this._wrapper) {
					return;
				}
				if (terminated) {
					main_core.Dom.addClass(this._wrapper, 'crm-entity-stream-section-last');
				} else {
					main_core.Dom.removeClass(this._wrapper, 'crm-entity-stream-section-last');
				}
			}
		}, {
			key: "getAssociatedEntityTypeId",
			value: function getAssociatedEntityTypeId() {
				return null;
			}
		}, {
			key: "getAssociatedEntityId",
			value: function getAssociatedEntityId() {
				return null;
			}
		}]);
	}();

	function _classPrivateFieldInitSpec$b(e, t, a) { _checkPrivateRedeclaration$w(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$w(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$b(s, a) { return s.get(_assertClassBrand$w(s, a)); }
	function _classPrivateFieldSet$b(s, a, r) { return s.set(_assertClassBrand$w(s, a), r), r; }
	function _assertClassBrand$w(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _layout$1 = /*#__PURE__*/new WeakMap();
	let Layout = /*#__PURE__*/function () {
		function Layout(layout) {
			babelHelpers.classCallCheck(this, Layout);
			_classPrivateFieldInitSpec$b(this, _layout$1, null);
			_classPrivateFieldSet$b(_layout$1, this, layout);
		}
		return babelHelpers.createClass(Layout, [{
			key: "asPlainObject",
			value: function asPlainObject() {
				return main_core.Runtime.clone(_classPrivateFieldGet$b(_layout$1, this));
			}
		}, {
			key: "getFooterMenuItemById",
			value: function getFooterMenuItemById(id) {
				const items = _classPrivateFieldGet$b(_layout$1, this)?.footer?.menu?.items ?? {};
				return items.hasOwnProperty(id) ? items.id : null;
			}
		}, {
			key: "addFooterMenuItem",
			value: function addFooterMenuItem(menuItem) {
				_classPrivateFieldGet$b(_layout$1, this).footer = _classPrivateFieldGet$b(_layout$1, this).footer || {};
				_classPrivateFieldGet$b(_layout$1, this).footer.menu = _classPrivateFieldGet$b(_layout$1, this).footer.menu || {};
				_classPrivateFieldGet$b(_layout$1, this).footer.menu.items = _classPrivateFieldGet$b(_layout$1, this).footer.menu.items || {};
				_classPrivateFieldGet$b(_layout$1, this).footer.menu.items[menuItem.id] = menuItem;
			}
		}]);
	}();

	function _callSuper$A(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$A() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$A() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$A = function () { return !!t; })(); }
	function _superPropGet(t, o, e, r) { var p = babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype ), o, e); return "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
	function _classPrivateMethodInitSpec$v(e, a) { _checkPrivateRedeclaration$v(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$a(e, t, a) { _checkPrivateRedeclaration$v(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$v(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$a(s, a) { return s.get(_assertClassBrand$v(s, a)); }
	function _classPrivateFieldSet$a(s, a, r) { return s.set(_assertClassBrand$v(s, a), r), r; }
	function _assertClassBrand$v(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _container = /*#__PURE__*/new WeakMap();
	var _itemClassName = /*#__PURE__*/new WeakMap();
	var _type = /*#__PURE__*/new WeakMap();
	var _dataPayload = /*#__PURE__*/new WeakMap();
	var _timelineId = /*#__PURE__*/new WeakMap();
	var _timestamp = /*#__PURE__*/new WeakMap();
	var _sort = /*#__PURE__*/new WeakMap();
	var _useShortTimeFormat = /*#__PURE__*/new WeakMap();
	var _isReadOnly = /*#__PURE__*/new WeakMap();
	var _currentUser = /*#__PURE__*/new WeakMap();
	var _ownerTypeId = /*#__PURE__*/new WeakMap();
	var _ownerId = /*#__PURE__*/new WeakMap();
	var _controllers = /*#__PURE__*/new WeakMap();
	var _layoutComponent = /*#__PURE__*/new WeakMap();
	var _layoutApp = /*#__PURE__*/new WeakMap();
	var _layout = /*#__PURE__*/new WeakMap();
	var _streamType = /*#__PURE__*/new WeakMap();
	var _color = /*#__PURE__*/new WeakMap();
	var _ConfigurableItem_brand = /*#__PURE__*/new WeakSet();
	let ConfigurableItem = /*#__PURE__*/function (_TimelineItem) {
		function ConfigurableItem(...args) {
			var _this;
			babelHelpers.classCallCheck(this, ConfigurableItem);
			_this = _callSuper$A(this, ConfigurableItem, [...args]);
			_classPrivateMethodInitSpec$v(_this, _ConfigurableItem_brand);
			_classPrivateFieldInitSpec$a(_this, _container, null);
			_classPrivateFieldInitSpec$a(_this, _itemClassName, null);
			_classPrivateFieldInitSpec$a(_this, _type, null);
			_classPrivateFieldInitSpec$a(_this, _dataPayload, null);
			_classPrivateFieldInitSpec$a(_this, _timelineId, null);
			_classPrivateFieldInitSpec$a(_this, _timestamp, null);
			_classPrivateFieldInitSpec$a(_this, _sort, null);
			_classPrivateFieldInitSpec$a(_this, _useShortTimeFormat, false);
			_classPrivateFieldInitSpec$a(_this, _isReadOnly, false);
			_classPrivateFieldInitSpec$a(_this, _currentUser, null);
			_classPrivateFieldInitSpec$a(_this, _ownerTypeId, null);
			_classPrivateFieldInitSpec$a(_this, _ownerId, null);
			_classPrivateFieldInitSpec$a(_this, _controllers, null);
			_classPrivateFieldInitSpec$a(_this, _layoutComponent, null);
			_classPrivateFieldInitSpec$a(_this, _layoutApp, null);
			_classPrivateFieldInitSpec$a(_this, _layout, null);
			_classPrivateFieldInitSpec$a(_this, _streamType, null);
			_classPrivateFieldInitSpec$a(_this, _color, null);
			return _this;
		}
		babelHelpers.inherits(ConfigurableItem, _TimelineItem);
		return babelHelpers.createClass(ConfigurableItem, [{
			key: "initialize",
			value: function initialize(id, settings) {
				this._setId(id);
				settings = settings || {};
				_classPrivateFieldSet$a(_timelineId, this, settings.timelineId || '');
				this.setContainer(settings.container || null);
				_classPrivateFieldSet$a(_itemClassName, this, settings.itemClassName || '');
				if (main_core.Type.isPlainObject(settings.data)) {
					this.setData(settings.data);
					_classPrivateFieldSet$a(_useShortTimeFormat, this, settings.useShortTimeFormat || false);
					_classPrivateFieldSet$a(_isReadOnly, this, settings.isReadOnly || false);
					_classPrivateFieldSet$a(_currentUser, this, settings.currentUser || null);
					_classPrivateFieldSet$a(_ownerTypeId, this, settings.ownerTypeId);
					_classPrivateFieldSet$a(_ownerId, this, settings.ownerId);
					_classPrivateFieldSet$a(_streamType, this, settings.streamType || crm_timeline_item.StreamType.history);
				}
				_classPrivateFieldSet$a(_controllers, this, ControllerManager.getInstance(_classPrivateFieldGet$a(_timelineId, this)).getItemControllers(this));
			}
		}, {
			key: "setData",
			value: function setData(data) {
				_classPrivateFieldSet$a(_type, this, data.type || null);
				_classPrivateFieldSet$a(_timestamp, this, data.timestamp || null);
				_classPrivateFieldSet$a(_sort, this, data.sort || []);
				_classPrivateFieldSet$a(_layout, this, new Layout(data.layout || {}));
				_classPrivateFieldSet$a(_dataPayload, this, data.payload || {});
				_classPrivateFieldSet$a(_color, this, data.color ?? null);
			}
		}, {
			key: "getColor",
			value: function getColor() {
				return _classPrivateFieldGet$a(_color, this);
			}
		}, {
			key: "getLayout",
			value: function getLayout() {
				return _classPrivateFieldGet$a(_layout, this);
			}
		}, {
			key: "getType",
			value: function getType() {
				return _classPrivateFieldGet$a(_type, this);
			}
		}, {
			key: "getDataPayload",
			value: function getDataPayload() {
				return _classPrivateFieldGet$a(_dataPayload, this);
			}
		}, {
			key: "layout",
			value: function layout(options) {
				this.setWrapper(main_core.Dom.create({
					tag: 'div',
					attrs: {
						className: _classPrivateFieldGet$a(_itemClassName, this)
					}
				}));
				this.initLayoutApp(options);
			}
		}, {
			key: "initWrapper",
			value: function initWrapper() {
				this.setWrapper(main_core.Dom.create({
					tag: 'div',
					attrs: {
						className: _classPrivateFieldGet$a(_itemClassName, this)
					}
				}));
				return this._wrapper;
			}
		}, {
			key: "initLayoutApp",
			value: function initLayoutApp(options) {
				_assertClassBrand$v(_ConfigurableItem_brand, this, _initLayoutApp).call(this);
				if (this.needBindToContainer(options)) {
					const bindTo = this.getBindToNode(options);
					if (bindTo && !_assertClassBrand$v(_ConfigurableItem_brand, this, _useAnchorNextSibling).call(this, options)) {
						main_core.Dom.insertBefore(this.getWrapper(), bindTo);
					} else if (bindTo && bindTo.nextSibling) {
						main_core.Dom.insertBefore(this.getWrapper(), bindTo.nextSibling);
					} else {
						main_core.Dom.append(this.getWrapper(), _classPrivateFieldGet$a(_container, this));
					}
				}
				for (const controller of _classPrivateFieldGet$a(_controllers, this)) {
					controller.onAfterItemLayout(this, options);
				}
			}
		}, {
			key: "needBindToContainer",
			value: function needBindToContainer(options) {
				if (main_core.Type.isPlainObject(options)) {
					return BX.prop.getBoolean(options, 'add', true);
				}
				return true;
			}
		}, {
			key: "getBindToNode",
			value: function getBindToNode(options) {
				if (main_core.Type.isPlainObject(options)) {
					return main_core.Type.isElementNode(options['anchor']) ? options['anchor'] : null;
				}
				return null;
			}
		}, {
			key: "refreshLayout",
			value: function refreshLayout() {
				// try to refresh layout via vue reactivity, if possible:
				if (_classPrivateFieldGet$a(_layoutComponent, this)) {
					_classPrivateFieldGet$a(_layoutComponent, this).setColor(this.getColor());
					_classPrivateFieldGet$a(_layoutComponent, this).setLayout(this.getLayout().asPlainObject());
					for (const controller of _classPrivateFieldGet$a(_controllers, this)) {
						controller.onAfterItemRefreshLayout(this);
					}
					_classPrivateFieldGet$a(_layoutComponent, this).showLoader(false);
				} else {
					_superPropGet(ConfigurableItem, "refreshLayout", this)([]);
				}
			}
		}, {
			key: "getLayoutComponent",
			value: function getLayoutComponent() {
				return _classPrivateFieldGet$a(_layoutComponent, this);
			}
		}, {
			key: "forceRefreshLayout",
			value: function forceRefreshLayout() {
				const bindTo = this.getWrapper()?.nextSibling;
				this.clearLayout();
				this.layout({
					anchor: bindTo,
					useAnchorNextSibling: false
				});
			}
		}, {
			key: "getLayoutContentBlockById",
			value: function getLayoutContentBlockById(id) {
				return _classPrivateFieldGet$a(_layoutComponent, this)?.getContentBlockById(id);
			}
		}, {
			key: "getLogo",
			value: function getLogo() {
				return _classPrivateFieldGet$a(_layoutComponent, this)?.getLogo();
			}
		}, {
			key: "getLayoutFooterButtonById",
			value: function getLayoutFooterButtonById(id) {
				return _classPrivateFieldGet$a(_layoutComponent, this)?.getFooterButtonById(id);
			}
		}, {
			key: "getLayoutFooterMenu",
			value: function getLayoutFooterMenu() {
				return _classPrivateFieldGet$a(_layoutComponent, this)?.getFooterMenu();
			}
		}, {
			key: "getLayoutHeaderChangeStreamButton",
			value: function getLayoutHeaderChangeStreamButton() {
				return _classPrivateFieldGet$a(_layoutComponent, this)?.getHeaderChangeStreamButton();
			}
		}, {
			key: "highlightContentBlockById",
			value: function highlightContentBlockById(blockId, isHighlighted) {
				_classPrivateFieldGet$a(_layoutComponent, this)?.highlightContentBlockById(blockId, isHighlighted);
			}
		}, {
			key: "clearLayout",
			value: function clearLayout() {
				for (const controller of _classPrivateFieldGet$a(_controllers, this)) {
					controller.onBeforeItemClearLayout(this);
				}
				_classPrivateFieldGet$a(_layoutApp, this).unmount();
				_classPrivateFieldSet$a(_layoutApp, this, null);
				_classPrivateFieldSet$a(_layoutComponent, this, null);
				_superPropGet(ConfigurableItem, "clearLayout", this)([]);
			}
		}, {
			key: "getCreatedDate",
			value: function getCreatedDate() {
				const timestamp = _classPrivateFieldGet$a(_timestamp, this) ? _classPrivateFieldGet$a(_timestamp, this) : Date.now() / 1000;
				return BX.prop.extractDate(crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(timestamp).toUserTime().getValue());
			}
		}, {
			key: "getSourceId",
			value: function getSourceId() {
				let id = this.getId();
				if (!main_core.Type.isInteger(id)) {
					// id is like ACTIVITY_12
					id = main_core.Text.toInteger(id.replace(/^\D+/g, ''));
				}
				return id;
			}
		}, {
			key: "setContainer",
			value: function setContainer(container) {
				_classPrivateFieldSet$a(_container, this, container);
			}
		}, {
			key: "getContainer",
			value: function getContainer() {
				return _classPrivateFieldGet$a(_container, this);
			}
		}, {
			key: "getDeadline",
			value: function getDeadline() {
				if (!_classPrivateFieldGet$a(_timestamp, this)) {
					return null;
				}
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(_classPrivateFieldGet$a(_timestamp, this)).toUserTime().getValue();
			}
		}, {
			key: "getSort",
			value: function getSort() {
				return _classPrivateFieldGet$a(_sort, this);
			}
		}, {
			key: "isReadOnly",
			value: function isReadOnly() {
				return _classPrivateFieldGet$a(_isReadOnly, this);
			}
		}, {
			key: "getCurrentUser",
			value: function getCurrentUser() {
				return _classPrivateFieldGet$a(_currentUser, this);
			}
		}, {
			key: "getOwnerTypeId",
			value: function getOwnerTypeId() {
				return _classPrivateFieldGet$a(_ownerTypeId, this);
			}
		}, {
			key: "clone",
			value: function clone() {
				return ConfigurableItem.create(this.getId(), {
					timelineId: _classPrivateFieldGet$a(_timelineId, this),
					container: this.getContainer(),
					itemClassName: _classPrivateFieldGet$a(_itemClassName, this),
					useShortTimeFormat: _classPrivateFieldGet$a(_useShortTimeFormat, this),
					isReadOnly: _classPrivateFieldGet$a(_isReadOnly, this),
					currentUser: _classPrivateFieldGet$a(_currentUser, this),
					streamType: _classPrivateFieldGet$a(_streamType, this),
					data: {
						type: _classPrivateFieldGet$a(_type, this),
						timestamp: _classPrivateFieldGet$a(_timestamp, this),
						sort: _classPrivateFieldGet$a(_sort, this),
						layout: this.getLayout().asPlainObject()
					}
				});
			}
		}, {
			key: "reloadFromServer",
			value: function reloadFromServer(forceRefreshLayout = false) {
				const data = {
					ownerTypeId: _classPrivateFieldGet$a(_ownerTypeId, this),
					ownerId: _classPrivateFieldGet$a(_ownerId, this)
				};
				if (_classPrivateFieldGet$a(_streamType, this) === crm_timeline_item.StreamType.history || _classPrivateFieldGet$a(_streamType, this) === crm_timeline_item.StreamType.pinned) {
					data.historyIds = [this.getId()];
				} else if (_classPrivateFieldGet$a(_streamType, this) === crm_timeline_item.StreamType.scheduled) {
					data.activityIds = [this.getId()];
				} else {
					throw new Error('Wrong stream type');
				}
				return main_core.ajax.runAction('crm.timeline.item.load', {
					data
				}).then(response => {
					Object.values(response.data).forEach(item => {
						if (item.id === this.getId()) {
							this.setData(item);
							if (forceRefreshLayout) {
								this.forceRefreshLayout();
							} else {
								this.refreshLayout();
							}
						}
					});
					return true;
				}).catch(err => {
					console.error(err);
					return true;
				});
			}
		}], [{
			key: "create",
			value: function create(id, settings) {
				const self = new ConfigurableItem();
				self.initialize(id, settings);
				return self;
			}
		}]);
	}(Item);
	function _useAnchorNextSibling(options) {
		if (main_core.Type.isPlainObject(options)) {
			return main_core.Type.isBoolean(options['useAnchorNextSibling']) ? options['useAnchorNextSibling'] : true;
		}
		return true;
	}
	function _initLayoutApp() {
		if (!_classPrivateFieldGet$a(_layoutApp, this)) {
			_classPrivateFieldSet$a(_layoutApp, this, ui_vue3.BitrixVue.createApp(Item$1, _assertClassBrand$v(_ConfigurableItem_brand, this, _getLayoutAppProps).call(this)));
			const contentBlockComponents = _assertClassBrand$v(_ConfigurableItem_brand, this, _getContentBlockComponents).call(this);
			for (const componentName in contentBlockComponents) {
				_classPrivateFieldGet$a(_layoutApp, this).component(componentName, contentBlockComponents[componentName]);
			}
			_classPrivateFieldSet$a(_layoutComponent, this, _classPrivateFieldGet$a(_layoutApp, this).mount(this.getWrapper()));
		}
	}
	function _getLayoutAppProps() {
		return {
			initialLayout: this.getLayout().asPlainObject(),
			initialColor: _classPrivateFieldGet$a(_streamType, this) === crm_timeline_item.StreamType.scheduled ? _classPrivateFieldGet$a(_color, this) : null,
			id: String(this.getId()),
			useShortTimeFormat: _classPrivateFieldGet$a(_useShortTimeFormat, this),
			isReadOnly: this.isReadOnly(),
			currentUser: this.getCurrentUser(),
			streamType: _classPrivateFieldGet$a(_streamType, this),
			onAction: _assertClassBrand$v(_ConfigurableItem_brand, this, _onLayoutAppAction).bind(this)
		};
	}
	function _onLayoutAppAction(eventData) {
		for (const controller of _classPrivateFieldGet$a(_controllers, this)) {
			controller.onItemAction(this, eventData);
		}
	}
	function _getContentBlockComponents() {
		let components = {};
		for (const controller of _classPrivateFieldGet$a(_controllers, this)) {
			components = Object.assign(components, controller.getContentBlockComponents(this));
		}
		return components;
	}

	function _callSuper$z(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$z() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$z() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$z = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$u(e, a) { _checkPrivateRedeclaration$u(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$9(e, t, a) { _checkPrivateRedeclaration$u(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$u(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet$9(s, a, r) { return s.set(_assertClassBrand$u(s, a), r), r; }
	function _classPrivateFieldGet$9(s, a) { return s.get(_assertClassBrand$u(s, a)); }
	function _assertClassBrand$u(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	const ALLOWED_MOVE_TO_ITEM_TYPES = ['Activity:Call', 'Activity:Email', 'Activity:OpenLine'];
	var _moveToSelectorDialog = /*#__PURE__*/new WeakMap();
	var _Activity_brand = /*#__PURE__*/new WeakSet();
	let Activity = /*#__PURE__*/function (_Base) {
		function Activity(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Activity);
			_this = _callSuper$z(this, Activity, [...args]);
			_classPrivateMethodInitSpec$u(_this, _Activity_brand);
			_classPrivateFieldInitSpec$9(_this, _moveToSelectorDialog, null);
			return _this;
		}
		babelHelpers.inherits(Activity, _Base);
		return babelHelpers.createClass(Activity, [{
			key: "getDeleteActionMethod",
			value: function getDeleteActionMethod() {
				return 'crm.timeline.activity.delete';
			}
		}, {
			key: "getMoveActionMethod",
			value: function getMoveActionMethod() {
				return 'crm.activity.binding.move';
			}
		}, {
			key: "getDeleteTagActionMethod",
			value: function getDeleteTagActionMethod() {
				return 'crm.timeline.activity.deleteTag';
			}
		}, {
			key: "getDeleteActionCfg",
			value: function getDeleteActionCfg(recordId, ownerTypeId, ownerId) {
				return {
					data: {
						activityId: recordId,
						ownerTypeId,
						ownerId
					}
				};
			}
		}, {
			key: "runDeleteTagAction",
			value: function runDeleteTagAction(recordId, ownerTypeId, ownerId) {
				const deleteTagActionCfg = {
					data: {
						activityId: recordId,
						ownerTypeId,
						ownerId
					}
				};
				return main_core.ajax.runAction(this.getDeleteTagActionMethod(), deleteTagActionCfg).then(() => {
					return true;
				}, response => {
					ui_notification.UI.Notification.Center.notify({
						content: response.errors[0].message,
						autoHideDelay: 5000
					});
					return true;
				});
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Activity:Edit' && actionData && actionData.activityId) {
					_assertClassBrand$u(_Activity_brand, this, _editActivity).call(this, actionData.activityId);
				}
				if (action === 'Activity:MoveTo' && main_core.Type.isPlainObject(actionData)) {
					_assertClassBrand$u(_Activity_brand, this, _showMoveToSelectorDialog).call(this, item, actionData);
				}
				if (action === 'Activity:View' && actionData && actionData.activityId) {
					_assertClassBrand$u(_Activity_brand, this, _viewActivity$1).call(this, actionData.activityId);
				}
				if (action === 'Activity:Delete' && actionData && actionData.activityId) {
					const confirmationText = actionData.confirmationText ?? '';
					if (confirmationText) {
						ui_dialogs_messagebox.MessageBox.show({
							message: main_core.Text.encode(confirmationText),
							modal: true,
							buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_NO,
							onYes: () => {
								return this.runDeleteAction(actionData.activityId, actionData.ownerTypeId, actionData.ownerId, animationCallbacks);
							},
							onNo: messageBox => {
								messageBox.close();
							}
						});
					} else {
						this.runDeleteAction(actionData.activityId, actionData.ownerTypeId, actionData.ownerId);
					}
				}
				if (action === 'Activity:DeleteTag' && actionData && actionData.activityId) {
					const confirmationText = actionData.confirmationText ?? '';
					if (confirmationText) {
						ui_dialogs_messagebox.MessageBox.show({
							message: main_core.Text.encode(confirmationText),
							modal: true,
							buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_CANCEL,
							yesCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_TODO_DELETE_TAG_CONFIRM_YES_CAPTION'),
							onYes: () => {
								return this.runDeleteTagAction(actionData.activityId, actionData.ownerTypeId, actionData.ownerId);
							},
							onCancel: messageBox => {
								messageBox.close();
							}
						});
					} else {
						this.runDeleteTagAction(actionData.activityId, actionData.ownerTypeId, actionData.ownerId);
					}
				}
				if (action === 'Activity:FilterRelated' && main_core.Type.isPlainObject(actionData)) {
					_assertClassBrand$u(_Activity_brand, this, _filterRelated).call(this, actionData);
				}
			}
		}, {
			key: "onBeforeItemClearLayout",
			value: function onBeforeItemClearLayout(item) {
				_classPrivateFieldGet$9(_moveToSelectorDialog, this)?.hide();
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				const itemType = item.getType();
				return itemType.indexOf('Activity:') === 0 // for items with type started from `Activity:`
				|| itemType === 'TodoCreated' // TodoCreated can contain link to activity
	;
			}
		}]);
	}(Base);
	function _viewActivity$1(id) {
		const editor = _assertClassBrand$u(_Activity_brand, this, _getActivityEditor$1).call(this);
		if (editor && id) {
			editor.viewActivity(id);
		}
	}
	function _editActivity(id) {
		const editor = _assertClassBrand$u(_Activity_brand, this, _getActivityEditor$1).call(this);
		if (editor && id) {
			editor.editActivity(id);
		}
	}
	function _showMoveToSelectorDialog(itemElement, actionData) {
		if (!ALLOWED_MOVE_TO_ITEM_TYPES.includes(itemElement.getType())) {
			// eslint-disable-next-line no-console
			console.warn('Move to action provided only for following item types:', ALLOWED_MOVE_TO_ITEM_TYPES);
			return;
		}
		const isValidParams = main_core.Type.isNumber(actionData.activityId) && main_core.Type.isNumber(actionData.ownerId) && main_core.Type.isNumber(actionData.ownerTypeId);
		if (!isValidParams) {
			throw new TypeError('Invalid actionData parameters');
		}
		const element = itemElement.getLayoutFooterMenu().$el;
		if (!main_core.Type.isDomNode(element)) {
			throw new ReferenceError('Selector dialog target element must be a DOM node');
		}
		if (!_classPrivateFieldGet$9(_moveToSelectorDialog, this)) {
			_assertClassBrand$u(_Activity_brand, this, _createSelectorDialog).call(this, element, actionData);
		}
		_classPrivateFieldGet$9(_moveToSelectorDialog, this).show();
	}
	function _getActivityEditor$1() {
		return BX.CrmActivityEditor.getDefault();
	}
	function _createSelectorDialog(dialogTargetElement, actionData) {
		let dialogEntityId = BX.CrmEntityType.resolveName(actionData.ownerTypeId);
		if (BX.CrmEntityType.isDynamicTypeByTypeId(actionData.ownerTypeId)) {
			dialogEntityId = BX.CrmEntityType.names.dynamic;
		}
		const applyButton = new ui_buttons.ApplyButton({
			useAirDesign: true,
			style: ui_buttons.AirButtonStyle.FILLED,
			size: ui_buttons.ButtonSize.MEDIUM,
			color: null,
			round: true,
			onclick: () => {
				_assertClassBrand$u(_Activity_brand, this, _runMoveAction).call(this, actionData.activityId, actionData.ownerTypeId, actionData.ownerId, targetItem);
				_classPrivateFieldGet$9(_moveToSelectorDialog, this).hide();
			}
		});
		const cancelButton = new ui_buttons.CancelButton({
			useAirDesign: true,
			style: ui_buttons.AirButtonStyle.OUTLINE,
			size: ui_buttons.ButtonSize.MEDIUM,
			round: true,
			color: null,
			onclick: () => {
				targetItem = null;
				_classPrivateFieldGet$9(_moveToSelectorDialog, this).deselectAll();
				_classPrivateFieldGet$9(_moveToSelectorDialog, this).hide();
			}
		});
		const createAndApplyButton = actionData.canAddItems ? _assertClassBrand$u(_Activity_brand, this, _getCreateAndApplyButton).call(this, actionData, dialogEntityId) : null;
		let targetItem = null;
		_classPrivateFieldSet$9(_moveToSelectorDialog, this, new ui_entitySelector.Dialog({
			targetNode: dialogTargetElement,
			enableSearch: true,
			context: `CRM-TIMELINE-MOVE-ACTIVITY-ENTITY-SELECTOR-${actionData.ownerTypeId}`,
			tagSelectorOptions: {
				textBoxWidth: '50%'
			},
			entities: [{
				id: dialogEntityId,
				dynamicLoad: true,
				dynamicSearch: true,
				options: {
					ownerId: actionData.ownerId,
					categoryId: actionData.categoryId,
					showEntityTypeNameInHeader: true,
					hideClosedItems: true,
					excludeMyCompany: true,
					entityTypeId: actionData.ownerTypeId // for 'dynamic' types
				}
			}],
			events: {
				'Item:onBeforeSelect': event => {
					const {
						item
					} = event.getData();
					if (item) {
						if (item.getId() === actionData.ownerId) {
							event.preventDefault();
							return;
						}
						targetItem = item;
						_classPrivateFieldGet$9(_moveToSelectorDialog, this).getSelectedItems().forEach(row => {
							if (row.getEntityId() === targetItem.getEntityId() && main_core.Text.toInteger(row.getId()) !== main_core.Text.toInteger(targetItem.getId())) {
								row.deselect();
							}
						});
						applyButton.setDisabled(false);
						createAndApplyButton?.setDisabled(true);
					}
				},
				'Item:onDeselect': () => {
					applyButton.setDisabled(true);
					createAndApplyButton?.setDisabled(false);
				}
			},
			footer: [applyButton.setDisabled(true).render(), cancelButton.render(), createAndApplyButton?.render()],
			footerOptions: {
				containerStyles: {
					display: 'flex',
					'justify-content': 'center',
					gap: '12px',
					background: 'white',
					height: 'auto',
					padding: '18px 0'
				}
			}
		}));
	}
	function _getCreateAndApplyButton(actionData, dialogEntityId) {
		const newItemUrl = crm_router.Router.Instance.getItemDetailUrl(actionData.ownerTypeId, 0, actionData.categoryId);
		return new ui_buttons.CreateButton({
			style: ui_buttons.AirButtonStyle.PLAIN,
			useAirDesign: true,
			size: ui_buttons.ButtonSize.MEDIUM,
			round: true,
			disabled: newItemUrl === null,
			color: null,
			onclick: () => {
				if (newItemUrl === null) {
					return;
				}
				_assertClassBrand$u(_Activity_brand, this, _openItemCreateSlider).call(this, String(newItemUrl), actionData, dialogEntityId);
			}
		});
	}
	function _openItemCreateSlider(newItemUrl, actionData, dialogEntityId) {
		let runMoveActionForNewItem = null;
		BX.Crm.Page.openSlider(String(newItemUrl), {
			events: {
				onOpen: ({
					slider
				}) => {
					runMoveActionForNewItem = _assertClassBrand$u(_Activity_brand, this, _getRunMoveActionForNewItemCallback).call(this, slider, actionData, dialogEntityId);
					BX.Crm.EntityEvent.subscribe(runMoveActionForNewItem);
				},
				onClose: () => {
					BX.Crm.EntityEvent.unsubscribe(runMoveActionForNewItem);
				}
			}
		});
	}
	function _getRunMoveActionForNewItemCallback(slider, actionData, dialogEntityId) {
		const runMoveActionForNewItem = (eventName, eventData) => {
			if (eventName !== 'onCrmEntityCreate' || eventData.entityTypeId !== actionData.ownerTypeId) {
				return;
			}
			const newItemEntityEditor = slider.getWindow().BX?.Crm?.EntityEditor?.getDefault();
			if (main_core.Type.isNil(newItemEntityEditor)) {
				return;
			}
			const isItemCreatedInCurrentSlider = newItemEntityEditor.getEntityId() === eventData.entityId;
			if (!isItemCreatedInCurrentSlider) {
				return;
			}
			const item = new ui_entitySelector.Item({
				id: eventData.entityId,
				entityId: dialogEntityId
			});
			_assertClassBrand$u(_Activity_brand, this, _runMoveAction).call(this, actionData.activityId, actionData.ownerTypeId, actionData.ownerId, item);
			_classPrivateFieldGet$9(_moveToSelectorDialog, this).hide();
			BX.Crm.EntityEvent.unsubscribe(runMoveActionForNewItem);
		};
		return runMoveActionForNewItem;
	}
	function _runMoveAction(activityId, sourceEntityTypeId, sourceEntityId, targetItem) {
		if (!targetItem) {
			throw new ReferenceError('Target item is not defined');
		}
		const targetEntityTypeId = BX.CrmEntityType.resolveId(targetItem.getEntityId());
		const targetEntityId = targetItem.getId();
		if (targetEntityTypeId <= 0 || targetEntityId <= 0) {
			throw new Error('Target entity in not valid');
		}
		if (main_core.Text.toInteger(targetEntityTypeId) !== main_core.Text.toInteger(sourceEntityTypeId)) {
			throw new Error('Source and target entity types are not equal');
		}
		const data = {
			activityId,
			sourceEntityTypeId,
			sourceEntityId,
			targetEntityTypeId,
			targetEntityId
		};
		main_core.ajax.runAction(this.getMoveActionMethod(), {
			data
		}).catch(response => {
			ui_notification.UI.Notification.Center.notify({
				content: response.errors[0].message,
				autoHideDelay: 5000
			});
			throw response;
		});
	}
	function _filterRelated(actionData) {
		if (!(main_core.Type.isNumber(actionData.activityId) && main_core.Type.isStringFilled(actionData.activityLabel) && main_core.Type.isStringFilled(actionData.filterId))) {
			return;
		}
		const filterManager = BX.Main.filterManager.getById(actionData.filterId);
		if (!filterManager) {
			return;
		}
		const filterApi = filterManager.getApi();
		const fields = {
			ACTIVITY: actionData.activityId,
			ACTIVITY_label: actionData.activityLabel
		};
		filterApi.extendFilter(fields, true);
		BX.CrmTimelineManager.getDefault().getHistory().showFilter();
	}

	function _callSuper$y(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$y() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$y() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$y = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$t(e, a) { _checkPrivateRedeclaration$t(e, a), a.add(e); }
	function _checkPrivateRedeclaration$t(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$t(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _CallScoringResult_brand = /*#__PURE__*/new WeakSet();
	let CallScoringResult = /*#__PURE__*/function (_Base) {
		function CallScoringResult(...args) {
			var _this;
			babelHelpers.classCallCheck(this, CallScoringResult);
			_this = _callSuper$y(this, CallScoringResult, [...args]);
			_classPrivateMethodInitSpec$t(_this, _CallScoringResult_brand);
			return _this;
		}
		babelHelpers.inherits(CallScoringResult, _Base);
		return babelHelpers.createClass(CallScoringResult, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'CallScoringResult:Open' && actionData) {
					_assertClassBrand$t(_CallScoringResult_brand, this, _open$2).call(this, actionData);
				}
				if (action === 'CallScoringResult:EditPrompt') {
					_assertClassBrand$t(_CallScoringResult_brand, this, _editPrompt).call(this, item, actionData);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'AI:CallScoringResult';
			}
		}]);
	}(Base);
	async function _open$2(actionData) {
		if (!main_core.Type.isInteger(actionData.activityId) || !main_core.Type.isInteger(actionData.ownerTypeId) || !main_core.Type.isInteger(actionData.ownerId)) {
			return;
		}
		await top.BX.Runtime.loadExtension('crm.ai.call');
		const callQualityDlg = new top.BX.Crm.AI.Call.CallQuality({
			activityId: actionData.activityId,
			activityCreated: actionData.activityCreated ?? null,
			ownerTypeId: actionData.ownerTypeId,
			ownerId: actionData.ownerId,
			clientDetailUrl: actionData.clientDetailUrl ?? null,
			clientFullName: actionData.clientFullName ?? null,
			userPhotoUrl: actionData.userPhotoUrl ?? null,
			jobId: actionData.jobId ?? null
		});
		callQualityDlg.open();
	}
	function _editPrompt(item, actionData) {
		if (!main_core.Type.isInteger(actionData.assessmentSettingId)) {
			return;
		}
		crm_router.Router.openSlider(`/crm/copilot-call-assessment/details/${actionData.assessmentSettingId}/`, {
			width: 700,
			cacheable: false
		});
	}

	function _callSuper$x(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$x() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$x() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$x = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$s(e, a) { _checkPrivateRedeclaration$s(e, a), a.add(e); }
	function _checkPrivateRedeclaration$s(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$s(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _CallTranscriptResult_brand = /*#__PURE__*/new WeakSet();
	let CallTranscriptResult = /*#__PURE__*/function (_Base) {
		function CallTranscriptResult(...args) {
			var _this;
			babelHelpers.classCallCheck(this, CallTranscriptResult);
			_this = _callSuper$x(this, CallTranscriptResult, [...args]);
			_classPrivateMethodInitSpec$s(_this, _CallTranscriptResult_brand);
			return _this;
		}
		babelHelpers.inherits(CallTranscriptResult, _Base);
		return babelHelpers.createClass(CallTranscriptResult, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'CallTranscriptResult:Open' && actionData) {
					_assertClassBrand$s(_CallTranscriptResult_brand, this, _open$1).call(this, actionData);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'AI:CallTranscriptResult';
			}
		}]);
	}(Base);
	async function _open$1(actionData) {
		if (!main_core.Type.isInteger(actionData.activityId) || !main_core.Type.isInteger(actionData.ownerTypeId) || !main_core.Type.isInteger(actionData.ownerId)) {
			return;
		}
		await top.BX.Runtime.loadExtension('crm.ai.call');
		const transcription = new top.BX.Crm.AI.Call.Transcription({
			activityId: actionData.activityId,
			ownerTypeId: actionData.ownerTypeId,
			ownerId: actionData.ownerId,
			languageTitle: actionData.languageTitle
		});
		transcription.open();
	}

	function _callSuper$w(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$w() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$w() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$w = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$r(e, a) { _checkPrivateRedeclaration$r(e, a), a.add(e); }
	function _checkPrivateRedeclaration$r(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$r(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _EntityFieldsFillingResult_brand = /*#__PURE__*/new WeakSet();
	let EntityFieldsFillingResult = /*#__PURE__*/function (_Base) {
		function EntityFieldsFillingResult(...args) {
			var _this;
			babelHelpers.classCallCheck(this, EntityFieldsFillingResult);
			_this = _callSuper$w(this, EntityFieldsFillingResult, [...args]);
			_classPrivateMethodInitSpec$r(_this, _EntityFieldsFillingResult_brand);
			return _this;
		}
		babelHelpers.inherits(EntityFieldsFillingResult, _Base);
		return babelHelpers.createClass(EntityFieldsFillingResult, [{
			key: "onItemAction",
			value: async function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent' || !actionData) {
					return;
				}
				switch (action) {
					case 'EntityFieldsFillingResult:OpenAiFormFill':
						_assertClassBrand$r(_EntityFieldsFillingResult_brand, this, _openAiFormFillAction).call(this, actionData);
						break;
					case 'EntityFieldsFillingResult:OpenSendFeedbackPopup':
						_assertClassBrand$r(_EntityFieldsFillingResult_brand, this, _openSendFeedbackPopup).call(this, actionData, animationCallbacks);
						break;
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'AI:EntityFieldsFillingResult' || item.getType() === 'Activity:OpenLine' || item.getType() === 'Activity:Call';
			}
		}]);
	}(Base);
	async function _openAiFormFillAction(actionData) {
		const operationStatus = await _assertClassBrand$r(_EntityFieldsFillingResult_brand, this, _fetchOperationStatus).call(this, actionData.mergeUuid);
		switch (operationStatus) {
			case 'APPLIED':
				_assertClassBrand$r(_EntityFieldsFillingResult_brand, this, _openAiDoneSlider).call(this);
				break;
			case 'CONFLICT':
				_assertClassBrand$r(_EntityFieldsFillingResult_brand, this, _openAiFormFill).call(this, actionData);
				break;
			default:
				throw new Error(`Invalid operation status: ${operationStatus}`);
		}
	}
	function _openAiFormFill(actionData) {
		const mergeUuid = parseInt(actionData.mergeUuid, 10);
		if (!main_core.Type.isInteger(mergeUuid) || mergeUuid <= 0) {
			return;
		}
		top.BX.Runtime.loadExtension('crm.ai.form-fill').then(exports$1 => {
			const {
				createAiFormFillApplicationInsideSlider
			} = exports$1;
			createAiFormFillApplicationInsideSlider({
				...actionData,
				mergeUuid
			});
		}).catch(() => {
			throw new Error('Cant load createAiFormFillApplicationInsideSlider extension');
		});
	}
	function _openAiDoneSlider() {
		top.BX.Runtime.loadExtension('crm.ai.done').then(exports$1 => {
			const {
				Done
			} = exports$1;
			new Done().start();
		}).catch(() => {
			throw new Error('Cant load crm.ai.done extension');
		});
	}
	async function _fetchOperationStatus(mergeId) {
		const response = await main_core.ajax.runAction('crm.timeline.ai.fieldsFillingStatus', {
			data: {
				mergeId
			}
		});
		if (response.status !== 'success') {
			return null;
		}
		return response?.data?.operationStatus;
	}
	function _openSendFeedbackPopup(actionData, animationCallbacks) {
		const mergeUuid = parseInt(actionData.mergeUuid, 10);
		if (!main_core.Type.isInteger(mergeUuid) || mergeUuid <= 0) {
			return;
		}
		const activityId = main_core.Text.toInteger(actionData.activityId) > 0 ? main_core.Text.toInteger(actionData.activityId) : 0;
		animationCallbacks?.onStart?.();
		main_core.Runtime.loadExtension('crm.ai.feedback').then(exports$1 => {
			const {
				showSendFeedbackPopup
			} = exports$1;

			/** @see BX.Crm.AI.Feedback.showSendFeedbackPopup */
			showSendFeedbackPopup(mergeUuid, actionData.ownerTypeId, activityId, actionData.activityDirection);
		}).catch(() => {
			console.error('Cant load showSendFeedbackPopup extension');
		}).finally(() => animationCallbacks?.onStop?.());
	}

	function _callSuper$v(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$v() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$v() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$v = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$q(e, a) { _checkPrivateRedeclaration$q(e, a), a.add(e); }
	function _checkPrivateRedeclaration$q(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$q(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _TranscriptSummaryResult_brand = /*#__PURE__*/new WeakSet();
	let TranscriptSummaryResult = /*#__PURE__*/function (_Base) {
		function TranscriptSummaryResult(...args) {
			var _this;
			babelHelpers.classCallCheck(this, TranscriptSummaryResult);
			_this = _callSuper$v(this, TranscriptSummaryResult, [...args]);
			_classPrivateMethodInitSpec$q(_this, _TranscriptSummaryResult_brand);
			return _this;
		}
		babelHelpers.inherits(TranscriptSummaryResult, _Base);
		return babelHelpers.createClass(TranscriptSummaryResult, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'TranscriptSummaryResult:Open' && actionData) {
					_assertClassBrand$q(_TranscriptSummaryResult_brand, this, _open).call(this, actionData);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'AI:TranscriptSummaryResult';
			}
		}]);
	}(Base);
	async function _open(actionData) {
		if (!main_core.Type.isInteger(actionData.activityId) || !main_core.Type.isInteger(actionData.ownerTypeId) || !main_core.Type.isInteger(actionData.ownerId)) {
			return;
		}
		await top.BX.Runtime.loadExtension('crm.ai.call');
		const summary = new top.BX.Crm.AI.Call.Summary({
			activityId: actionData.activityId,
			ownerTypeId: actionData.ownerTypeId,
			ownerId: actionData.ownerId,
			languageTitle: actionData.languageTitle,
			activityProvider: actionData.activityProvider,
			jobId: actionData.jobId
		});
		summary.open();
	}

	const ICON_COLORS = Object.freeze({
		lightGrey: 'var(--crm-timeline-avatars-stack-steps-icon-color-light-gray)',
		blue: 'var(--crm-timeline-avatars-stack-steps-icon-color-blue)',
		lightGreen: 'var(--crm-timeline-avatars-stack-steps-icon-color-light-green)'
	});
	var AvatarsStackSteps = {
		props: {
			steps: {
				type: Array,
				required: true,
				validator: value => {
					return main_core.Type.isArrayFilled(value);
				}
			},
			styles: {
				type: Object,
				required: false
			}
		},
		mounted() {
			if (this.$refs.controlWrapper) {
				this.stack = new ui_imageStackSteps.ImageStackSteps({
					steps: this.convertIconColors(this.steps)
				});
				this.stack.renderTo(this.$refs.controlWrapper);
			}
		},
		updated() {
			if (this.stack) {
				this.convertIconColors(this.steps).forEach(step => {
					this.stack.updateStep(step, step.id);
				});
			}
		},
		unmounted() {
			if (this.stack) {
				this.stack.destroy();
			}
		},
		computed: {
			getStyles() {
				const styles = {};
				if (this.styles?.minWidth) {
					styles['min-width'] = `${main_core.Text.toInteger(this.styles.minWidth)}px`;
				}
				return styles;
			}
		},
		methods: {
			convertIconColors(steps) {
				const colors = Object.keys(ICON_COLORS);
				steps.forEach(step => {
					const images = step.stack.images;
					if (main_core.Type.isArrayFilled(images)) {
						images.forEach(image => {
							if (image.type === ui_imageStackSteps.imageTypeEnum.ICON) {
								const color = image.data?.color;
								if (colors.includes(color)) {
									// eslint-disable-next-line no-param-reassign
									image.data.color = ICON_COLORS[color];
								}
							}
						});
					}
				});
				return steps;
			}
		},
		template: `
		<div class="crm-timeline__avatars-stack-steps" ref="controlWrapper" :style="getStyles"></div>
	`
	};

	const TaskUserStatus = Object.freeze({
		WAITING: 0,
		YES: 1,
		NO: 2,
		OK: 3,
		CANCEL: 4
	});

	function _callSuper$u(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$u() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$u() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$u = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$p(e, a) { _checkPrivateRedeclaration$p(e, a), a.add(e); }
	function _checkPrivateRedeclaration$p(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$p(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Bizproc_brand = /*#__PURE__*/new WeakSet();
	let Bizproc = /*#__PURE__*/function (_Base) {
		function Bizproc(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Bizproc);
			_this = _callSuper$u(this, Bizproc, [...args]);
			_classPrivateMethodInitSpec$p(_this, _Bizproc_brand);
			return _this;
		}
		babelHelpers.inherits(Bizproc, _Base);
		return babelHelpers.createClass(Bizproc, [{
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(item) {
				return {
					AvatarsStackSteps
				};
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				const actionHandlers = {
					'Bizproc:Task:Open': () => _assertClassBrand$p(_Bizproc_brand, this, _openWorkflowTaskSlider).call(this, actionData),
					'Bizproc:Task:Do': () => _assertClassBrand$p(_Bizproc_brand, this, _handleTaskAction).call(this, actionData, item),
					'Bizproc:Workflow:Timeline:Open': () => _assertClassBrand$p(_Bizproc_brand, this, _openTimeline).call(this, actionData),
					'Bizproc:Workflow:Open': () => _assertClassBrand$p(_Bizproc_brand, this, _openWorkflowSlider).call(this, actionData),
					'Bizproc:Workflow:Terminate': () => _assertClassBrand$p(_Bizproc_brand, this, _terminateWorkflow).call(this, actionData),
					'Bizproc:Workflow:Log': () => _assertClassBrand$p(_Bizproc_brand, this, _openWorkflowLogSlider).call(this, actionData)
				};
				const handler = actionHandlers[action];
				if (handler) {
					handler();
				}
			}
		}, {
			key: "onAfterItemLayout",
			value: function onAfterItemLayout(item, options) {
				main_core_events.EventEmitter.emit('BX.Crm.Timeline.Items.Bizproc:onAfterItemLayout', {
					target: item.getWrapper(),
					id: item.getId(),
					type: item.getType(),
					options
				});
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				const supportedItemTypes = ['BizprocWorkflowStarted', 'BizprocWorkflowCompleted', 'BizprocWorkflowTerminated', 'BizprocTaskCreation', 'BizprocTaskCompleted', 'BizprocCommentAdded', 'BizprocCommentRead', 'BizprocTaskDelegated', 'Activity:BizprocWorkflowCompleted', 'Activity:BizprocCommentAdded', 'Activity:BizprocTask'];
				return supportedItemTypes.includes(item.getType());
			}
		}]);
	}(Base);
	function _handleTaskAction(actionData, item) {
		const responsibleId = main_core.Text.toInteger(actionData?.responsibleId);
		if (responsibleId > 0 && main_core.Text.toInteger(item.getCurrentUser()?.userId) === responsibleId) {
			_assertClassBrand$p(_Bizproc_brand, this, _doTask).call(this, actionData, item);
			return;
		}
		ui_notification.UI.Notification.Center.notify({
			content: main_core.Text.encode(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_BIZPROC_TASK_DO_ACTION_ACCESS_DENIED')),
			autoHideDelay: 5000
		});
	}
	function _openWorkflowLogSlider(actionData) {
		_assertClassBrand$p(_Bizproc_brand, this, _openSlider).call(this, actionData, (Router, {
			workflowId
		}) => {
			if (Router && workflowId) {
				Router.openWorkflowLog(workflowId);
			}
		});
	}
	function _openWorkflowSlider(actionData) {
		_assertClassBrand$p(_Bizproc_brand, this, _openSlider).call(this, actionData, (Router, {
			workflowId
		}) => {
			if (Router && workflowId) {
				Router.openWorkflow(workflowId);
			}
		});
	}
	function _openWorkflowTaskSlider(actionData) {
		_assertClassBrand$p(_Bizproc_brand, this, _openSlider).call(this, actionData, (Router, {
			taskId,
			userId
		}) => {
			if (Router && taskId) {
				Router.openWorkflowTask(main_core.Text.toInteger(taskId), main_core.Text.toInteger(userId));
			}
		});
	}
	async function _openSlider(actionData, callback) {
		if (!actionData) {
			return;
		}
		try {
			const {
				Router
			} = await main_core.Runtime.loadExtension('bizproc.router');
			callback(Router, actionData);
		} catch (e) {
			console.error(e);
		}
	}
	function _openTimeline(actionData) {
		const workflowId = actionData?.workflowId;
		if (!workflowId) {
			return;
		}
		main_core.Runtime.loadExtension('bizproc.workflow.timeline').then(() => {
			BX.Bizproc.Workflow.Timeline.open({
				workflowId
			});
		}).catch(response => console.error(response.errors));
	}
	function _terminateWorkflow(actionData) {
		const workflowId = actionData?.workflowId;
		if (!workflowId) {
			return;
		}
		main_core.ajax.runAction('bizproc.workflow.terminate', {
			data: {
				workflowId
			}
		}).catch(response => {
			response.errors.forEach(error => {
				ui_notification.UI.Notification.Center.notify({
					content: error.message,
					autoHideDelay: 5000
				});
			});
		});
	}
	function _doTask(actionData, item) {
		const taskId = actionData?.taskId;
		if (!taskId) {
			return;
		}
		const value = actionData?.value;
		const name = actionData?.name;
		if (main_core.Type.isStringFilled(name) && main_core.Type.isStringFilled(value)) {
			const buttons = Object.values(TaskUserStatus).map(status => {
				return item.getLayoutFooterButtonById(`status_${status}`);
			}).filter(button => button);
			buttons.forEach(button => {
				button.setButtonState(ButtonState.DISABLED);
			});
			const data = {
				taskId,
				taskRequest: {
					[name]: value
				}
			};
			main_core.ajax.runAction('bizproc.task.do', {
				data
			}).then(() => {}) // waiting push
			.catch(response => {
				response.errors.forEach(error => {
					ui_notification.UI.Notification.Center.notify({
						content: main_core.Text.encode(error.message),
						autoHideDelay: 5000
					});
				});
				buttons.forEach(button => {
					button.setButtonState(ButtonState.DEFAULT);
				});
			});
		}
	}

	function showCyclePopup(status) {
		void main_core.Runtime.loadExtension('booking.component.cycle-popup').then(CyclePopup => {
			const scrollToCard = {
				not_confirmed: CyclePopup.CardId.Unconfirmed,
				confirmed: CyclePopup.CardId.Confirmed,
				success: CyclePopup.CardId.Confirmed,
				late: CyclePopup.CardId.Late,
				failed: CyclePopup.CardId.Late,
				waitlist: CyclePopup.CardId.Waitlist,
				overbooking: CyclePopup.CardId.Overbooking
			}[status];
			CyclePopup.cyclePopupOpener.show({
				context: 'crm',
				scrollToCard
			});
		});
	}

	function _callSuper$t(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$t() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$t() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$t = function () { return !!t; })(); }
	let Booking = /*#__PURE__*/function (_Base) {
		function Booking() {
			babelHelpers.classCallCheck(this, Booking);
			return _callSuper$t(this, Booking, arguments);
		}
		babelHelpers.inherits(Booking, _Base);
		return babelHelpers.createClass(Booking, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === `${item.getType()}:ShowBooking`) {
					const url = `/booking/?editingBookingId=${actionData.id}`;
					BX.SidePanel.Instance.open(url, {
						customLeftBoundary: 0
					});
				}
				if (action === `${item.getType()}:ShowSku`) {
					BX.SidePanel.Instance.open(actionData.url);
				}
				if (action === `${item.getType()}:ShowCyclePopup`) {
					showCyclePopup(actionData.status);
				}
				if (action === `${item.getType()}:ShowInfoHelper`) {
					BX.UI?.InfoHelper?.show(actionData.code);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Booking';
			}
		}]);
	}(Base);

	function _callSuper$s(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$s() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$s() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$s = function () { return !!t; })(); }
	let WaitListItem = /*#__PURE__*/function (_Base) {
		function WaitListItem() {
			babelHelpers.classCallCheck(this, WaitListItem);
			return _callSuper$s(this, WaitListItem, arguments);
		}
		babelHelpers.inherits(WaitListItem, _Base);
		return babelHelpers.createClass(WaitListItem, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === `${item.getType()}:ShowWaitListItem`) {
					const url = `/booking/?editingWaitListItemId=${actionData.id}`;
					BX.SidePanel.Instance.open(url, {
						customLeftBoundary: 0
					});
				}
				if (action === `${item.getType()}:ShowCyclePopup`) {
					showCyclePopup(actionData.status);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:WaitListItem';
			}
		}]);
	}(Base);

	var SharingSlotsList = {
		data() {
			return {
				moreLinkRef: null
			};
		},
		props: {
			listItems: {
				type: Array,
				required: true,
				default: []
			}
		},
		mounted() {
			const moreLink = this.$el.querySelector('[data-anchor="more-link"]');
			if (!moreLink) {
				return;
			}
			this.moreLinkRef = moreLink;
			main_core.Event.bind(this.moreLinkRef, 'click', () => this.openPopup());
			main_core.Dom.append(main_core.Tag.render`<i/>`, this.moreLinkRef);
		},
		computed: {
			items() {
				return this.listItems.map(item => item.properties);
			},
			formattedRules() {
				return this.items.map(item => this.createItemText(item));
			},
			firstFormattedRule() {
				if (this.doShowMoreLink) {
					return main_core.Loc.getMessage('CRM_TIMELINE_ITEM_CALENDAR_SHARING_SLOTS_RANGE_WITH_MORE', {
						'#RANGE#': this.formattedRules[0],
						'#MORE_LINK_CLASS#': 'crm-timeline-calendar-sharing-slots-more',
						'#AMOUNT#': this.items.length - 1
					});
				}
				return this.formattedRules[0] ?? '';
			},
			formattedDuration() {
				return main_core.Loc.getMessage('CRM_TIMELINE_ITEM_CALENDAR_SHARING_SLOTS_DURATION', {
					'#DURATION#': this.items[0].durationFormatted
				});
			},
			doShowMoreLink() {
				return this.items.length > 1;
			}
		},
		methods: {
			createItemText(item) {
				return main_core.Loc.getMessage('CRM_TIMELINE_ITEM_CALENDAR_SHARING_SLOTS_RANGE_V3', {
					'#WEEKDAYS#': main_core.Text.encode(item.weekdaysFormatted),
					'#FROM_TIME#': this.formatMinutes(item.rule.from),
					'#TO_TIME#': this.formatMinutes(item.rule.to)
				});
			},
			formatMinutes(minutes) {
				const date = new Date(calendar_util.Util.parseDate('01.01.2000').getTime() + minutes * 60 * 1000);
				return calendar_util.Util.formatTime(date);
			},
			openPopup() {
				if (!this.moreLinkRef || this.popup?.isShown()) {
					return;
				}
				this.popup = new main_popup.Popup(this.getPopupOptions());
				this.popup.show();
			},
			getPopupOptions() {
				return {
					content: this.getPopupContent(),
					autoHide: true,
					cacheable: false,
					animation: 'fading-slide',
					bindElement: this.moreLinkRef,
					closeByEsc: true
				};
			},
			getPopupContent() {
				const root = main_core.Tag.render`<div></div>`;
				this.formattedRules.forEach(item => {
					main_core.Dom.append(main_core.Tag.render`<div class="crm-timeline-calendar-sharing-slots-more-popup-item">${item}</div>`, root);
				});
				return root;
			}
		},
		template: `
		<div class="crm-timeline-calendar-sharing-slots">
			<div class="crm-timeline-calendar-sharing-slots-block" v-html="firstFormattedRule"/>
			<div class="crm-timeline-calendar-sharing-slots-block">
				{{formattedDuration}}
			</div>
		</div>
	`
	};

	function _callSuper$r(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$r() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$r() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$r = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$o(e, a) { _checkPrivateRedeclaration$o(e, a), a.add(e); }
	function _checkPrivateRedeclaration$o(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$o(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Sharing_brand = /*#__PURE__*/new WeakSet();
	let Sharing = /*#__PURE__*/function (_Base) {
		function Sharing(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Sharing);
			_this = _callSuper$r(this, Sharing, [...args]);
			_classPrivateMethodInitSpec$o(_this, _Sharing_brand);
			return _this;
		}
		babelHelpers.inherits(Sharing, _Base);
		return babelHelpers.createClass(Sharing, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'CalendarSharingInvitationSent:ShowMembers' || action === 'Activity:CalendarSharing:ShowMembers') {
					_assertClassBrand$o(_Sharing_brand, this, _openMembersPopup).call(this, item, Object.values(actionData.members));
				}
				if (action === 'Activity:CalendarSharing:OpenCalendarEvent') {
					_assertClassBrand$o(_Sharing_brand, this, _openCalendarEvent).call(this, item, actionData);
				}
				if (action === 'Activity:CalendarSharing:StartVideoconference') {
					_assertClassBrand$o(_Sharing_brand, this, _startVideoconference).call(this, item, actionData);
				}
				if (action === 'CalendarSharingLinkCopied:OpenPublicPageInNewTab') {
					window.open(actionData.url);
				}
				if (action === 'CalendarSharingInvitationSent:ShowQr') {
					const dialogQr = new calendar_sharing_interface.DialogQr({
						sharingUrl: actionData.url,
						context: 'crm'
					});
					dialogQr.show();
				}
				if (action === 'Activity:CalendarSharing:CopyLink') {
					const isSuccess = BX.clipboard.copy(actionData.url);
					if (isSuccess) {
						ui_notification.UI.Notification.Center.notify({
							content: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_LINK_IS_COPIED_SHORT'),
							autoHideDelay: 5000
						});
					}
				}
			}
		}, {
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					SharingSlotsList
				};
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'CalendarSharingInvitationSent' || item.getType() === 'CalendarSharing' || item.getType() === 'Activity:CalendarSharing' || item.getType() === 'CalendarSharingLinkCopied';
			}
		}]);
	}(Base);
	function _openCalendarEvent(item, actionData) {
		return crm_router.Router.Instance.openCalendarEventSlider(actionData.eventId, actionData.isSharing);
	}
	async function _startVideoconference(item, actionData) {
		let response = null;
		try {
			response = await main_core.ajax.runAction('crm.timeline.calendar.sharing.getConferenceChatId', {
				data: {
					eventId: actionData.eventId,
					ownerId: actionData.ownerId,
					ownerTypeId: actionData.ownerTypeId
				}
			});
		} catch (responseWithError) {
			console.error(responseWithError);
			return;
		}
		const chatId = response.data.chatId;
		if (top.window.BXIM && chatId) {
			top.window.BXIM.openMessenger(`chat${parseInt(chatId, 10)}`);
		}
	}
	function _openMembersPopup(item, members) {
		const moreButton = item.getContainer().querySelector('[data-id="sharing_member_more_button"]');
		if (!moreButton) {
			return;
		}
		const existingPopup = main_popup.PopupManager.getPopupById(`sharing_members_popup_${item.getId()}`);
		if (existingPopup) {
			return;
		}
		const menu = main_popup.MenuManager.create({
			id: `sharing_members_popup_${item.getId()}`,
			bindElement: moreButton,
			cacheable: false,
			className: 'crm-timeline-sharing-members-popup',
			maxHeight: 500,
			maxWidth: 300,
			animation: 'fading-slide',
			closeByEsc: true,
			items: members.map(member => ({
				html: _assertClassBrand$o(_Sharing_brand, this, _renderMemberMenuItem).call(this, member),
				onclick: () => menu.close()
			}))
		});
		menu.show();
	}
	function _renderMemberMenuItem(member) {
		const {
			root,
			icon
		} = main_core.Tag.render`
			<a class="crm-timeline-sharing-members-popup-item" href="${member.SHOW_URL}" target="_blank">
				<div class="ui-icon ui-icon-common-user crm-timeline-sharing-members-popup-item-image">
					<i ref="icon"></i>
				</div>
				<span class="crm-timeline-sharing-members-popup-item-title">
					${main_core.Text.encode(member.FORMATTED_NAME)}
				</span>
			</a>
		`;
		if (main_core.Type.isStringFilled(member.PHOTO_URL)) {
			main_core.Dom.style(icon, 'background-image', `url('${encodeURI(main_core.Text.encode(member.PHOTO_URL))}')`);
		}
		return root;
	}

	function _callSuper$q(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$q() ? Reflect.construct(o, [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$q() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$q = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$n(e, a) { _checkPrivateRedeclaration$n(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$8(e, t, a) { _checkPrivateRedeclaration$n(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$n(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$8(s, a) { return s.get(_assertClassBrand$n(s, a)); }
	function _classPrivateFieldSet$8(s, a, r) { return s.set(_assertClassBrand$n(s, a), r), r; }
	function _assertClassBrand$n(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	const ScenarioList = {
		full: 'full',
		fillFields: 'fill_fields',
		callScoring: 'call_scoring',
		transcribeRecord: 'transcribe_record'
	};
	const COPILOT_BUTTON_DISABLE_DELAY = 5000;
	const COPILOT_HELPDESK_CODE = 18_799_442;
	var _copilotConfig = /*#__PURE__*/new WeakMap();
	var _CopilotBase_brand = /*#__PURE__*/new WeakSet();
	let CopilotBase = /*#__PURE__*/function (_Base) {
		function CopilotBase() {
			var _this;
			babelHelpers.classCallCheck(this, CopilotBase);
			_this = _callSuper$q(this, CopilotBase);
			_classPrivateMethodInitSpec$n(_this, _CopilotBase_brand);
			_classPrivateFieldInitSpec$8(_this, _copilotConfig, void 0);
			_classPrivateFieldSet$8(_copilotConfig, _this, _this.getCopilotConfig());
			return _this;
		}

		// region Methods to override
		babelHelpers.inherits(CopilotBase, _Base);
		return babelHelpers.createClass(CopilotBase, [{
			key: "getCopilotConfig",
			value: function getCopilotConfig() {
				throw new Error('Method "getCopilotConfig" must be overridden');
			}
		}, {
			key: "getAdditionalRequestData",
			value: function getAdditionalRequestData(actionData) {
				const isValidScenario = main_core.Type.isStringFilled(actionData.scenario) && Object.values(ScenarioList).includes(actionData.scenario);
				return {
					scenario: isValidScenario ? actionData.scenario : null
				};
			}
		}, {
			key: "useInfoHelper",
			value: function useInfoHelper() {
				return false;
			}
			// endregion
		}, {
			key: "handleCopilotLaunch",
			value: async function handleCopilotLaunch(item, actionData) {
				const isCopilotAgreementNeedShow = actionData.isCopilotAgreementNeedShow || false;
				if (isCopilotAgreementNeedShow) {
					await _assertClassBrand$n(_CopilotBase_brand, this, _showCopilotAgreement).call(this, item, actionData);
				} else {
					_assertClassBrand$n(_CopilotBase_brand, this, _launchCopilot).call(this, item, actionData);
				}
			}
		}, {
			key: "openCopilotSummaryPopup",
			value: async function openCopilotSummaryPopup(actionData, activityProvider, jobId = null) {
				main_core.Runtime.loadExtension('crm.ai.call').then(exports$1 => {
					const summary = new exports$1.Call.Summary({
						activityId: actionData.activityId,
						ownerTypeId: actionData.ownerTypeId,
						ownerId: actionData.ownerId,
						languageTitle: actionData.languageTitle,
						activityProvider,
						jobId
					});
					summary.open();
				}).catch(exception => {
					console.error('Error loading "crm.ai.call":', exception);
				});
			}
		}, {
			key: "getFooterCopilotButton",
			value: function getFooterCopilotButton(item, scenario = null) {
				const buttonId = main_core.Type.isStringFilled(scenario) && scenario === ScenarioList.callScoring ? 'aiSecondaryScenarioButton' : 'aiPrimaryScenarioButton';
				let copilotBtn = item.getLayoutFooterButtonById(buttonId);
				if (copilotBtn === null) {
					copilotBtn = item.getLayoutFooterButtonById('aiPrimaryScenarioButton');
				}
				return copilotBtn;
			}
		}]);
	}(Base);
	async function _showCopilotAgreement(item, actionData) {
		try {
			const {
				CopilotAgreement
			} = await main_core.Runtime.loadExtension('ai.copilot-agreement');
			const copilotAgreementPopup = new CopilotAgreement({
				moduleId: 'crm',
				contextId: _classPrivateFieldGet$8(_copilotConfig, this).agreementContext,
				events: {
					onAccept: () => _assertClassBrand$n(_CopilotBase_brand, this, _launchCopilot).call(this, item, actionData)
				}
			});
			const isAgreementAccepted = await copilotAgreementPopup.checkAgreement();
			if (isAgreementAccepted) {
				_assertClassBrand$n(_CopilotBase_brand, this, _launchCopilot).call(this, item, actionData);
			}
		} catch {
			await console.error('Cant load "ai.copilot-agreement" extension');
		}
	}
	function _launchCopilot(item, actionData) {
		if (!_assertClassBrand$n(_CopilotBase_brand, this, _validateCopilotParams).call(this, actionData)) {
			throw new Error('Invalid "actionData" parameters');
		}
		const aiCopilotBtn = this.getFooterCopilotButton(item, actionData.scenario);
		const aiCopilotBtnUI = aiCopilotBtn?.getUiButton();
		if (!aiCopilotBtnUI || aiCopilotBtnUI.getState() === ui_buttons.ButtonState.AI_WAITING) {
			return;
		}
		_classPrivateFieldGet$8(_copilotConfig, this).onPreLaunch?.(item, actionData);
		const prevState = aiCopilotBtnUI.getState();
		aiCopilotBtnUI.setState(ui_buttons.ButtonState.AI_WAITING);
		_assertClassBrand$n(_CopilotBase_brand, this, _executeCopilotRequest).call(this, actionData).then(response => {
			_classPrivateFieldGet$8(_copilotConfig, this).onPostLaunch?.(item, actionData, response);
		}).catch(response => {
			_assertClassBrand$n(_CopilotBase_brand, this, _handleCopilotError).call(this, item, actionData, response, aiCopilotBtnUI, prevState);
		});
	}
	function _validateCopilotParams(actionData) {
		return main_core.Type.isNumber(actionData.activityId) && main_core.Type.isNumber(actionData.ownerId) && main_core.Type.isNumber(actionData.ownerTypeId) && _classPrivateFieldGet$8(_copilotConfig, this).validEntityTypes.includes(parseInt(actionData.ownerTypeId, 10));
	}
	function _executeCopilotRequest(actionData) {
		return main_core.ajax.runAction(_classPrivateFieldGet$8(_copilotConfig, this).actionEndpoint, {
			data: {
				activityId: actionData.activityId,
				ownerTypeId: actionData.ownerTypeId,
				ownerId: actionData.ownerId,
				...this.getAdditionalRequestData(actionData)
			}
		});
	}
	function _handleCopilotError(item, actionData, response, btnUI, prevState) {
		const customData = response.errors[0].customData;
		if (customData) {
			_assertClassBrand$n(_CopilotBase_brand, this, _showAdditionalInfo).call(this, customData, item);
			btnUI.setState(prevState || ui_buttons.ButtonState.ACTIVE);
		} else {
			_assertClassBrand$n(_CopilotBase_brand, this, _showGenericError).call(this, response, btnUI);
		}
		_classPrivateFieldGet$8(_copilotConfig, this).onError?.(item, actionData, response);
		throw response;
	}
	function _showGenericError(response, btnUI) {
		btnUI.setState(ui_buttons.ButtonState.DISABLED);
		ui_notification.UI.Notification.Center.notify({
			content: main_core.Text.encode(response.errors[0].message),
			autoHideDelay: COPILOT_BUTTON_DISABLE_DELAY
		});
		setTimeout(() => {
			btnUI.setState(ui_buttons.ButtonState.ACTIVE);
		}, COPILOT_BUTTON_DISABLE_DELAY);
	}
	function _showAdditionalInfo(data, item) {
		if (_assertClassBrand$n(_CopilotBase_brand, this, _isSliderCodeExist).call(this, data)) {
			_assertClassBrand$n(_CopilotBase_brand, this, _showInfoSlider).call(this, data.sliderCode);
		} else if (_assertClassBrand$n(_CopilotBase_brand, this, _isAiMarketplaceAppsExist).call(this, data)) {
			_assertClassBrand$n(_CopilotBase_brand, this, _showMarketMessageBox).call(this);
		} else if (data.code === 'blocked_provider') {
			if (main_core.Type.isStringFilled(data.sliderCode)) {
				_assertClassBrand$n(_CopilotBase_brand, this, _showInfoSlider).call(this, data.sliderCode);
				return;
			}
			let msg = '';
			if (main_core.Type.isStringFilled(data.msgPlainText)) {
				msg = data.msgPlainText;
			}
			if (main_core.Type.isStringFilled(data.msgHtml)) {
				msg = data.msgHtml;
			}
			ui_notification.UI.Notification.Center.notify({
				content: msg,
				autoHideDelay: COPILOT_BUTTON_DISABLE_DELAY
			});
		} else {
			_assertClassBrand$n(_CopilotBase_brand, this, _showFeedbackMessageBox).call(this);
		}
	}
	function _showInfoSlider(sliderCode) {
		if (sliderCode?.includes('redirect=detail&code')) {
			top.BX.Helper.show(sliderCode);
		} else if (this.useInfoHelper()) {
			BX?.UI?.InfoHelper.show(sliderCode);
		} else {
			ui_infoHelper.FeaturePromotersRegistry.getPromoter({
				code: sliderCode
			}).show();
		}
	}
	function _showFeedbackMessageBox() {
		ui_dialogs_messagebox.MessageBox.show({
			title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_NO_AI_PROVIDER_POPUP_TITLE', crm_ai_nameService.NameService.copilotNameReplacement()),
			message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_NO_AI_PROVIDER_POPUP_TEXT', crm_ai_nameService.NameService.copilotNameReplacement()),
			modal: true,
			buttons: ui_dialogs_messagebox.MessageBoxButtons.OK_CANCEL,
			okCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_NO_AI_PROVIDER_POPUP_OK_TEXT', crm_ai_nameService.NameService.copilotNameReplacement()),
			onOk: messageBox => {
				messageBox.close();
				_assertClassBrand$n(_CopilotBase_brand, this, _openFeedbackForm).call(this);
			},
			onCancel: messageBox => messageBox.close()
		});
	}
	function _openFeedbackForm() {
		BX.UI.Feedback.Form.open({
			id: 'b24_ai_provider_partner_crm_feedback',
			forms: [{
				zones: ['cn'],
				id: 678,
				lang: 'cn',
				sec: 'wyufoe'
			}, {
				zones: ['vn'],
				id: 680,
				lang: 'vn',
				sec: '2v97xr'
			}, {
				zones: ['en'],
				id: 682,
				lang: 'en',
				sec: '3sd3le'
			}]
		});
	}
	function _showMarketMessageBox() {
		ui_dialogs_messagebox.MessageBox.show({
			title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_AI_PROVIDER_POPUP_TITLE', crm_ai_nameService.NameService.copilotNameReplacement()),
			message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_AI_PROVIDER_POPUP_TEXT', {
				'[helpdesklink]': `<br><br><a href="##" onclick="top.BX.Helper.show('redirect=detail&code=${COPILOT_HELPDESK_CODE}');">`,
				'[/helpdesklink]': '</a>',
				'#COPILOT_NAME#': crm_ai_nameService.NameService.copilotName()
			}),
			modal: true,
			buttons: ui_dialogs_messagebox.MessageBoxButtons.OK_CANCEL,
			okCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_AI_PROVIDER_POPUP_OK_TEXT'),
			onOk: () => crm_router.Router.openSlider(main_core.Loc.getMessage('AI_APP_COLLECTION_MARKET_LINK')),
			onCancel: messageBox => messageBox.close()
		});
	}
	function _isSliderCodeExist(data) {
		return Object.hasOwn(data, 'sliderCode') && main_core.Type.isStringFilled(data.sliderCode);
	}
	function _isAiMarketplaceAppsExist(data) {
		return Object.hasOwn(data, 'isAiMarketplaceAppsExist') && main_core.Type.isBoolean(data.isAiMarketplaceAppsExist) && data.isAiMarketplaceAppsExist;
	}

	function _callSuper$p(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$p() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$p() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$p = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$m(e, a) { _checkPrivateRedeclaration$m(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$7(e, t, a) { _checkPrivateRedeclaration$m(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$m(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$7(s, a) { return s.get(_assertClassBrand$m(s, a)); }
	function _classPrivateFieldSet$7(s, a, r) { return s.set(_assertClassBrand$m(s, a), r), r; }
	function _assertClassBrand$m(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	const COPILOT_BUTTON_NUMBER_OF_MANUAL_STARTS_WITH_BOOST_LIMIT = 5;
	var _currentTranscriptionState = /*#__PURE__*/new WeakMap();
	var _isCopilotWelcomeTourShown = /*#__PURE__*/new WeakMap();
	var _isTranscriptEventBound = /*#__PURE__*/new WeakMap();
	var _Call_brand = /*#__PURE__*/new WeakSet();
	let Call = /*#__PURE__*/function (_CopilotBase) {
		function Call(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Call);
			_this = _callSuper$p(this, Call, [...args]);
			// endregion
			// region jsEvent action handlers
			_classPrivateMethodInitSpec$m(_this, _Call_brand);
			_classPrivateFieldInitSpec$7(_this, _currentTranscriptionState, 'empty');
			_classPrivateFieldInitSpec$7(_this, _isCopilotWelcomeTourShown, false);
			_classPrivateFieldInitSpec$7(_this, _isTranscriptEventBound, false);
			return _this;
		}
		babelHelpers.inherits(Call, _CopilotBase);
		return babelHelpers.createClass(Call, [{
			key: "onInitialize",
			value:
			// region Base overridden methods
			function onInitialize(item) {
				_assertClassBrand$m(_Call_brand, this, _showCopilotWelcomeTour$1).call(this, item);
				_assertClassBrand$m(_Call_brand, this, _bindAdditionalCopilotActions).call(this, item);
			}

			// eslint-disable-next-line sonarjs/cognitive-complexity
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Call:MakeCall' && actionData) {
					_assertClassBrand$m(_Call_brand, this, _makeCall$1).call(this, actionData);
				}
				if (action === 'Call:Schedule' && actionData) {
					this.runScheduleAction(actionData.activityId, actionData.scheduleDate);
				}
				if (action === 'Call:OpenTranscript' && actionData && actionData.callId) {
					_assertClassBrand$m(_Call_brand, this, _openTranscript).call(this, actionData.callId);
				}
				if (action === 'Call:ChangePlayerState' && actionData && actionData.recordId) {
					_assertClassBrand$m(_Call_brand, this, _changePlayerState$1).call(this, item, actionData.recordId);
				}
				if (action === 'Call:DownloadRecord' && actionData && actionData.url) {
					_assertClassBrand$m(_Call_brand, this, _downloadRecord).call(this, actionData.url);
				}
				if (action === 'Call:LaunchCopilot' && actionData) {
					void this.handleCopilotLaunch(item, actionData);
				}
				if (action === 'Call:OpenCallScoringResult' && actionData) {
					_assertClassBrand$m(_Call_brand, this, _openCallScoringResult).call(this, actionData);
				}
				if (action === 'Call:ShowCopilotSummary' && actionData) {
					void _assertClassBrand$m(_Call_brand, this, _showCopilotSummary$1).call(this, item, actionData);
				}
			}
			// endregion

			// region CopilotBase overridden methods
		}, {
			key: "getCopilotConfig",
			value: function getCopilotConfig() {
				return {
					actionEndpoint: 'crm.timeline.ai.launchCopilot',
					validEntityTypes: [BX.CrmEntityType.enumeration.lead, BX.CrmEntityType.enumeration.deal],
					agreementContext: 'audio',
					onPreLaunch: (...args) => _assertClassBrand$m(_Call_brand, this, _handlePreLaunch$1).call(this, ...args),
					onPostLaunch: (...args) => _assertClassBrand$m(_Call_brand, this, _handlePostLaunch).call(this, ...args),
					onError: (...args) => _assertClassBrand$m(_Call_brand, this, _handleError$1).call(this, ...args)
				};
			}
		}, {
			key: "useInfoHelper",
			value: function useInfoHelper() {
				return true;
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Call';
			}
		}]);
	}(CopilotBase);
	function _handlePreLaunch$1(item, actionData) {
		const player = _assertClassBrand$m(_Call_brand, this, _getAudioPlayer).call(this, item);
		if (!player) {
			return;
		}
		_classPrivateFieldSet$7(_currentTranscriptionState, this, player.getTranscriptionState());
		if (_classPrivateFieldGet$7(_currentTranscriptionState, this) === 'empty') {
			player.setTranscriptionState('pending');
		}
	}
	function _handleError$1(item, actionData, response) {
		const player = _assertClassBrand$m(_Call_brand, this, _getAudioPlayer).call(this, item);
		if (player) {
			player.setTranscriptionState(_classPrivateFieldGet$7(_currentTranscriptionState, this));
		}
	}
	function _handlePostLaunch(item, actionData, response) {
		if (response?.status !== 'success') {
			return;
		}
		const numberOfManualStarts = response?.data?.numberOfManualStarts;
		const aiCopilotBtnUI = this.getFooterCopilotButton(item)?.getUiButton();
		if (aiCopilotBtnUI && numberOfManualStarts >= COPILOT_BUTTON_NUMBER_OF_MANUAL_STARTS_WITH_BOOST_LIMIT) {
			_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvent).call(this, aiCopilotBtnUI.getContainer(), 'BX.Crm.Timeline.Call:onShowTourWhenManualStartTooMuch', 'copilot-in-call-automatically', 500);
		}
	}
	function _makeCall$1(actionData) {
		if (!main_core.Type.isStringFilled(actionData.phone)) {
			return;
		}
		const params = {
			ENTITY_TYPE_NAME: BX.CrmEntityType.resolveName(actionData.entityTypeId),
			ENTITY_ID: actionData.entityId,
			AUTO_FOLD: true
		};
		if (actionData.ownerTypeId !== actionData.entityTypeId || actionData.ownerId !== actionData.entityId) {
			params.BINDINGS = {
				OWNER_TYPE_NAME: BX.CrmEntityType.resolveName(actionData.ownerTypeId),
				OWNER_ID: actionData.ownerId
			};
		}
		if (actionData.activityId > 0) {
			params.SRC_ACTIVITY_ID = actionData.activityId;
		}
		main_core.Runtime.loadExtension('im.public').then(exports$1 => {
			exports$1.Messenger.startPhoneCall(actionData.phone, params);
		}).catch(exception => {
			console.error('Error loading "im.public":', exception);
		});
	}
	function _openTranscript(callId) {
		if (BX.Voximplant && BX.Voximplant.Transcript) {
			BX.Voximplant.Transcript.create({
				callId
			}).show();
		}
	}
	function _changePlayerState$1(item, recordId) {
		const player = _assertClassBrand$m(_Call_brand, this, _getAudioPlayer).call(this, item);
		if (!player) {
			return;
		}
		if (recordId !== player.id) {
			return;
		}
		if (player.state === 'play') {
			player.pause();
		} else {
			player.play();
		}
	}
	function _downloadRecord(url) {
		location.href = url;
	}
	async function _openCallScoringResult(actionData) {
		if (!main_core.Type.isInteger(actionData.activityId) || !main_core.Type.isInteger(actionData.ownerTypeId) || !main_core.Type.isInteger(actionData.ownerId)) {
			return;
		}

		// Runtime.loadExtension not work in this case (see http://jabber.bx/view.php?id=241940)
		await top.BX.Runtime.loadExtension('crm.ai.call');
		const callQualityDlg = new top.BX.Crm.AI.Call.CallQuality({
			activityId: actionData.activityId,
			ownerTypeId: actionData.ownerTypeId,
			ownerId: actionData.ownerId,
			activityCreated: actionData.activityCreated ?? null,
			clientDetailUrl: actionData.clientDetailUrl ?? null,
			clientFullName: actionData.clientFullName ?? null,
			userPhotoUrl: actionData.userPhotoUrl ?? null,
			jobId: actionData.jobId ?? null,
			assessmentSettingsId: actionData.assessmentSettingsId ?? null
		});
		callQualityDlg.open();
	}
	async function _openTranscriptResult(payload = null) {
		if (!main_core.Type.isInteger(payload?.activityId) || !main_core.Type.isInteger(payload?.ownerTypeId) || !main_core.Type.isInteger(payload?.ownerId)) {
			return;
		}
		main_core.Runtime.loadExtension('crm.ai.call').then(exports$1 => {
			const transcription = new exports$1.Call.Transcription({
				activityId: payload?.activityId,
				ownerTypeId: payload?.ownerTypeId,
				ownerId: payload?.ownerId,
				languageTitle: payload?.languageTitle
			});
			transcription.open();
		}).catch(exception => {
			console.error('Error loading "crm.ai.call":', exception);
		});
	}
	function _showCopilotSummary$1(item, actionData) {
		void this.openCopilotSummaryPopup(actionData, crm_ai_call.ActivityProvider.call);
	}
	// endregion
	// eslint-disable-next-line sonarjs/cognitive-complexity
	function _showCopilotWelcomeTour$1(item) {
		if (!item) {
			return;
		}
		if (_classPrivateFieldGet$7(_isCopilotWelcomeTourShown, this)) {
			return;
		}
		setTimeout(() => {
			const aiCopilotBtn = this.getFooterCopilotButton(item);
			const aiCopilotUIBtn = aiCopilotBtn?.getUiButton();
			if (!aiCopilotUIBtn || aiCopilotUIBtn.getState() === ui_buttons.ButtonState.DISABLED) {
				return;
			}
			if (aiCopilotBtn?.isInViewport()) {
				_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvents).call(this, aiCopilotUIBtn.getContainer(), 1500, item.getDataPayload());
				return;
			}
			const showCopilotTourOnScroll = () => {
				if (aiCopilotBtn?.isInViewport()) {
					_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvents).call(this, aiCopilotUIBtn.getContainer(), 1500, item.getDataPayload());
					_classPrivateFieldSet$7(_isCopilotWelcomeTourShown, this, true);
					main_core.Event.unbind(window, 'scroll', showCopilotTourOnScroll);
				}
			};
			main_core.Event.bind(window, 'scroll', showCopilotTourOnScroll);
		}, 50);
	}
	function _bindAdditionalCopilotActions(item) {
		if (!item || _classPrivateFieldGet$7(_isTranscriptEventBound, this)) {
			return;
		}
		_classPrivateFieldSet$7(_isTranscriptEventBound, this, true);
		main_core_events.EventEmitter.subscribe('ui:audioplayer:pause', event => {
			const {
				initiator
			} = event.getData();
			const aiCopilotBtn = this.getFooterCopilotButton(item);
			const aiCopilotUIBtn = aiCopilotBtn?.getUiButton();
			if (!aiCopilotUIBtn || aiCopilotUIBtn.getState() === ui_buttons.ButtonState.DISABLED || !aiCopilotBtn?.isPropEqual('data-activity-id', initiator)) {
				return;
			}
			_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvents).call(this, aiCopilotUIBtn.getContainer(), 500);
		});
		main_core_events.EventEmitter.subscribe('crm:audioplayer:transcript', event => {
			const {
				initiator,
				action
			} = event.getData();
			const activityId = item.getDataPayload()?.activityId;
			if (!main_core.Type.isInteger(activityId) || activityId !== initiator) {
				return;
			}
			if (action === 'open') {
				_assertClassBrand$m(_Call_brand, this, _openTranscriptResult).call(this, item.getDataPayload());
			} else if (action === 'transcribe') {
				const actionData = {
					activityId: item.getDataPayload()?.activityId,
					ownerTypeId: item.getDataPayload()?.ownerTypeId,
					ownerId: item.getDataPayload()?.ownerId,
					scenario: ScenarioList.transcribeRecord
				};
				void this.handleCopilotLaunch(item, actionData);
			}
		});
	}
	function _emitTimelineCopilotTourEvents(target, delay = 1500, payload = null) {
		const isWelcomeTourEnabled = payload?.isWelcomeTourEnabled ?? true;
		const isWelcomeTourAutomaticallyEnabled = payload?.isWelcomeTourAutomaticallyEnabled ?? true;
		const isWelcomeTourManuallyEnabled = payload?.isWelcomeTourManuallyEnabled ?? true;
		if (isWelcomeTourEnabled) {
			_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvent).call(this, target, 'BX.Crm.Timeline.Call:onShowCopilotTour', 'copilot-button-in-call', delay);
		}
		if (isWelcomeTourAutomaticallyEnabled) {
			_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvent).call(this, target, 'BX.Crm.Timeline.Call:onShowTourWhenCopilotAutomaticallyStart', 'copilot-button-in-call-automatically', delay);
		}
		if (isWelcomeTourManuallyEnabled) {
			_assertClassBrand$m(_Call_brand, this, _emitTimelineCopilotTourEvent).call(this, target, 'BX.Crm.Timeline.Call:onShowTourWhenCopilotManuallyStart', 'copilot-button-in-call-manually', delay);
		}
	}
	function _emitTimelineCopilotTourEvent(target, eventName, stepId, delay = 1500) {
		main_core_events.EventEmitter.emit(this, eventName, {
			target,
			stepId,
			delay
		});
	}
	function _getAudioPlayer(item) {
		return item?.getLayoutContentBlockById('callGroupOfBlocks')?.getBlockById('audio');
	}

	function _callSuper$o(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$o() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$o() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$o = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$l(e, a) { _checkPrivateRedeclaration$l(e, a), a.add(e); }
	function _checkPrivateRedeclaration$l(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$l(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Comment_brand = /*#__PURE__*/new WeakSet();
	let Comment = /*#__PURE__*/function (_Base) {
		function Comment(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Comment);
			_this = _callSuper$o(this, Comment, [...args]);
			_classPrivateMethodInitSpec$l(_this, _Comment_brand);
			return _this;
		}
		babelHelpers.inherits(Comment, _Base);
		return babelHelpers.createClass(Comment, [{
			key: "getDeleteActionMethod",
			value: function getDeleteActionMethod() {
				return 'crm.timeline.comment.delete';
			}
		}, {
			key: "getDeleteActionCfg",
			value: function getDeleteActionCfg(recordId, ownerTypeId, ownerId) {
				return {
					data: {
						id: recordId,
						ownerTypeId: ownerTypeId,
						ownerId: ownerId
					}
				};
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Comment:Edit' || action === 'Comment:AddFile') {
					_assertClassBrand$l(_Comment_brand, this, _showEditor).call(this, item);
				}
				if (action === 'Comment:Delete' && actionData) {
					_assertClassBrand$l(_Comment_brand, this, _onCommentDelete).call(this, actionData, animationCallbacks);
				}
				if (action === 'Comment:StartEdit') {
					item.highlightContentBlockById('commentContentWeb', true);
				}
				if (action === 'Comment:FinishEdit') {
					item.highlightContentBlockById('commentContentWeb', false);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Comment';
			}
		}]);
	}(Base);
	function _showEditor(item) {
		const commentBlock = item.getLayoutContentBlockById('commentContentWeb');
		if (commentBlock) {
			commentBlock.startEditing();
		} else {
			throw new Error('Vue component "CommentContent" was not found');
		}
	}
	function _onCommentDelete(actionData, animationCallbacks) {
		if (!_assertClassBrand$l(_Comment_brand, this, _isValidParams).call(this, actionData)) {
			return;
		}
		const confirmationText = main_core.Type.isStringFilled(actionData.confirmationText) ? actionData.confirmationText : '';
		if (confirmationText) {
			ui_dialogs_messagebox.MessageBox.show({
				message: confirmationText,
				modal: true,
				buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_NO,
				onYes: () => {
					return this.runDeleteAction(actionData.commentId, actionData.ownerTypeId, actionData.ownerId, animationCallbacks);
				},
				onNo: messageBox => {
					messageBox.close();
				}
			});
		} else {
			this.runDeleteAction(actionData.commentId, actionData.ownerTypeId, actionData.ownerId);
		}
	}
	function _isValidParams(params) {
		return main_core.Type.isNumber(params.commentId) && main_core.Type.isNumber(params.ownerId) && main_core.Type.isNumber(params.ownerTypeId);
	}

	// @vue/component
	var ActionBar = {
		components: {
			Chip: ui_system_chip_vue.Chip
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			items: {
				type: Object,
				required: true
			}
		},
		computed: {
			titleClassName() {
				return ['crm-timeline__action-bar-title', {
					'--hidden': !main_core.Type.isStringFilled(this.title)
				}];
			}
		},
		methods: {
			getContainer() {
				return this.$refs.actionBarContainer;
			},
			getIconByDesign(design) {
				if (design === ui_system_chip_vue.ChipDesign.OutlineCopilot) {
					return ui_iconSet_api_vue.Outline.COPILOT;
				}
				return null;
			},
			executeAction(actionData) {
				if (main_core.Type.isObject(actionData)) {
					void new Action(actionData).execute(this);
				}
			}
		},
		// language=Vue
		template: `
		<div 
			class="crm-timeline__action-bar-container"
			ref="actionBarContainer"
		>
			<div :class="titleClassName">{{ title }}</div>
			<div 
				class="crm-timeline__action-bar-item"
				v-for="(item, index) in items"
				:key="index"
			>
				<Chip
					:size="item.size"
					:design="item.design"
					:text="item.text"
					:rounded="item.rounded"
					:dropdown="item.dropdown"
					:lock="item.lock"
					:icon="getIconByDesign(item.design)"
					@click="executeAction(item.action)"
				/>
			</div>
		</div>
	`
	};

	var AddressBlock = {
		props: {
			addressFormatted: String
		},
		mounted() {
			void this.$nextTick(() => {
				this.renderAddressWidget();
			});
		},
		methods: {
			renderAddressWidget() {
				const settings = main_core.Extension.getSettings('crm.timeline.item');
				if (!settings.hasLocationModule) {
					return;
				}
				const widgetFactory = new location_widget.Factory();
				const format = new location_core.Format(JSON.parse(main_core.Loc.getMessage('CRM_ACTIVITY_TODO_ADDRESS_FORMAT')));
				const address = new location_core.Address({
					languageId: format.languageId
				});
				address.setFieldValue(format.fieldForUnRecognized, this.addressFormatted);
				const addressWidget = widgetFactory.createAddressWidget({
					address,
					mode: location_core.ControlMode.view
				});
				const addressWidgetParams = {
					mode: location_core.ControlMode.view,
					mapBindElement: this.$refs.mapBindElement,
					controlWrapper: this.$refs.controlWrapper
				};
				addressWidget.render(addressWidgetParams);
			}
		},
		template: `
		<div class="crm-timeline__text-block crm-timeline__address-block">
			<div ref="mapBindElement">
				<div ref="controlWrapper" class="crm-timeline__address-block-address-wrapper">
					<span 
						:title="addressFormatted"
						class="ui-link ui-link-dark ui-link-dotted"
					>
						{{addressFormatted}}
					</span>
				</div>
			</div>
		</div>
	`
	};

	const CommunicationType = Object.freeze({
		PHONE: 'PHONE',
		EMAIL: 'EMAIL',
		IM: 'IM'
	});

	// @vue/component
	var ClientCommunication = {
		props: {
			communications: {
				type: Object,
				required: true
			},
			ownerTypeId: {
				type: Number,
				required: true
			},
			ownerId: {
				type: Number,
				required: true
			},
			entityTypeId: {
				type: Number,
				required: true
			},
			entityId: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				// check data and deep clone to trigger reactivity on changes
				currentCommunications: JSON.parse(JSON.stringify(this.communications))
			};
		},
		computed: {
			hasPhone() {
				return this.hasCommunicationType(CommunicationType.PHONE);
			},
			hasEmail() {
				return this.hasCommunicationType(CommunicationType.EMAIL);
			},
			hasIM() {
				return this.hasCommunicationType(CommunicationType.IM);
			},
			phoneItems() {
				return this.getCommunicationItems(CommunicationType.PHONE);
			},
			emailItems() {
				return this.getCommunicationItems(CommunicationType.EMAIL);
			},
			imItems() {
				return this.getCommunicationItems(CommunicationType.IM);
			},
			phoneClassName() {
				return this.getButtonClassName(CommunicationType.PHONE, this.hasPhone);
			},
			emailClassName() {
				return this.getButtonClassName(CommunicationType.EMAIL, this.hasEmail);
			},
			imClassName() {
				return this.getButtonClassName(CommunicationType.IM, this.hasIM);
			}
		},
		watch: {
			communications: {
				handler(newValue) {
					this.currentCommunications = JSON.parse(JSON.stringify(newValue));
				},
				deep: true
			}
		},
		created() {
			main_core_events.EventEmitter.subscribe('BX.Crm.MessageSender.ReceiverRepository:OnReceiversChanged', this.onCommunicationChanged);
		},
		beforeUnmount() {
			main_core_events.EventEmitter.unsubscribe('BX.Crm.MessageSender.ReceiverRepository:OnReceiversChanged', this.onCommunicationChanged);
		},
		methods: {
			onCommunicationChanged(event) {
				const {
					item,
					current
				} = event.getData();
				if (this.entityTypeId !== item?.entityTypeId || this.entityId !== item?.entityId || !main_core.Type.isArray(current)) {
					return;
				}
				const data = current.map(receiver => ({
					id: receiver.address?.id,
					value: receiver.address?.value,
					valueFormatted: receiver.address?.valueFormatted,
					complexName: receiver.address?.valueTypeCaption ?? '',
					title: receiver.valueTypeCaption?.title ?? '',
					typeId: receiver.address?.typeId
				}));
				this.currentCommunications[CommunicationType.PHONE] = data.filter(comm => comm.typeId === CommunicationType.PHONE);
				this.currentCommunications[CommunicationType.EMAIL] = data.filter(comm => comm.typeId === CommunicationType.EMAIL);
				this.currentCommunications[CommunicationType.IM] = data.filter(comm => comm.typeId === CommunicationType.IM);
			},
			hasCommunicationType(type) {
				const items = this.currentCommunications[type];
				return main_core.Type.isArray(items) && items.length > 0;
			},
			getCommunicationItems(type) {
				const items = this.currentCommunications[type];
				return main_core.Type.isArray(items) ? items : [];
			},
			getButtonClassName(type, isAvailable) {
				const baseClass = `crm-timeline__client-communication --${type}`.toLowerCase();
				return isAvailable ? `${baseClass} crm-timeline__client-communication-available` : baseClass;
			},
			onPhoneClick(event) {
				if (!this.hasPhone) {
					return;
				}
				if (this.phoneItems.length === 1) {
					this.makeCall(this.phoneItems[0].value);
					return;
				}
				this.showCommunicationMenu(event.target, this.phoneItems, CommunicationType.PHONE);
			},
			onEmailClick(event) {
				if (!this.hasEmail) {
					return;
				}
				if (this.emailItems.length === 1) {
					this.createEmail(this.emailItems[0].value);
					return;
				}
				this.showCommunicationMenu(event.target, this.emailItems, CommunicationType.EMAIL);
			},
			onChatClick(event) {
				if (!this.hasIM) {
					return;
				}
				if (this.imItems.length === 1) {
					this.openChat(this.imItems[0].value);
					return;
				}
				this.showCommunicationMenu(event.target, this.imItems, CommunicationType.IM);
			},
			showCommunicationMenu(anchor, items, type) {
				let menu = null;
				const iconMap = {
					PHONE: ui_iconSet_api_core.Outline.CALL_BACK,
					EMAIL: ui_iconSet_api_core.Outline.MAIL,
					IM: ui_iconSet_api_core.Outline.CHATS
				};
				const menuItems = items.map(item => {
					const value = item.valueFormatted || item.value;
					return {
						title: value,
						subtitle: item.complexName || '',
						design: 'accent-1',
						icon: iconMap[type],
						onClick: () => {
							menu.close();
							this.handleMenuItemClick(item.value, type);
						}
					};
				});
				const createMenu = (communicationType, communicationItems) => {
					return new ui_system_menu.Menu({
						id: `crm-timeline-client-communication-menu-${communicationType}-${Math.random().toString()}`,
						animation: 'fading-slide',
						bindElement: anchor,
						autoHide: true,
						angle: true,
						cacheable: false,
						offsetTop: 5,
						offsetLeft: 10,
						items: communicationItems
					});
				};
				if (Object.values(CommunicationType).includes(type)) {
					menu = createMenu(type, menuItems);
				}
				menu?.show();
			},
			handleMenuItemClick(value, type) {
				const handlers = {
					[CommunicationType.PHONE]: v => this.makeCall(v),
					[CommunicationType.EMAIL]: v => this.createEmail(v),
					[CommunicationType.IM]: v => this.openChat(v)
				};
				handlers[type]?.(value);
			},
			makeCall(phone) {
				const params = {
					ENTITY_TYPE_NAME: this.getEntityTypeName(this.entityTypeId),
					ENTITY_ID: this.entityId,
					AUTO_FOLD: true
				};
				if (this.ownerTypeId !== this.entityTypeId || this.ownerId !== this.entityId) {
					params.BINDINGS = [{
						OWNER_TYPE_NAME: this.getEntityTypeName(this.ownerTypeId),
						OWNER_ID: this.ownerId
					}];
				}
				main_core.Runtime.loadExtension('im.public').then(exports$1 => {
					exports$1.Messenger.startPhoneCall(phone, params);
				}).catch(exception => {
					console.error('Error loading "im.public":', exception);
				});
			},
			createEmail(email) {
				BX.CrmActivityEditor.addEmail({
					ownerID: this.ownerId,
					ownerType: this.getEntityTypeName(this.ownerTypeId),
					communicationsLoaded: true,
					communications: [{
						type: 'EMAIL',
						entityType: this.getEntityTypeName(this.entityTypeId),
						entityId: this.entityId,
						value: email
					}]
				});
			},
			openChat(messengerValue) {
				main_core.Runtime.loadExtension('im.public.iframe').then(exports$1 => {
					exports$1.Messenger.openLines(messengerValue);
				}).catch(exception => {
					console.error('Error loading "im.public.iframe":', exception);
				});
			},
			getEntityTypeName(typeId) {
				return BX.CrmEntityType.resolveName(typeId);
			}
		},
		// language=Vue
		template: `
		<span class="crm-timeline__client-communication-wrapper">
			<a 
				:class="phoneClassName"
				@click="onPhoneClick"
				title="Phone"
			></a>
			<a 
				:class="emailClassName"
				@click="onEmailClick"
				title="Email"
			></a>
			<a 
				:class="imClassName"
				@click="onChatClick"
				title="Messenger"
			></a>
		</span>
	`
	};

	let ClientMark$1 = /*#__PURE__*/babelHelpers.createClass(function ClientMark() {
		babelHelpers.classCallCheck(this, ClientMark);
	});
	babelHelpers.defineProperty(ClientMark$1, "POSITIVE", 'positive');
	babelHelpers.defineProperty(ClientMark$1, "NEUTRAL", 'neutral');
	babelHelpers.defineProperty(ClientMark$1, "NEGATIVE", 'negative');

	// @vue/component
	const ClientMark = {
		components: {
			UILabel: ui_system_label_vue.Label
		},
		props: {
			mark: {
				type: String,
				default: ClientMark$1.POSITIVE,
				validator: value => Object.values(ClientMark$1).includes(value)
			},
			text: {
				type: String,
				default: ''
			}
		},
		computed: {
			clientMarkStyle() {
				const map = {
					[ClientMark$1.POSITIVE]: ui_system_label.LabelStyle.TINTED_SUCCESS,
					[ClientMark$1.NEUTRAL]: ui_system_label.LabelStyle.TINTED_WARNING,
					[ClientMark$1.NEGATIVE]: ui_system_label.LabelStyle.FILLED_ALERT
				};
				return map[this.mark] || ui_system_label.LabelStyle.TINTED_SUCCESS;
			},
			clientMarkSize() {
				return ui_system_label.LabelSize.SM;
			}
		},
		// language=Vue
		template: `
		<UILabel
			:style="clientMarkStyle"
			:size="clientMarkSize"
			:value="text"
			:bordered="true"
		/>
	`
	};

	let EditableDescriptionAiStatus = /*#__PURE__*/babelHelpers.createClass(function EditableDescriptionAiStatus() {
		babelHelpers.classCallCheck(this, EditableDescriptionAiStatus);
	});
	babelHelpers.defineProperty(EditableDescriptionAiStatus, "NONE", '');
	babelHelpers.defineProperty(EditableDescriptionAiStatus, "SUCCESS", 'success');
	babelHelpers.defineProperty(EditableDescriptionAiStatus, "IN_PROGRESS", 'in_progress');

	const Loader = {
		mounted() {
			this.renderLottieAnimation();
		},
		methods: {
			renderLottieAnimation() {
				const mainAnimation = ui_lottie.Lottie.loadAnimation({
					path: this.getAnimationPath(),
					container: this.$refs.lottie,
					renderer: 'svg',
					loop: true,
					autoplay: true
				});
				mainAnimation.setSpeed(0.75);
				return this.$refs.lottie.root;
			},
			getAnimationPath() {
				return '/bitrix/js/crm/timeline/item/src/components/content-blocks/internal/copilot/lottie/loader.json';
			}
		},
		template: `
		<div ref="lottie" class="crm-timeline-block-internal-copilot-loader__lottie"></div>
	`
	};

	var CopilotHeader = {
		components: {
			Loader
		},
		props: {
			status: {
				type: String,
				required: true,
				validator: value => {
					return [EditableDescriptionAiStatus.NONE, EditableDescriptionAiStatus.SUCCESS, EditableDescriptionAiStatus.IN_PROGRESS].includes(value);
				}
			}
		},
		computed: {
			text() {
				if (this.status === EditableDescriptionAiStatus.IN_PROGRESS) {
					return this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_COPILOT_HEADER_PENDING', crm_ai_nameService.NameService.copilotNameReplacement());
				}
				if (this.status === EditableDescriptionAiStatus.SUCCESS) {
					return this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_COPILOT_HEADER', crm_ai_nameService.NameService.copilotNameReplacement());
				}
				return '';
			},
			isAnimated() {
				return this.status === EditableDescriptionAiStatus.IN_PROGRESS;
			},
			className() {
				return ['crm-timeline-block-internal-copilot-header', {
					'--animated': this.status === EditableDescriptionAiStatus.IN_PROGRESS
				}];
			}
		},
		template: `
		<div :class="className">
			<div class="crm-timeline-block-internal-copilot-header-icon">
				<Loader v-if="isAnimated"></Loader>
			</div>
			<div class="crm-timeline-block-internal-copilot-header_text">{{ text }}</div>
			<div
				v-if="isAnimated"
				class="crm-timeline-block-internal-copilot-header_stage"
			>
				<div class="crm-timeline-block-internal-copilot-header_dot-flashing"></div>
			</div>
		</div>
	`
	};

	let EditableDescriptionBackgroundColor = /*#__PURE__*/babelHelpers.createClass(function EditableDescriptionBackgroundColor() {
		babelHelpers.classCallCheck(this, EditableDescriptionBackgroundColor);
	});
	babelHelpers.defineProperty(EditableDescriptionBackgroundColor, "YELLOW", 'yellow');
	babelHelpers.defineProperty(EditableDescriptionBackgroundColor, "WHITE", 'white');

	let EditableDescriptionHeight = /*#__PURE__*/babelHelpers.createClass(function EditableDescriptionHeight() {
		babelHelpers.classCallCheck(this, EditableDescriptionHeight);
	});
	babelHelpers.defineProperty(EditableDescriptionHeight, "SHORT", 'short');
	babelHelpers.defineProperty(EditableDescriptionHeight, "LONG", 'long');

	const EditableDescription = {
		components: {
			Button,
			CopilotHeader,
			TextEditorComponent: ui_textEditor.TextEditorComponent,
			HtmlFormatterComponent: ui_bbcode_formatter_htmlFormatter.HtmlFormatterComponent
		},
		props: {
			headerText: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			saveAction: {
				type: Object,
				default: null
			},
			editable: {
				type: Boolean,
				default: true
			},
			copied: {
				type: Boolean,
				default: false
			},
			height: {
				type: String,
				default: EditableDescriptionHeight.SHORT
			},
			backgroundColor: {
				type: String,
				default: ''
			},
			copilotStatus: {
				type: String,
				default: EditableDescriptionAiStatus.NONE
			},
			copilotSettings: {
				type: Object,
				default: []
			}
		},
		beforeCreate() {
			this.textEditor = null;
		},
		data() {
			return {
				isEdit: false,
				isSaving: false,
				isLongText: false,
				isCollapsed: false,
				bbcode: this.text,
				isContentEmpty: main_core.Type.isString(this.text) && this.text.trim() === '',
				currentCopilotStatus: this.copilotStatus,
				currentHeaderText: this.headerText
			};
		},
		inject: ['isReadOnly', 'isLogMessage'],
		computed: {
			className() {
				return ['crm-timeline__editable-text', [String(this.heightClassnameModifier), String(this.bgColorClassnameModifier)], {
					'--is-read-only': this.isLogMessage,
					'--is-edit': this.isEdit,
					'--is-long': this.isLongText,
					'--is-expanded': this.isCollapsed || !this.isLongText,
					'--copiloted': !this.isEdit && this.currentCopilotStatus !== EditableDescriptionAiStatus.NONE
				}];
			},
			textClassName() {
				return ['crm-timeline__editable-text_text', {
					'--hidden': this.currentCopilotStatus === EditableDescriptionAiStatus.IN_PROGRESS
				}];
			},
			heightClassnameModifier() {
				switch (this.height) {
					case EditableDescriptionHeight.LONG:
						return '--height-long';
					case EditableDescriptionHeight.SHORT:
						return '--height-short';
					default:
						return '--height-short';
				}
			},
			bgColorClassnameModifier() {
				switch (this.backgroundColor) {
					case EditableDescriptionBackgroundColor.YELLOW:
						return '--bg-color-yellow';
					case EditableDescriptionBackgroundColor.WHITE:
						return '--bg-color-white';
					default:
						return '';
				}
			},
			isEditable() {
				return this.editable && this.saveAction && !this.isReadOnly;
			},
			isCopied() {
				return !this.isEdit && this.copied;
			},
			saveTextButtonProps() {
				return {
					state: this.saveTextButtonState,
					type: ButtonType.PRIMARY,
					title: this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_SAVE')
				};
			},
			cancelEditingButtonProps() {
				return {
					type: ButtonType.LIGHT,
					title: this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_CANCEL'),
					state: this.isSaving ? ButtonState.DISABLED : ButtonState.DEFAULT
				};
			},
			saveTextButtonState() {
				if (this.isContentEmpty) {
					return ButtonState.DISABLED;
				}
				if (this.isSaving) {
					return ButtonState.DISABLED;
				}
				return ButtonState.DEFAULT;
			},
			expandButtonText() {
				return this.isCollapsed ? this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_HIDE_MSGVER_1') : this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_SHOW_MSGVER_1');
			},
			isEditButtonVisible() {
				return !(this.isReadOnly || this.isEdit);
			}
		},
		methods: {
			startEditing() {
				this.isEdit = true;
				this.isCollapsed = true;
				this.$nextTick(() => {
					this.getTextEditor().focus(null, {
						defaultSelection: 'rootEnd'
					});
				});
				this.emitEvent('EditableDescription:StartEdit');
			},
			emitEvent(eventName) {
				const action = new Action({
					type: 'jsEvent',
					value: eventName
				});
				void action.execute(this);
			},
			adjustHeight(elem) {
				main_core.Dom.style(elem, 'height', 0);
				main_core.Dom.style(elem, 'height', `${elem.scrollHeight}px`);
			},
			saveText() {
				if (this.saveTextButtonState === ButtonState.DISABLED || this.saveTextButtonState === ButtonState.LOADING || !this.isEdit) {
					return;
				}
				const encodedTrimText = this.getTextEditor().getText().trim();
				if (encodedTrimText === this.bbcode) {
					this.isEdit = false;
					this.emitEvent('EditableDescription:FinishEdit');
					return;
				}
				this.isSaving = true;

				// eslint-disable-next-line promise/catch-or-return
				this.executeSaveAction(encodedTrimText).then(() => {
					this.isEdit = false;
					this.bbcode = encodedTrimText;
					this.$nextTick(() => {
						this.isLongText = this.checkIsLongText();
					});
					this.emitEvent('EditableDescription:FinishEdit');
				}).finally(() => {
					this.isSaving = false;
				});
			},
			executeSaveAction(text) {
				if (!this.saveAction) {
					return;
				}

				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.saveAction);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.value = text;
				const action = new Action(actionDescription);

				// eslint-disable-next-line consistent-return
				return action.execute(this);
			},
			cancelEditing() {
				if (!this.isEdit || this.isSaving) {
					return;
				}
				this.isEdit = false;
				this.emitEvent('EditableDescription:FinishEdit');
			},
			clearText() {
				if (this.isSaving) {
					return;
				}
				this.getTextEditor().clear();
				this.getTextEditor().focus(null, {
					defaultSelection: 'rootEnd'
				});
			},
			copyText() {
				const selection = window.getSelection();
				selection.removeAllRanges();
				const range = document.createRange();
				const referenceNode = this.$refs.text;
				range.selectNodeContents(referenceNode);
				selection.addRange(range);
				let isSuccess = false;
				try {
					isSuccess = document.execCommand('copy');
				} catch {
					// just in case
				}
				selection.removeAllRanges();
				if (isSuccess) {
					new main_popup.Popup({
						id: `copyTextHint_${main_core.Text.getRandom(8)}`,
						content: this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_TEXT_IS_COPIED'),
						bindElement: this.$refs.copyTextBtn,
						darkMode: true,
						autoHide: true,
						events: {
							onAfterPopupShow() {
								setTimeout(() => {
									this.close();
								}, 2000);
							}
						}
					}).show();
				}
			},
			toggleIsCollapsed() {
				this.isCollapsed = !this.isCollapsed;
			},
			checkIsLongText() {
				const textBlock = this.$refs.text;
				if (!textBlock) {
					return false;
				}
				const textBlockMaxHeightStyle = window.getComputedStyle(textBlock).getPropertyValue('--crm-timeline__editable-text_max-height');
				const textBlockMaxHeight = parseFloat(textBlockMaxHeightStyle.slice(0, -2));
				const parentComputedStyles = this.$refs.rootElement ? window.getComputedStyle(this.$refs.rootElement) : {};

				// eslint-disable-next-line no-unsafe-optional-chaining
				const parentHeight = this.$refs.rootElement?.offsetHeight - parseFloat(parentComputedStyles.paddingTop) - parseFloat(parentComputedStyles.paddingBottom);
				return parentHeight > textBlockMaxHeight;
			},
			isInViewport() {
				const rect = this.$el.getBoundingClientRect();
				return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
			},
			getTextEditor() {
				if (this.textEditor !== null) {
					return this.textEditor;
				}
				this.textEditor = new ui_textEditor.BasicEditor({
					removePlugins: ['BlockToolbar'],
					maxHeight: 600,
					content: this.bbcode,
					paragraphPlaceholder: this.$Bitrix.Loc.getMessage(main_core.Type.isPlainObject(this.copilotSettings) ? 'CRM_TIMELINE_ITEM_EDITABLE_DESCRIPTION_PLACEHOLDER_WITH_COPILOT' : null, crm_ai_nameService.NameService.copilotNameReplacement()),
					toolbar: [],
					floatingToolbar: ['bold', 'italic', 'underline', 'strikethrough', '|', 'link', 'copilot'],
					visualOptions: {
						colorBackground: 'transparent',
						borderWidth: '0px',
						blockSpaceInline: '0px',
						blockSpaceStack: '0px'
					},
					copilot: {
						copilotOptions: main_core.Type.isPlainObject(this.copilotSettings) ? this.copilotSettings : null,
						triggerBySpace: true
					},
					events: {
						onMetaEnter: () => {
							this.saveText();
						},
						onEscape: () => {
							this.cancelEditing();
						},
						onEmptyContentToggle: event => {
							this.isContentEmpty = event.getData().isEmpty;
						}
					}
				});
				return this.textEditor;
			},
			getHeaderText() {
				return this.currentHeaderText;
			},
			setHeaderText(headerText) {
				this.currentHeaderText = headerText;
				void this.$nextTick(() => {
					this.isLongText = this.checkIsLongText();
				});
			},
			setCopilotStatus(status) {
				this.currentCopilotStatus = status;
				void this.$nextTick(() => {
					this.isLongText = this.checkIsLongText();
				});
			}
		},
		watch: {
			text(newTextValue) {
				this.bbcode = newTextValue;
				void this.$nextTick(() => {
					this.isLongText = this.checkIsLongText();
				});
			},
			copilotStatus(newStatus) {
				this.currentCopilotStatus = newStatus;
			},
			headerText(newHeaderText) {
				this.currentHeaderText = newHeaderText;
			},
			isCollapsed(isCollapsed) {
				if (isCollapsed === false && this.isInViewport() === false) {
					requestAnimationFrame(() => {
						this.$el.scrollIntoView({
							behavior: 'smooth',
							block: 'center'
						});
					});
				}
			},
			isSaving(value) {
				if (this.textEditor !== null)
					// CommentContent uses this method as well
					{
						this.getTextEditor().setEditable(!value);
					}
			},
			isEdit(value) {
				if (value === false && this.textEditor !== null) {
					this.textEditor.destroy();
					this.textEditor = null;
				}
			}
		},
		mounted() {
			void this.$nextTick(() => {
				this.isLongText = this.checkIsLongText();
			});
		},
		template: `
		<div class="crm-timeline__editable-text_wrapper">
			<div ref="rootElement" :class="className">
				<button
					v-if="this.isCopied"
					ref="copyTextBtn"
					@click="copyText"
					class="crm-timeline__text_copy-btn"
				>
					<i class="crm-timeline__editable-text_fixed-icon --copy"></i>
				</button>
				<button
					v-if="isEdit && isEditable"
					:disabled="isSaving"
					@click="clearText"
					class="crm-timeline__editable-text_clear-btn"
				>
					<i class="crm-timeline__editable-text_fixed-icon --clear"></i>
				</button>
				<button
					v-if="!isEdit && isEditable && isEditButtonVisible"
					:disabled="isSaving"
					@click="startEditing"
					class="crm-timeline__editable-text_edit-btn"
				>
					<i class="crm-timeline__editable-text_edit-icon"></i>
				</button>
				<div class="crm-timeline__editable-text_inner">
					<div
						v-if="!isEditable && currentHeaderText !== ''"
						v-html="currentHeaderText"
						class="crm-timeline__editable-text_header-text"
					>
					</div>
					<CopilotHeader 
						ref="copilotHeader"
						v-if="currentCopilotStatus !== ''"
						:status="currentCopilotStatus"
						class="crm-timeline__editable-text-copilot-header"
					></CopilotHeader>
					<div class="crm-timeline__editable-text_content">
						<TextEditorComponent
							v-if="isEdit"
							:editor-instance="this.getTextEditor()"
						/>
						<span
							v-else
							ref="text"
							:class="textClassName"
						>
							<HtmlFormatterComponent :bbcode="bbcode" />
						</span>
					</div>
					<div
						v-if="isEdit"
						class="crm-timeline__editable-text_actions"
					>
						<div class="crm-timeline__editable-text_action">
							<Button
								v-bind="saveTextButtonProps"
								@click="saveText"
							/>
						</div>
						<div class="crm-timeline__editable-text_action">
							<Button
								v-bind="cancelEditingButtonProps"
								@click="cancelEditing"
							/>
						</div>
					</div>
				</div>
				<button
					v-if="isLongText && !isEdit"
					@click="toggleIsCollapsed"
					class="crm-timeline__editable-text_collapse-btn"
				>
					{{ expandButtonText }}
				</button>
			</div>
		</div>
	`
	};

	const TYPE_LOAD_FILES_BLOCK = 1;
	const TYPE_LOAD_TEXT_CONTENT = 2;

	/**
	 * @extends EditableDescription
	 */
	var CommentContent = ui_vue3.BitrixVue.cloneComponent(EditableDescription, {
		props: {
			filesCount: {
				type: Number,
				required: false,
				default: 0
			},
			hasInlineFiles: {
				type: Boolean,
				required: false,
				default: false
			},
			loadAction: {
				type: Object,
				required: false,
				default: () => ({})
			}
		},
		data() {
			return {
				...this.parentData(),
				value: this.text,
				oldValue: this.text,
				isTextLoaded: false,
				isTextChanged: false,
				isMoving: false,
				isFilesBlockDisplayed: this.filesCount > 0,
				filesHtmlBlock: null
			};
		},
		computed: {
			textWrapperClassName() {
				return ['crm-timeline__editable-text_content', {
					'--is-editor-loaded': this.isEdit
				}];
			}
		},
		methods: {
			startEditing() {
				this.isEdit = true;
				this.isCollapsed = true;
				this.$nextTick(() => {
					this.editor.show(this.$refs.editor);
				});
				this.emitEvent('Comment:StartEdit');
			},
			cancelEditing() {
				if (!this.isEdit || this.isSaving) {
					return;
				}
				this.value = this.oldValue;
				this.isEdit = false;
				if (this.filesHtmlBlock) {
					void main_core.Runtime.html(this.$refs.files, this.filesHtmlBlock).then(() => {
						this.registerImages(this.$refs.files);
						BX.LazyLoad.showImages();
						this.emitEvent('Comment:FinishEdit');
					});
				} else {
					this.emitEvent('Comment:FinishEdit');
				}
			},
			toggleIsCollapsed() {
				this.parentToggleIsCollapsed();
				if (!this.isTextLoaded) {
					this.executeLoadAction(TYPE_LOAD_TEXT_CONTENT, this.$refs.text);
				}
			},
			checkIsLongText() {
				const textBlock = this.$refs.text;
				if (!textBlock) {
					return false;
				}
				const textBlockMaxHeightStyle = window.getComputedStyle(textBlock).getPropertyValue('--crm-timeline__editable-text_max-height');
				const textBlockMaxHeight = parseFloat(textBlockMaxHeightStyle.slice(0, -2));
				const root = this.filesCount > 0 ? this.$refs.rootElement : this.$refs.rootWrapperElement;
				const parentComputedStyles = window.getComputedStyle(root);
				const parentHeight = root.offsetHeight - parseFloat(parentComputedStyles.paddingTop) - parseFloat(parentComputedStyles.paddingBottom);
				const isLongText = parentHeight > textBlockMaxHeight;
				return isLongText || this.hasInlineFiles;
			},
			saveContent() {
				const isSaveDisabled = this.saveTextButtonState === ButtonState.LOADING || !this.isEdit || !this.saveAction;
				if (isSaveDisabled) {
					return;
				}
				const content = this.editor.getContent();
				if (!main_core.Type.isStringFilled(content)) {
					return;
				}
				const htmlContent = this.editor.getHtmlContent();
				const attachmentList = this.editor.getAttachments();
				const attachmentAllowEditOptions = this.editor.getAttachmentsAllowEditOptions(attachmentList);
				this.isSaving = true;
				void this.executeSaveAction(content, attachmentList, attachmentAllowEditOptions).then(() => {
					this.isEdit = false;
					if (!this.isTextChanged) {
						this.oldValue = htmlContent;
						this.value = htmlContent;
					}
					this.$nextTick(() => {
						this.isLongText = this.checkIsLongText();
						this.executeLoadAction(TYPE_LOAD_FILES_BLOCK, this.$refs.files);
					});
					this.emitEvent('Comment:FinishEdit');
				}).finally(() => {
					this.isSaving = false;
				});
			},
			executeSaveAction(content, attachmentList, attachmentAllowEditOptions) {
				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.saveAction);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.id = actionDescription.actionParams.commentId;
				actionDescription.actionParams.fields = {
					COMMENT: content,
					ATTACHMENTS: attachmentList
				};
				if (Object.keys(attachmentAllowEditOptions).length > 0) {
					actionDescription.actionParams.CRM_TIMELINE_DISK_ATTACHED_OBJECT_ALLOW_EDIT = attachmentAllowEditOptions;
				}
				const action = new Action(actionDescription);
				return action.execute(this);
			},
			executeLoadAction(type, node) {
				if (this.filesCount === 0) {
					this.filesHtmlBlock = null;
					return;
				}
				if (!main_core.Type.isDomNode(node) || !this.loadAction) {
					return;
				}
				const actionDescription = main_core.Runtime.clone(this.loadAction);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.options = type;
				const action = new Action(actionDescription);
				this.showLoader(true);
				action.execute(this).then(response => {
					if (type === TYPE_LOAD_FILES_BLOCK) {
						this.filesHtmlBlock = response.data.html;
					} else if (type === TYPE_LOAD_TEXT_CONTENT) {
						this.isTextLoaded = true;
					}
					void main_core.Runtime.html(node, response.data.html).then(() => {
						this.registerImages(node);
						BX.LazyLoad.showImages();
						this.showLoader(false);
					});
				}).catch(() => {
					if (type === TYPE_LOAD_FILES_BLOCK) {
						this.filesHtmlBlock = null;
					} else if (type === TYPE_LOAD_TEXT_CONTENT) {
						this.isTextLoaded = false;
					}
					this.showLoader(false);
				});
			},
			registerImages(node) {
				if (!main_core.Type.isDomNode(node)) {
					return;
				}
				const idsList = [];
				const commentImages = node.querySelectorAll('[data-viewer-type="image"]');
				const commentImagesLength = commentImages.length;
				if (commentImagesLength > 0) {
					for (let i = 0; i < commentImagesLength; ++i) {
						if (main_core.Type.isDomNode(commentImages[i])) {
							commentImages[i].id += BX.util.getRandomString(4);
							idsList.push(commentImages[i].id);
						}
					}
					if (idsList.length > 0) {
						BX.LazyLoad.registerImages(idsList, null, {
							dataSrcName: 'thumbSrc'
						});
					}
				}
				BX.LazyLoad.registerImages(idsList, null, {
					dataSrcName: 'thumbSrc'
				});
			},
			showLoader(showLoader) {
				if (showLoader) {
					if (!this.loader) {
						this.loader = new main_loader.Loader({
							size: 20,
							mode: 'inline'
						});
					}
					this.loader.show(this.$refs.files);
				} else if (this.loader) {
					this.loader.hide();
				}
			},
			createEditor() {
				this.editor = new crm_timeline_editors_commentEditor.CommentEditor(this.loadAction.actionParams.commentId);
			},
			setIsMoving(flag = true) {
				this.isMoving = flag;
			},
			setIsFilesBlockDisplayed(flag = true) {
				this.isFilesBlockDisplayed = flag;
				if (this.filesHtmlBlock) {
					void main_core.Runtime.html(this.$refs.files, this.filesHtmlBlock).then(() => {
						this.registerImages(this.$refs.files);
						BX.LazyLoad.showImages();
					});
				}
			}
		},
		watch: {
			text(newValue) {
				this.value = newValue;
				this.oldValue = newValue;
				this.isTextChanged = true;
				this.$nextTick(() => {
					this.isLongText = this.checkIsLongText();
					this.executeLoadAction(TYPE_LOAD_FILES_BLOCK, this.$refs.files);
				});
			},
			value(newValue) {
				if (!this.isEdit) {
					return;
				}
				this.value = newValue;
				this.oldValue = newValue;
			},
			filesCount(newValue) {
				if (this.isMoving) {
					return;
				}
				this.isFilesBlockDisplayed = newValue > 0;
				this.$nextTick(() => {
					this.executeLoadAction(TYPE_LOAD_FILES_BLOCK, this.$refs.files);
				});
			}
		},
		mounted() {
			this.createEditor();
			this.$nextTick(() => {
				this.isLongText = this.checkIsLongText();
				this.executeLoadAction(TYPE_LOAD_FILES_BLOCK, this.$refs.files);
			});
		},
		updated() {
			this.createEditor();
		},
		template: `
		<div ref="rootWrapperElement" class="crm-timeline__editable-text_wrapper --comment">
			<div ref="rootElement" :class="className">
				<button
					v-if="isLongText && !isEdit && isEditable && isEditButtonVisible"
					:disabled="isSaving"
					@click="startEditing"
					class="crm-timeline__editable-text_edit-btn"
				>
					<i class="crm-timeline__editable-text_edit-icon"></i>
				</button>
				<div class="crm-timeline__editable-text_inner">
					<div :class="textWrapperClassName">
						<div
							v-if="isEdit"
							ref="editor"
							:disabled="!isEdit || isSaving"
							class="crm-timeline__editable-text_editor"
						></div>
						<span 
							v-else
							ref="text"
							class="crm-timeline__editable-text_text"
							v-html="value"
						>
						</span>
						<span
							v-if="!isEdit && !isLongText && isEditable && isEditButtonVisible"
							@click="startEditing"
							class="crm-timeline__editable-text_text-edit-icon"
						>
							<span class="crm-timeline__editable-text_edit-icon"></span>
						</span>
					</div>
					<div
						v-if="isEdit"
						class="crm-timeline__editable-text_actions"
					>
						<div class="crm-timeline__editable-text_action">
							<Button
								v-bind="saveTextButtonProps"
								@click="saveContent"
							/>
						</div>
						<div class="crm-timeline__editable-text_action">
							<Button
								v-bind="cancelEditingButtonProps"
								@click="cancelEditing"
							/>
						</div>
					</div>
				</div>
				<button
					v-if="isLongText && !isEdit"
					@click="toggleIsCollapsed"
					class="crm-timeline__editable-text_collapse-btn"
				>
					{{ expandButtonText }}
				</button>
			</div>
			<div
				v-if="!isEdit && isFilesBlockDisplayed"
				ref="files"
				class="crm-timeline__comment_files_wrapper"
				:class="{'--long-comment': isLongText}"
				v-html="filesHtmlBlock"
			>
			</div>
		</div>
	`
	});

	const STATE_LOADING = 'loading';
	const STATE_PROCESSED = 'processed';
	const STATE_UNPROCESSED = 'unprocessed';
	const CallScoringPill = {
		props: {
			title: {
				type: String,
				required: false,
				default: ''
			},
			value: {
				type: String,
				required: false,
				default: ''
			},
			state: {
				type: String,
				required: false,
				default: STATE_UNPROCESSED
			},
			action: Object | null
		},
		inject: ['isReadOnly'],
		computed: {
			className() {
				return ['crm-timeline__call-scoring-pill', {
					'--readonly': this.isPillReadonly
				}];
			},
			renderValue() {
				switch (this.state) {
					case STATE_LOADING:
						return '<span class="loader"></span>';
					case STATE_PROCESSED:
						return main_core.Text.encode(this.value);
					case STATE_UNPROCESSED:
					default:
						return '<span class="arrow">&nbsp;</span>';
				}
			},
			isPillReadonly() {
				return this.isReadOnly || !this.action;
			}
		},
		methods: {
			executeAction() {
				if (this.isPillReadonly) {
					return;
				}
				const action = new Action(this.action);
				void action.execute(this);
			}
		},
		template: `
		<div
			:class='className'
			@click='executeAction'
		>
			<div class='crm-timeline__call-scoring-pill-left'>{{ this.title }}</div>
			<div class='crm-timeline__call-scoring-pill-separator'></div>
			<div class='crm-timeline__call-scoring-pill-right' v-html='renderValue'></div>
		</div>
	`
	};

	const CHART_WIDTH = 65;
	const CHART_LINE_SIZE = 9;

	// @vue/component
	const CallScoringV2 = {
		props: {
			scriptTitle: {
				type: String,
				required: true
			},
			score: {
				type: Number,
				required: true
			},
			scoreDescription: {
				type: String,
				required: true
			},
			scoreLowBorder: {
				type: Number,
				required: true
			},
			scoreHighBorder: {
				type: Number,
				required: true
			},
			action: {
				type: [Object, null],
				default: null
			}
		},
		chart: null,
		computed: {
			integerScore() {
				return main_core.Text.toInteger(this.score);
			},
			chartColor() {
				const highBorder = main_core.Text.toInteger(this.scoreHighBorder);
				if (this.integerScore >= highBorder) {
					return ui_progressround.ProgressRound.Color.SUCCESS;
				}
				const lowBorder = main_core.Text.toInteger(this.scoreLowBorder);
				if (this.integerScore <= lowBorder) {
					return ui_progressround.ProgressRound.Color.DANGER;
				}
				return ui_progressround.ProgressRound.Color.PRIMARY;
			}
		},
		watch: {
			score() {
				this.updateChart();
			}
		},
		mounted() {
			this.createChart();
		},
		beforeUnmount() {
			if (this.chart) {
				this.chart.destroy();
			}
		},
		methods: {
			createChart() {
				this.chart = new ui_progressround.ProgressRound({
					width: CHART_WIDTH,
					lineSize: CHART_LINE_SIZE,
					statusType: ui_progressround.ProgressRound.Status.INCIRCLE,
					value: this.integerScore,
					color: this.chartColor
				});
				this.chart.renderTo(this.$refs.chartContainer);
			},
			updateChart() {
				if (!this.chart) {
					this.createChart();
					return;
				}
				this.chart.setColor(this.chartColor);
				this.chart.update(this.integerScore);
			},
			editScript() {
				const assessmentSettingsId = this.action?.actionParams?.assessmentSettingsId;
				if (!main_core.Type.isInteger(assessmentSettingsId)) {
					return;
				}
				crm_router.Router.openSlider(`/crm/copilot-call-assessment/details/${assessmentSettingsId}/`, {
					width: 700,
					cacheable: false
				});
			},
			showDetails() {
				if (main_core.Type.isObject(this.action)) {
					void new Action(this.action).execute(this);
				}
			}
		},
		// language=Vue
		template: `
		<div class="crm-timeline__call-scoring-v2">
			<div 
				class="crm-timeline__call-scoring-v2-chart"
				ref="chartContainer"
			></div>
			<div class="crm-timeline__call-scoring-v2-content">
				<div class="body">
					<div class="script-layout">
						<div class="script-layout-header">
							{{ $Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_CALL_SCORING_SCRIPT_TITLE') }}
						</div>
						<div 
							class="script-layout-title"
							@click.prevent="editScript"
						>{{ scriptTitle }}</div>
					</div>
					<div>
						<span class="summary-text">{{ scoreDescription }}</span>
						<span
							class="details-link"
							@click.prevent="showDetails"
						>
							{{ $Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_CALL_SCORING_DETAILS') }}
						</span>
					</div>
				</div>
			</div>
		</div>
	`
	};

	const CallScoring = {
		props: {
			userName: String,
			userAvatarUrl: String,
			scoringData: Object | null,
			action: Object | null
		},
		inject: ['isReadOnly'],
		computed: {
			className() {
				const assessment = main_core.Text.toInteger(this.scoringData?.ASSESSMENT);
				const highBorder = main_core.Text.toInteger(this.scoringData?.HIGH_BORDER);
				const lowBorder = main_core.Text.toInteger(this.scoringData?.LOW_BORDER);
				return {
					'crm-timeline__call-scoring': true,
					'--success': assessment >= highBorder,
					'--failed': assessment <= lowBorder
				};
			},
			assessmentScriptClassName() {
				return ['crm-timeline__call-scoring-assessment-script', {
					'--readonly': this.isContentReadonly
				}];
			},
			assessmentPillClassName() {
				return ['crm-timeline__call-scoring-assessment-pill', {
					'--readonly': this.isContentReadonly
				}];
			},
			isContentReadonly() {
				return this.isReadOnly || !this.action;
			},
			renderUserAvatarElement() {
				return new ui_avatar.AvatarRoundGuest({
					size: 26,
					userName: this.userName,
					userpicPath: this.userAvatarUrl,
					baseColor: '#7fdefc',
					borderColor: '#9dcf00'
				}).getContainer().outerHTML;
			}
		},
		methods: {
			executeAction() {
				if (this.isContentReadonly) {
					return;
				}
				const action = new Action(this.action);
				void action.execute(this);
			}
		},
		template: `
		<div :class='className'>
			<div class='crm-timeline__call-scoring-wrapper'>
				<div class='crm-timeline__call-scoring-responsible'>
					<div class='crm-timeline__call-scoring-title'>
						{{ this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_CALL_SCORING_RESPONSIBLE_TITLE') }}
					</div>
					<div class='crm-timeline__call-scoring-responsible-content'>
						<div class='responsible-user-avatar' v-html="renderUserAvatarElement"></div>
						<div class='responsible-user-name'>{{ this.userName }}</div>
					</div>
				</div>
				<div class='crm-timeline__line-div'></div>
				<div class='crm-timeline__call-scoring-assessment'>
					<div class='crm-timeline__call-scoring-assessment-wrapper'>
						<!--
						<img 
							class='copilot-avatar' 
							src='/bitrix/js/crm/timeline/item/src/images/crm-timelime__copilot-avatar.svg' 
							alt='copilot-avatar'
						>
						-->
						<div
							:class='assessmentPillClassName'
							@click='executeAction'
						>
							<span class="value">{{ this.scoringData?.ASSESSMENT }}</span>
							<div class="percent"></div>
						</div>
						<div class='script-layout'>
							<div class='crm-timeline__call-scoring-title'>
								{{ this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_CALL_SCORING_SCRIPT_TITLE') }}
							</div>
							<div 
								:class='assessmentScriptClassName'
								@click='executeAction'
							>
								{{ this.scoringData?.TITLE }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
	};

	let TextColor = /*#__PURE__*/babelHelpers.createClass(function TextColor() {
		babelHelpers.classCallCheck(this, TextColor);
	});
	babelHelpers.defineProperty(TextColor, "GREEN", 'green');
	babelHelpers.defineProperty(TextColor, "PURPLE", 'purple');
	babelHelpers.defineProperty(TextColor, "BASE_50", 'base-50');
	babelHelpers.defineProperty(TextColor, "BASE_60", 'base-60');
	babelHelpers.defineProperty(TextColor, "BASE_70", 'base-70');
	babelHelpers.defineProperty(TextColor, "BASE_90", 'base-90');

	let TextWeight = /*#__PURE__*/babelHelpers.createClass(function TextWeight() {
		babelHelpers.classCallCheck(this, TextWeight);
	});
	babelHelpers.defineProperty(TextWeight, "NORMAL", 'normal');
	babelHelpers.defineProperty(TextWeight, "MEDIUM", 'medium');
	babelHelpers.defineProperty(TextWeight, "BOLD", 'bold');

	let TextSize = /*#__PURE__*/babelHelpers.createClass(function TextSize() {
		babelHelpers.classCallCheck(this, TextSize);
	});
	babelHelpers.defineProperty(TextSize, "XS", 'xs');
	babelHelpers.defineProperty(TextSize, "SM", 'sm');
	babelHelpers.defineProperty(TextSize, "MD", 'md');

	let TextDecoration = /*#__PURE__*/babelHelpers.createClass(function TextDecoration() {
		babelHelpers.classCallCheck(this, TextDecoration);
	});
	babelHelpers.defineProperty(TextDecoration, "NONE", 'none');
	babelHelpers.defineProperty(TextDecoration, "UNDERLINE", 'underline');
	babelHelpers.defineProperty(TextDecoration, "DOTTED", 'dotted');
	babelHelpers.defineProperty(TextDecoration, "DASHED", 'dashed');

	var Text = {
		props: {
			value: String | Number,
			title: {
				type: String,
				required: false,
				default: ''
			},
			color: {
				type: String,
				required: false,
				default: ''
			},
			weight: {
				type: String,
				required: false,
				default: 'normal'
			},
			size: {
				type: String,
				required: false,
				default: 'md'
			},
			multiline: {
				type: Boolean,
				required: false,
				default: false
			},
			decoration: {
				type: String,
				required: false,
				default: ''
			}
		},
		computed: {
			className() {
				return ['crm-timeline__text-block', this.colorClassname, this.weightClassname, this.sizeClassname, this.decorationClassname];
			},
			colorClassname() {
				const upperCaseColorProp = this.color ? this.color.toUpperCase() : '';
				const color = TextColor[upperCaseColorProp] ?? '';
				return `--color-${color}`;
			},
			weightClassname() {
				const upperCaseWeightProp = this.weight ? this.weight.toUpperCase() : '';
				const weight = TextWeight[upperCaseWeightProp] ?? TextWeight.NORMAL;
				return `--weight-${weight}`;
			},
			sizeClassname() {
				const upperCaseSizeProp = this.size ? this.size.toUpperCase() : '';
				const size = TextSize[upperCaseSizeProp] ?? TextSize.SM;
				return `--size-${size}`;
			},
			decorationClassname() {
				const upperCaseDecorationProp = this.decoration ? this.decoration.toUpperCase() : '';
				if (!upperCaseDecorationProp) {
					return '';
				}
				const decoration = TextDecoration[upperCaseDecorationProp] ?? TextDecoration.NONE;
				return `--decoration-${decoration}`;
			},
			encodedText() {
				let text = main_core.Text.encode(this.value);
				if (this.multiline) {
					text = text.replace(/\n/g, '<br />');
				}
				return text;
			}
		},
		template: `
		<span
			:title="title"
			:class="className"
			v-html="encodedText"
		></span>
	`
	};

	var DateBlock = {
		props: {
			withTime: {
				type: Boolean,
				required: false,
				default: true
			},
			format: {
				type: String,
				required: false,
				default: null
			},
			duration: {
				type: Number,
				required: false,
				default: null
			}
		},
		extends: Text,
		methods: {
			getFormattedDate() {
				const datetimeConverter = this.getDatetimeConverter();
				if (this.format) {
					return datetimeConverter.toFormatString(this.format);
				}
				const options = {
					delimiter: ', ',
					withDayOfWeek: true,
					withFullMonth: true
				};
				return this.withTime ? datetimeConverter.toDatetimeString(options) : datetimeConverter.toDateString();
			},
			getDatetimeConverter() {
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.value).toUserTime();
			},
			getDatetimeConverterWithDuration() {
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.value + this.duration).toUserTime();
			}
		},
		computed: {
			encodedText() {
				const formattedDate = this.getFormattedDate();
				if (!main_core.Type.isNumber(this.duration)) {
					return main_core.Text.encode(formattedDate);
				}
				const converterWithDuration = this.getDatetimeConverterWithDuration();
				return main_core.Text.encode(`${formattedDate}-${converterWithDuration.toTimeString()}`);
			}
		},
		template: Text.template
	};

	const DatePillColor = Object.freeze({
		DEFAULT: 'default',
		WARNING: 'warning',
		NONE: 'none'
	});
	const PillStyle = Object.freeze({
		DEFAULT: 'pill',
		INLINE_GROUP: 'pill-inline-group'
	});
	var DatePill = {
		props: {
			value: Number,
			withTime: Boolean,
			duration: {
				type: Number,
				required: false,
				default: null
			},
			backgroundColor: {
				type: String,
				required: false,
				default: DatePillColor.DEFAULT,
				validator(value) {
					return Object.values(DatePillColor).includes(value);
				}
			},
			action: Object | null,
			styleValue: String
		},
		inject: ['isReadOnly'],
		data() {
			return {
				currentTimestamp: this.value,
				initialTimestamp: this.value
			};
		},
		computed: {
			className() {
				return ['crm-timeline__date-pill', `--color-${this.backgroundColor}`, {
					'--readonly': this.isPillReadonly
				}, {
					'--inline-group': this.styleValue === PillStyle.INLINE_GROUP
				}];
			},
			formattedDate() {
				if (!this.currentTimestamp) {
					return null;
				}
				const converter = this.getDatetimeConverter();
				let result = converter.toDatetimeString({
					withDayOfWeek: true,
					withFullMonth: true,
					delimiter: ', '
				});
				if (main_core.Type.isNumber(this.duration)) {
					const converterWithDuration = this.getDatetimeConverterWithDuration();
					result = `${result}-${converterWithDuration.toTimeString()}`;
				}
				return result;
			},
			currentDateInSiteFormat() {
				return main_date.DateTimeFormat.format(this.withTime ? crm_timeline_tools.DatetimeConverter.getSiteDateTimeFormat() : crm_timeline_tools.DatetimeConverter.getSiteDateFormat(), this.getDatetimeConverter().getValue());
			},
			calendarParams() {
				return {
					value: this.currentDateInSiteFormat,
					bTime: this.withTime,
					bHideTime: !this.withTime,
					bSetFocus: false
				};
			},
			isPillReadonly() {
				return this.isReadOnly || !this.action;
			}
		},
		watch: {
			value(newDate)
			// update date from push
			{
				this.initialTimestamp = newDate;
				this.currentTimestamp = newDate;
			}
		},
		methods: {
			openCalendar(event) {
				if (this.isPillReadonly) {
					return;
				}

				// eslint-disable-next-line @bitrix24/bitrix24-rules/no-bx
				BX.calendar({
					node: event.target,
					callback_after: newDate => {
						// we assume that user selected time in his timezone
						this.currentTimestamp = main_date.Timezone.UserTime.toUTCTimestamp(newDate);
						this.executeAction();
					},
					...this.calendarParams
				});
			},
			executeAction() {
				if (!this.action) {
					return;
				}
				if (this.currentTimestamp === this.initialTimestamp) {
					return;
				}

				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.action);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.value = this.currentDateInSiteFormat;
				actionDescription.actionParams.valueTs = this.currentTimestamp;
				const action = new Action(actionDescription);
				action.execute(this);
				this.initialTimestamp = this.currentTimestamp;
				this.$emit('onChange', this.initialTimestamp);
			},
			getDatetimeConverter() {
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.currentTimestamp).toUserTime();
			},
			getDatetimeConverterWithDuration() {
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.currentTimestamp + this.duration).toUserTime();
			}
		},
		template: `
		<span
			:class="className"
			@click="openCalendar"
		>
			<span>
				{{ formattedDate }}
			</span>
			<span class="crm-timeline__date-pill_caret"></span>
		</span>`
	};

	var Link = {
		props: {
			text: String,
			action: Object,
			title: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			},
			bold: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: 'md'
			},
			decoration: {
				type: String,
				default: ''
			},
			icon: {
				type: String,
				default: ''
			},
			rowLimit: {
				type: Number,
				default: 0
			}
		},
		computed: {
			href() {
				if (!this.action) {
					return null;
				}
				const action = new Action(this.action);
				if (action.isRedirect()) {
					return action.getValue();
				}
				return null;
			},
			linkAttrs() {
				if (!this.action) {
					return {};
				}
				const action = new Action(this.action);
				if (!action.isRedirect()) {
					return {};
				}
				const attrs = {
					href: action.getValue()
				};
				const target = action.getActionParam('target');
				if (target) {
					attrs.target = target;
				}
				return attrs;
			},
			className() {
				return ['crm-timeline__card_link', this.colorClassName, this.boldClassName, this.sizeClassname, this.decorationClassName, this.rowLimitClassName];
			},
			colorClassName() {
				const upperCaseColorProp = this.color ? this.color.toUpperCase() : '';
				const color = TextColor[upperCaseColorProp] ?? '';
				return `--color-${color}`;
			},
			boldClassName() {
				return this.bold ? '--bold' : '';
			},
			sizeClassname() {
				const upperCaseSizeProp = this.size ? this.size.toUpperCase() : '';
				const size = TextSize[upperCaseSizeProp] ?? TextSize.SM;
				return `--size-${size}`;
			},
			decorationClassName() {
				const upperCaseDecorationProp = this.decoration ? this.decoration.toUpperCase() : '';
				if (!upperCaseDecorationProp) {
					return '';
				}
				const decoration = TextDecoration[upperCaseDecorationProp] ?? TextDecoration.NONE;
				return `--decoration-${decoration}`;
			},
			iconClassName() {
				if (!this.icon) {
					return [];
				}
				return ['crm-timeline__card_link_icon', `--code-${this.icon}`];
			},
			rowLimitClassName() {
				return this.rowLimit ? '--limit' : '';
			},
			rowLimitStyle() {
				if (this.rowLimit && this.rowLimit > 0) {
					return {
						'-webkit-line-clamp': this.rowLimit
					};
				}
				return {};
			}
		},
		methods: {
			executeAction() {
				if (this.action) {
					const action = new Action(this.action);
					action.execute(this);
				}
			}
		},
		template: `<a
			v-if="href"
			v-bind="linkAttrs"
			:class="className"
			:title="title"
			:style="rowLimitStyle"
		>{{text}}<span v-if="icon" :class="iconClassName"></span>
		</a>
		<span
			v-else
			@click="executeAction"
			:class="className"
			:title="title"
			:style="rowLimitStyle"
		>{{text}}<span v-if="icon" :class="iconClassName"></span>
		</span>`
	};

	var EditableDate = {
		components: {
			Link
		},
		props: {
			value: Number,
			withTime: Boolean,
			action: Object
		},
		data() {
			return {
				currentDate: this.value,
				initialDate: this.value,
				actionTimeoutId: null
			};
		},
		computed: {
			currentDateObject() {
				return this.currentDate ? new Date(this.currentDate * 1000) : null;
			},
			currentDateInSiteFormat() {
				if (!this.currentDateObject) {
					return null;
				}
				return main_date.DateTimeFormat.format(crm_timeline_tools.DatetimeConverter.getSiteDateFormat(), this.currentDateObject);
			},
			textProps() {
				return {
					text: this.currentDateInSiteFormat
				};
			}
		},
		methods: {
			openCalendar(event) {
				this.cancelScheduledActionExecution();

				// eslint-disable-next-line bitrix-rules/no-bx
				BX.calendar({
					node: event.target,
					value: this.currentDateInSiteFormat,
					bTime: this.withTime,
					bHideTime: !this.withTime,
					bSetFocus: false,
					callback_after: newDate => {
						this.currentDate = Math.round(newDate.getTime() / 1000);
						this.scheduleActionExecution();
					}
				});
			},
			scheduleActionExecution() {
				this.cancelScheduledActionExecution();
				this.actionTimeoutId = setTimeout(this.executeAction.bind(this), 3 * 1000);
			},
			cancelScheduledActionExecution() {
				if (this.actionTimeoutId) {
					clearTimeout(this.actionTimeoutId);
					this.actionTimeoutId = null;
				}
			},
			executeAction() {
				if (!this.action) {
					return;
				}
				if (this.currentDate === this.initialDate) {
					return;
				}

				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.action);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.value = this.currentDateObject;
				const action = new Action(actionDescription);
				action.execute(this);
				this.initialDate = this.currentDate;
			}
		},
		template: `<Link @click="openCalendar" v-bind="textProps"></Link>`
	};

	var EditableText = ui_vue3.BitrixVue.cloneComponent(Text, {
		components: {
			Text
		},
		props: {
			action: Object
		},
		data() {
			return {
				isEdit: false,
				currentValue: this.value,
				initialValue: this.value,
				actionTimeoutId: null
			};
		},
		computed: {
			textProps() {
				return {
					...this.$props,
					value: this.currentValue
				};
			}
		},
		methods: {
			enableEdit() {
				this.cancelScheduledActionExecution();
				this.isEdit = true;
				this.$nextTick(() => {
					this.$refs.input.focus();
				});
			},
			disableEdit() {
				this.isEdit = false;
				this.scheduleActionExecution();
			},
			scheduleActionExecution() {
				this.cancelScheduledActionExecution();
				this.actionTimeoutId = setTimeout(this.executeAction.bind(this), 3 * 1000);
			},
			cancelScheduledActionExecution() {
				if (this.actionTimeoutId) {
					clearTimeout(this.actionTimeoutId);
					this.actionTimeoutId = null;
				}
			},
			executeAction() {
				if (!this.action || this.currentValue === this.initialValue) {
					return;
				}

				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.action);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.value = this.currentValue;
				const action = new Action(actionDescription);
				action.execute(this);
				this.initialValue = this.currentValue;
			}
		},
		template: `
			<input
				v-if="isEdit"
				ref="input"
				type="text"
				v-model.trim="currentValue"
				@focusout="disableEdit"
			>
			<Text
				v-else
				v-bind="textProps"
				@click="enableEdit"
			/>
		`
	});

	let ErrorType = /*#__PURE__*/babelHelpers.createClass(function ErrorType() {
		babelHelpers.classCallCheck(this, ErrorType);
	});
	babelHelpers.defineProperty(ErrorType, "AI", 'ai');

	const ErrorBlock = {
		props: {
			title: {
				type: String,
				required: true,
				default: ''
			},
			description: {
				type: String,
				required: true,
				default: ''
			},
			closable: {
				type: Boolean,
				required: true,
				default: false
			},
			type: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				isClosable: this.closable
			};
		},
		computed: {
			iconClassname() {
				return {
					'crm-timeline__error-block__header-icon': true,
					'--ai': this.type === ErrorType.AI
				};
			},
			encodedTitle() {
				return main_core.Text.encode(this.title);
			},
			encodedDescription() {
				return main_core.Text.encode(this.description);
			}
		},
		methods: {
			closeBlock() {
				const blockEl = this.$refs.rootElement;
				if (main_core.Type.isDomNode(blockEl)) {
					main_core.Dom.addClass(blockEl, '--hidden');
					setTimeout(() => {
						main_core.Dom.remove(blockEl);
					}, 700);
				}
			}
		},
		template: `
		<div ref="rootElement" class="crm-timeline__error-block_wrapper">
			<div class="crm-timeline__error-block">
				<div class="crm-timeline__error-block__header">
					<div :class="iconClassname"></div>
					<div
						class="crm-timeline__error-block__header-title"
						v-html="encodedTitle"
					></div>
					<button
						v-if="isClosable"
						@click="closeBlock"
						class="crm-timeline__error-block_close-btn"
					></button>
				</div>
				<div
					class="crm-timeline__error-block__description"
					v-html="encodedDescription"
				></div>
			</div>
		</div>
	`
	};

	let LogoType = /*#__PURE__*/babelHelpers.createClass(function LogoType() {
		babelHelpers.classCallCheck(this, LogoType);
	});
	babelHelpers.defineProperty(LogoType, "CALL_AUDIO_PLAY", 'call-play-record');
	babelHelpers.defineProperty(LogoType, "CALL_AUDIO_PAUSE", 'call-pause-record');

	// @vue/component
	const TimelineAudio = crm_audioPlayer.AudioPlayer.getComponent({
		methods: {
			changeLogoIcon(icon) {
				if (!this.$root || !this.$root.getLogo) {
					return;
				}
				const logo = this.$root.getLogo();
				if (!logo) {
					return;
				}
				logo.setIcon(icon);
			},
			audioEventRouterWrapper(eventName, event) {
				this.audioEventRouter(eventName, event);
				if (eventName === 'play') {
					this.changeLogoIcon(LogoType.CALL_AUDIO_PAUSE);
				}
				if (eventName === 'pause') {
					this.changeLogoIcon(LogoType.CALL_AUDIO_PLAY);
				}
			}
		}
	});

	var File = {
		components: {
			TimelineAudio
		},
		props: {
			id: Number,
			text: String,
			href: String,
			size: Number,
			attributes: Object,
			hasAudioPlayer: {
				type: Boolean,
				required: false,
				default: false
			}
		},
		computed: {
			fileExtension() {
				return this.text.split('.').slice(-1)[0] || '';
			},
			titleFirstPart() {
				return this.text.slice(0, -this.titleLastPartSize);
			},
			titleLastPart() {
				return this.text.slice(-this.titleLastPartSize);
			},
			titleLastPartSize() {
				return 10;
			}
		},
		mounted() {
			const fileIcon = new ui_icons_generator.FileIcon({
				name: this.fileExtension
			});
			fileIcon.renderTo(this.$refs.icon);
		},
		template: `
		<div class="crm-timeline__file">
			<div ref="icon" class="crm-timeline__file_icon"></div>
			<a
				target="_blank"
				class="crm-timeline__file_title crm-timeline__card_link"
				v-if="href"
				:title="text"
				:href="href"
				v-bind="attributes"
				ref="title"
			>
				<span>{{ titleFirstPart }}</span>
				<span>{{ titleLastPart }}</span>
			</a>
			<div class="crm-timeline__file_audio-player" v-if="this.hasAudioPlayer">
				<TimelineAudio :id="id" :mini="true" :src="href"></TimelineAudio>
			</div>
		</div>
		`
	};

	const FileList = {
		components: {
			File,
			BIcon: ui_iconSet_api_vue.BIcon
		},
		props: {
			title: {
				type: String,
				required: false,
				default: ''
			},
			numberOfFiles: {
				type: Number,
				required: false,
				default: 0
			},
			files: {
				type: Array,
				required: true,
				default: []
			},
			updateParams: {
				type: Object,
				required: false,
				default: {}
			},
			visibleFilesNumber: {
				type: Number,
				required: false,
				default: 5
			}
		},
		inject: ['isReadOnly'],
		data() {
			return {
				visibleFilesAmount: this.visibleFilesNumber
			};
		},
		computed: {
			isEditable() {
				return Object.keys(this.updateParams).length > 0 && !this.isReadOnly;
			},
			visibleFiles() {
				return this.files.slice(0, this.visibleFilesAmount);
			},
			editFilesBtnClassname() {
				return ['crm-timeline__file-list-btn', {
					'--disabled': !this.isEditable
				}];
			},
			expandFileListBtnTitle() {
				return this.isAllFilesVisible ? this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_FILE_LIST_COLLAPSE') : this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_FILE_LIST_EXPAND');
			},
			editFilesBtnIcon() {
				return ui_iconSet_api_vue.Set.PENCIL_40;
			},
			addVisibleFilesBtnIcon() {
				return ui_iconSet_api_vue.Set.CHEVRON_DOWN;
			},
			isAllFilesVisible() {
				return this.visibleFilesAmount === this.numberOfFiles;
			},
			isShowExpandFileListBtn() {
				return this.numberOfFiles > this.visibleFilesNumber;
			},
			expandBtnIconClassname() {
				return ['crm-timeline__file-list-btn-icon', {
					'--upended': this.isAllFilesVisible
				}];
			}
		},
		methods: {
			fileProps(file) {
				return {
					id: file.id,
					text: file.name,
					href: file.viewUrl,
					size: file.size,
					attributes: file.attributes,
					hasAudioPlayer: file.hasAudioPlayer
				};
			},
			showFileUploaderPopup() {
				if (!this.isEditable) {
					return;
				}
				const popup = new crm_activity_fileUploaderPopup.FileUploaderPopup(this.updateParams);
				popup.show();
			},
			handleShowFilesBtnClick() {
				if (this.isAllFilesVisible) {
					this.collapseFileList();
				} else {
					this.expandFileList();
				}
			},
			expandFileList() {
				this.visibleFilesAmount = this.numberOfFiles;
			},
			collapseFileList() {
				this.visibleFilesAmount = this.visibleFilesNumber;
			}
		},
		template: `
			<div class="crm-timeline__file-list-wrapper">
				<div class="crm-timeline__file-list-container">
					<div
						class="crm-timeline__file-container"
						v-for="file in visibleFiles"
					>
						<File :key="file.id" v-bind="fileProps(file)"></File>
					</div>
				</div>
				<footer class="crm-timeline__file-list-footer">
					<div
						v-if="isShowExpandFileListBtn"
						class="crm-timeline__file-list-btn-container"
					>
						<button
							class="crm-timeline__file-list-btn"
							@click="handleShowFilesBtnClick"
						>
							<span class="crm-timeline__file-list-btn-text">{{expandFileListBtnTitle}}</span>
							<i :class="expandBtnIconClassname">
								<BIcon :name="addVisibleFilesBtnIcon" :size="18"></BIcon>
							</i>
						</button>
					</div>
					<div
						v-if="isEditable"
						class="crm-timeline__file-list-btn-container"
					>
						<button
							v-if="title !== '' || numberOfFiles > 0"
							@click="showFileUploaderPopup"
							:class="editFilesBtnClassname"
						>
							<span class="crm-timeline__file-list-btn-text">{{ title }}</span>
							<i class="crm-timeline__file-list-btn-icon">
								<BIcon :name="editFilesBtnIcon" :size="18"></BIcon>
							</i>
							<i ref="edit-icon" class="crm-timeline__file-list-btn-icon"></i>
					</button>
					</div>
				</footer>
			</div>
		`
	};

	// @vue/component
	var GroupBlocks = {
		props: {
			blocks: {
				type: Object,
				required: true,
				validator: value => main_core.Type.isObject(value) && Object.values(value).every(block => main_core.Type.isObject(block))
			}
		},
		computed: {
			visibleBlocks() {
				if (!main_core.Type.isObject(this.blocks)) {
					return [];
				}
				return Object.keys(this.blocks).map(id => ({
					id,
					...this.blocks[id]
				})).filter(item => item.scope !== 'mobile');
			}
		},
		mounted() {
			const blocks = this.$refs.blocks;
			this.visibleBlocks.forEach((block, index) => {
				if (main_core.Type.isDomNode(blocks[index].$el)) {
					blocks[index].$el.setAttribute('data-id', block.id);
				} else {
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
			getBlockById(blockId) {
				const blockIndex = this.visibleBlocks.findIndex(block => block.id === blockId);
				if (blockIndex === -1) {
					return null;
				}
				return this.$refs.blocks[blockIndex] || null;
			}
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
	`
	};

	const InfoGroup = {
		props: {
			blocks: {
				type: Object,
				required: false,
				default: () => ({})
			}
		},
		template: `
		<table class="crm-timeline__info-group">
			<tbody>
				<tr
					v-for="({title, block}, id) in blocks"
					:key="id"
					class="crm-timeline__info-group_block"
				>
					<td
						:title="title"
						class="crm-timeline__info-group_block-title"
					>
						{{title}}
					</td>
					<td class="crm-timeline__info-group_block-content">
						<component
							:is="block.rendererName"
							v-bind="block.properties"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	`
	};

	const SAVE_OFFSETS_REQUEST_DELAY$1 = 1000;
	var ItemSelector = {
		props: {
			valuesList: {
				type: Array,
				required: true,
				default: []
			},
			value: {
				type: Array,
				default: []
			},
			saveAction: {
				type: Object,
				required: true
			},
			compactMode: {
				type: Boolean,
				default: false
			},
			icon: {
				type: String,
				default: null,
				required: false
			}
		},
		methods: {
			onItemSelectorValueChange(event) {
				main_core.Runtime.debounce(() => {
					const data = event.getData();
					if (data) {
						this.executeSaveAction(data.value);
					}
				}, SAVE_OFFSETS_REQUEST_DELAY$1, this)();
			},
			executeSaveAction(items) {
				if (!this.saveAction) {
					return;
				}
				if (this.value.sort().toString() === items.sort().toString()) {
					return;
				}

				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.saveAction);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.value = items;
				const action = new Action(actionDescription);
				void action.execute(this);
			}
		},
		mounted() {
			this.itemSelector = new crm_field_itemSelector.ItemSelector({
				target: this.$el,
				valuesList: this.valuesList,
				selectedValues: this.value,
				compactMode: this.compactMode ?? false,
				icon: main_core.Type.isStringFilled(this.icon) ? this.icon : null
			});
			main_core_events.EventEmitter.subscribe(this.itemSelector, crm_field_itemSelector.Events.EVENT_ITEMSELECTOR_VALUE_CHANGE, this.onItemSelectorValueChange);
		},
		beforeUnmount() {
			main_core_events.EventEmitter.unsubscribe(this.itemSelector, crm_field_itemSelector.Events.EVENT_ITEMSELECTOR_VALUE_CHANGE, this.onItemSelectorValueChange);
		},
		computed: {
			styles() {
				if (this.compactMode) {
					return {};
				}
				return {
					width: '100%'
				};
			}
		},
		template: '<div :style="styles"></div>'
	};

	var LineOfTextBlocks = {
		props: {
			blocks: Object,
			delimiter: String,
			button: Object
		},
		mounted() {
			const blocks = this.$refs.blocks;
			this.visibleBlocks.forEach((block, index) => {
				if (main_core.Type.isDomNode(blocks[index].$el)) {
					blocks[index].$el.setAttribute('data-id', block.id);
				} else {
					throw new Error(`Vue component "${block.rendererName}" was not found`);
				}
			});
		},
		methods: {
			isShowDelimiter(index, length) {
				return main_core.Type.isString(this.delimiter) && !this.isLastElement(index, length);
			},
			isLastElement(index, length) {
				return index === length - 1;
			},
			getLastElement() {
				const lastKey = Object.keys(this.blocks)[Object.keys(this.blocks).length - 1];
				return this.blocks[lastKey] ?? null;
			}
		},
		computed: {
			visibleBlocks() {
				if (!main_core.Type.isObject(this.blocks)) {
					return [];
				}
				const blocks = Object.keys(this.blocks).map(id => ({
					id,
					...this.blocks[id]
				})).filter(item => item.scope !== 'mobile');
				if (main_core.Type.isObject(this.button)) {
					blocks.push({
						id: 'button',
						...this.button
					});
				}
				return blocks;
			},
			formattedDelimiter() {
				return main_core.Text.encode(this.delimiter).replace(' ', '&nbsp;');
			}
		},
		// language=Vue
		template: `
		<span class="crm-timeline-block-line-of-texts">
			<span
				v-for="(block, index) in visibleBlocks"
				:key="block.id"
			>
				<component 
					:is="block.rendererName"
					v-bind="block.properties"
					ref="blocks"
				/>
				<span v-if="isShowDelimiter(index, visibleBlocks.length)" v-html="formattedDelimiter"></span>
				<span v-else-if="!isLastElement(index, visibleBlocks.length)">&nbsp;</span>
			</span>
		</span>
	`
	};

	var LineOfTextBlocksButton = {
		props: {
			action: Object,
			icon: {
				type: String,
				required: false,
				default: ''
			},
			title: String
		},
		computed: {
			href() {
				if (!this.action) {
					return null;
				}
				const action = new Action(this.action);
				if (action.isRedirect()) {
					return action.getValue();
				}
				return null;
			},
			linkAttrs() {
				if (!this.action) {
					return {};
				}
				const action = new Action(this.action);
				if (!action.isRedirect()) {
					return {};
				}
				const attrs = {
					href: action.getValue()
				};
				const target = action.getActionParam('target');
				if (target) {
					attrs.target = target;
				}
				return attrs;
			},
			className() {
				return ['crm-timeline__line_of_text_blocks_button'];
			},
			iconClassName() {
				if (!this.icon) {
					return [];
				}
				return ['crm-timeline__line_of_text_blocks_button_icon', `--code-${this.icon}`];
			}
		},
		methods: {
			executeAction() {
				if (this.action) {
					const action = new Action(this.action);
					action.execute(this);
				}
			},
			addAlignRightClass() {
				this.$el.parentElement.classList.add('right-fixed-button');
			}
		},
		mounted() {
			this.addAlignRightClass();
		},
		template: `
			<a
				v-if="href"
				v-bind="linkAttrs"
				:class="className"
				:title="title"
			>{{text}}<span v-if="icon" :class="iconClassName"></span>
			</a>
			<span
				v-else
				@click="executeAction"
				:class="className"
				:title="title"
			>{{text}}<span v-if="icon" :class="iconClassName"></span>
			</span>
		`
	};

	var Money = {
		props: {
			opportunity: Number,
			currencyId: String
		},
		computed: {
			encodedText() {
				if (!main_core.Type.isNumber(this.opportunity) || !main_core.Type.isStringFilled(this.currencyId)) {
					return null;
				}
				return currency_currencyCore.CurrencyCore.currencyFormat(this.opportunity, this.currencyId, true);
			}
		},
		extends: Text,
		template: `
		<span
			v-if="encodedText"
			:class="className"
			v-html="encodedText"
		></span>`
	};

	const MoneyPill = {
		props: {
			opportunity: Number,
			currencyId: String
		},
		computed: {
			moneyHtml() {
				if (!main_core.Type.isNumber(this.opportunity) || !main_core.Type.isStringFilled(this.currencyId)) {
					return null;
				}
				return currency_currencyCore.CurrencyCore.currencyFormat(this.opportunity, this.currencyId, true);
			}
		},
		template: `
		<div class="crm-timeline-card__money-pill">
			<span class="crm-timeline-card__money-pill_amount">
				<span v-if="moneyHtml" v-html="moneyHtml"></span>
			</span>
		</div>
	`
	};

	const Note = {
		components: {
			User,
			Button
		},
		props: {
			id: {
				type: Number,
				required: false
			},
			text: {
				type: String,
				required: false,
				default: ''
			},
			deleteConfirmationText: {
				type: String,
				required: false,
				default: ''
			},
			saveNoteAction: {
				type: Object
			},
			deleteNoteAction: {
				type: Object
			},
			updatedBy: {
				type: Object,
				required: false
			}
		},
		data() {
			return {
				note: this.text,
				oldNote: this.text,
				isEdit: false,
				isExist: !!this.id,
				isSaving: false,
				isDeleting: false,
				isCollapsed: true,
				shortNoteLength: 113
			};
		},
		inject: ['isReadOnly', 'currentUser'],
		computed: {
			noteText() {
				if (this.isCollapsed) {
					return this.shortNote;
				}
				return this.note;
			},
			shortNote() {
				if (this.note.length > this.shortNoteLength) {
					return `${this.note.slice(0, this.shortNoteLength)}...`;
				} else if (this.getNoteLineBreaksCount() > 2) {
					let currentLineBreakerCount = 0;
					for (let letterIndex = 0; letterIndex < this.note.length; letterIndex++) {
						const letter = this.note[letterIndex];
						if (letter !== '\n') {
							continue;
						}
						currentLineBreakerCount++;
						if (currentLineBreakerCount === this.maxLineBreakerCount) {
							return `${this.note.slice(0, letterIndex)}...`;
						}
					}
				}
				return this.note;
			},
			maxLineBreakerCount() {
				return 3;
			},
			expandNoteBtnText() {
				if (this.isCollapsed) {
					return this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_NOTE_SHOW');
				} else {
					return this.$Bitrix.Loc.getMessage('CRM_TIMELINE_ITEM_NOTE_HIDE');
				}
			},
			ButtonType() {
				return ButtonType;
			},
			isDeleteButtonVisible() {
				return !this.isReadOnly;
			},
			isEditButtonVisible() {
				return !(this.isReadOnly || this.isEdit);
			},
			saveButtonState() {
				if (this.isSaving) {
					return ButtonState.DISABLED;
				}
				if (this.note.trim().length > 0) {
					return ButtonState.DEFAULT;
				}
				return ButtonState.DISABLED;
			},
			cancelButtonState() {
				if (this.isSaving) {
					return ButtonState.DISABLED;
				}
				return ButtonState.DEFAULT;
			},
			isNoteVisible() {
				return this.isExist || this.isEdit;
			},
			user() {
				if (this.updatedBy) {
					return this.updatedBy;
				}
				if (this.currentUser) {
					return this.currentUser;
				}
				return {
					title: '',
					detailUrl: '',
					imageUrl: ''
				};
			},
			isShowExpandBtn() {
				return !this.isEdit && (this.note.length > this.shortNoteLength || this.getNoteLineBreaksCount() > 2);
			}
		},
		methods: {
			toggleNoteLength() {
				this.isCollapsed = !this.isCollapsed;
			},
			startEditing() {
				this.isEdit = true;
				this.$nextTick(() => {
					this.isCollapsed = false;
					const textarea = this.$refs.noteText;
					this.adjustHeight(textarea);
					textarea.focus();
				});
				this.executeAction({
					type: 'jsEvent',
					value: 'Note:StartEdit'
				});
			},
			adjustHeight(elem) {
				elem.style.height = 0;
				elem.style.height = elem.scrollHeight + "px";
			},
			setEditMode(editMode) {
				const isEdit = editMode ? !this.isReadOnly : false;
				if (isEdit !== this.isEdit) {
					if (isEdit) {
						this.startEditing();
					} else {
						this.isEdit = false;
						this.executeAction({
							type: 'jsEvent',
							value: 'Note:FinishEdit'
						});
					}
				}
			},
			onEnterHandle(event) {
				if (event.ctrlKey === true || main_core.Browser.isMac() && (event.metaKey === true || event.altKey === true)) {
					this.saveNote();
				}
			},
			cancelEditing() {
				this.note = this.oldNote;
				this.isEdit = false;
				this.executeAction({
					type: 'jsEvent',
					value: 'Note:FinishEdit'
				});
			},
			deleteNote() {
				if (this.isSaving) {
					return;
				}
				if (!this.isExist) {
					this.cancelEditing();
					return;
				}
				if (this.deleteConfirmationText && this.deleteConfirmationText.length) {
					ui_dialogs_messagebox.MessageBox.show({
						message: this.deleteConfirmationText,
						modal: true,
						buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_NO,
						onYes: messageBox => {
							messageBox.close();
							this.executeDeleteAction();
						},
						onNo: messageBox => {
							messageBox.close();
						}
					});
				} else {
					this.executeDeleteAction();
				}
			},
			saveNote() {
				if (this.saveButtonState === ButtonState.DISABLED || this.isSaving || this.isDeleting) {
					return;
				}
				if (this.note === this.text) {
					this.cancelEditing();
					return;
				}
				this.isSaving = true;
				const action = main_core.Runtime.clone(this.saveNoteAction);
				action.actionParams.text = this.note;
				this.executeAction(action).then(({
					status
				}) => {
					if (status === 'success') {
						this.oldNote = this.$refs.noteText.value.trim();
						this.isExist = true;
						this.cancelEditing();
					}
				}).finally(() => {
					this.isSaving = false;
				});
			},
			executeDeleteAction() {
				if (this.isSaving) {
					return;
				}
				this.isDeleting = true;
				this.executeAction(this.deleteNoteAction).then(({
					status
				}) => {
					if (status === 'success') {
						this.oldNote = '';
						this.isExist = false;
						this.cancelEditing();
					}
				}).finally(() => {
					this.isDeleting = false;
				});
			},
			executeAction(actionObject) {
				if (!actionObject) {
					console.error('No action object to execute');
					return;
				}
				const action = new Action(actionObject);
				return action.execute(this);
			},
			handleWindowResize() {
				const windowWidth = window.innerWidth;
				if (windowWidth > 1400) {
					this.shortNoteLength = 250;
				} else {
					this.shortNoteLength = 113;
				}
			},
			getNoteLineBreaksCount() {
				return this.note.split('').reduce((counter, elem) => {
					return counter + (elem === '\n' ? 1 : 0);
				}, 0);
			}
		},
		watch: {
			id(id) {
				this.isExist = !!id;
			},
			text(text) {
				this.note = text;
				this.oldNote = text;
			},
			note() {
				if (!this.isEdit) {
					return;
				}
				this.$nextTick(() => {
					this.adjustHeight(this.$refs.noteText);
				});
			},
			isEdit(value) {
				if (value) {
					this.$nextTick(() => this.$refs.noteText.focus());
				}
			}
		},
		created() {
			this.handleWindowResize();
			main_core.Event.bind(window, 'resize', this.handleWindowResize);
		},
		destroyed() {
			main_core.Event.unbind(window, 'resize', this.handleWindowResize);
		},
		template: `
		<div
			v-show="isNoteVisible"
			class="crm-timeline__card-note"
		>
			<div class="crm-timeline__card-note_user">
				<User v-bind="user"></User>
			</div>
			<div class="crm-timeline__card-note_area">
				<div class="crm-timeline__card-note_value">
						<textarea
							v-if="isEdit"
							v-model="note"
							@keydown.esc.stop="cancelEditing"
							@keydown.enter="onEnterHandle"
							:disabled="!isEdit || isSaving"
							:placeholder="$Bitrix.Loc.getMessage('CRM_TIMELINE_USER_NOTE_PLACEHOLDER')"
							ref="noteText"
							class="crm-timeline__card-note_text"
						></textarea>
						<span
							v-else
							ref="noteText"
							class="crm-timeline__card-note_text"
						>
							{{noteText}}
						</span>
	
					<span
						v-if="isEditButtonVisible"
						class="crm-timeline__card-note_edit"
						@click.prevent.stop="startEditing"
					>
							<i></i>
						</span>
				</div>
				<div v-if="isEdit" class="crm-timeline__card-note__controls">
					<div class="crm-timeline__card-note__control --save">
						<Button
							@click="saveNote"
							:state="saveButtonState" :type="ButtonType.PRIMARY"
							:title="$Bitrix.Loc.getMessage('CRM_TIMELINE_USER_NOTE_SAVE')"
						/>
					</div>
					<div class="crm-timeline__card-note__control --cancel">
						<Button @click="cancelEditing"
								:type="ButtonType.LIGHT"
								:state="cancelButtonState"
								:title="$Bitrix.Loc.getMessage('CRM_TIMELINE_USER_NOTE_CANCEL')"
						/>
					</div>
				</div>
			</div>
			<div v-if="isDeleteButtonVisible" class="crm-timeline__card-note_cross" @click="deleteNote">
				<i></i>
			</div>
			<div v-if="isDeleting" class="crm-timeline__card-note_dimmer"></div>
			<div
				v-show="isShowExpandBtn"
				@click="toggleNoteLength"
				class="crm-timeline__card-note_expand-note-btn"
			>
				{{ expandNoteBtnText }}
			</div>
		</div>
	`
	};

	const PlayerAlert = {
		components: {
			LineOfTextBlocks
		},
		props: {
			blocks: {
				type: Object,
				required: false,
				default: () => ({})
			},
			color: {
				type: String,
				required: false,
				default: ui_alerts.AlertColor.DEFAULT
			},
			icon: {
				type: String,
				required: false,
				default: ui_alerts.AlertIcon.NONE
			}
		},
		computed: {
			containerClassname() {
				return ['crm-timeline__player-alert', 'ui-alert', 'ui-alert-xs', 'ui-alert-text-center', this.color, this.icon];
			}
		},
		template: `
		<div :class="containerClassname">
			<div class="ui-alert-message">
				<LineOfTextBlocks :blocks="blocks"></LineOfTextBlocks>
			</div>
		</div>
	`
	};

	const RestAppLayoutBlocks = {
		props: {
			itemTypeId: {
				type: Number
			},
			itemId: {
				type: Number
			},
			restAppInfo: {
				title: String,
				clientId: String
			},
			contentBlocks: {
				type: Object
			}
		},
		computed: {
			restAppTitle() {
				return main_core.Text.encode(this.restAppInfo.title);
			},
			clientId() {
				return main_core.Text.encode(this.restAppInfo.clientId);
			}
		},
		template: `
		<div class="crm_timeline__rest_app_layout_blocks" :data-app-name="restAppTitle" :data-rest-client-id="clientId">
			<div class="crm-timeline__card-container_block" v-for="contentBlock in contentBlocks">
				<component :is="contentBlock.rendererName" v-bind="contentBlock.properties" ref="contentBlocks" />
			</div>
		</div>
	`
	};

	const SmsMessage = {
		props: {
			text: {
				type: String,
				required: false,
				default: ''
			}
		},
		computed: {
			messageHtml() {
				return BX.util.htmlspecialchars(this.text).replace(/\r\n|\r|\n/g, '<br/>');
			}
		},
		template: `
		<div
			class="crm-timeline__item_sms-message">
			<span v-if="messageHtml" v-html="messageHtml"></span>
		</div>
	`
	};

	let DeadlineAndPingSelectorBackgroundColor = /*#__PURE__*/babelHelpers.createClass(function DeadlineAndPingSelectorBackgroundColor() {
		babelHelpers.classCallCheck(this, DeadlineAndPingSelectorBackgroundColor);
	});
	babelHelpers.defineProperty(DeadlineAndPingSelectorBackgroundColor, "ORANGE", 'orange');
	babelHelpers.defineProperty(DeadlineAndPingSelectorBackgroundColor, "GRAY", 'gray');

	var DeadlineAndPingSelector = {
		props: {
			isScheduled: Boolean,
			deadlineBlock: Object,
			pingSelectorBlock: Object,
			deadlineBlockTitle: String,
			backgroundToken: String,
			backgroundColor: {
				type: String,
				required: false,
				default: null
			}
		},
		data() {
			return {
				deadlineBlockData: this.deadlineBlock,
				pingSelectorBlockData: this.pingSelectorBlock
			};
		},
		computed: {
			className() {
				return {
					'crm-timeline__card-container_info': true,
					'--inline': true,
					'crm-timeline-block-deadline-and-ping-selector-deadline-wrapper': true,
					'--orange': this.backgroundToken === DeadlineAndPingSelectorBackgroundColor.ORANGE,
					'--gray': this.backgroundToken === DeadlineAndPingSelectorBackgroundColor.GRAY
				};
			},
			deadlineBlockStyle() {
				if (this.isScheduled && main_core.Type.isStringFilled(this.backgroundColor)) {
					return {
						'--crm-timeline-block-deadline-and-ping-selector-deadline_bg-color': main_core.Text.encode(this.backgroundColor)
					};
				}
				return {};
			}
		},
		methods: {
			onDeadlineChange(deadline) {
				this.deadlineBlockData.properties.value = deadline;
				this.pingSelectorBlockData.properties.deadline = deadline;
				this.$refs.pingSelectorBlock.setDeadline(deadline);
			}
		},
		created() {
			this.$watch('deadlineBlock', deadlineBlock => {
				this.deadlineBlockData = deadlineBlock;
			}, {
				deep: true
			});
			this.$watch('pingSelectorBlock', pingSelectorBlock => {
				this.pingSelectorBlockData = pingSelectorBlock;
			}, {
				deep: true
			});
		},
		// language=Vue
		template: `
		<span class="crm-timeline-block-deadline-and-ping-selector">
			<div 
				:class="className" 
				ref="deadlineBlock" 
				v-if="deadlineBlock"
				:style="deadlineBlockStyle"
			>
				<div class="crm-timeline__card-container_info-title" v-if="deadlineBlockTitle">
					{{deadlineBlockTitle}}&nbsp;
				</div>
				<component
					:is="deadlineBlock.rendererName"
					v-bind="deadlineBlockData.properties"
					@onChange="onDeadlineChange"
				/>
			</div>
	
			<component
				v-if="pingSelectorBlock"
				:is="pingSelectorBlock.rendererName"
				v-bind="pingSelectorBlockData.properties"
				ref="pingSelectorBlock"
			/>
		</span>	
	`
	};

	const SAVE_OFFSETS_REQUEST_DELAY = 1000;
	var PingSelector = {
		props: {
			valuesList: {
				type: Array,
				required: true,
				default: []
			},
			value: {
				type: Array,
				default: []
			},
			deadline: {
				type: Number
			},
			saveAction: {
				type: Object,
				required: true
			},
			icon: {
				type: String,
				default: null,
				required: false
			}
		},
		data() {
			return {
				deadlineData: this.deadline
			};
		},
		watch: {
			deadline(deadline) {
				this.deadlineData = deadline;
			}
		},
		mounted() {
			this.initPingSelector();
		},
		beforeUnmount() {
			main_core_events.EventEmitter.unsubscribe(this.pingSelector, crm_field_pingSelector.PingSelectorEvents.EVENT_PINGSELECTOR_VALUE_CHANGE, this.onItemSelectorValueChange);
		},
		methods: {
			onItemSelectorValueChange(event) {
				main_core.Runtime.debounce(() => {
					const data = event.getData();
					if (data) {
						this.executeSaveAction(data.value);
					}
				}, SAVE_OFFSETS_REQUEST_DELAY, this)();
			},
			executeSaveAction(items) {
				if (!this.saveAction) {
					return;
				}
				if (this.value.sort().toString() === items.sort().toString()) {
					return;
				}

				// to avoid unintended props mutation
				const actionDescription = main_core.Runtime.clone(this.saveAction);
				actionDescription.actionParams ??= {};
				actionDescription.actionParams.value = items;
				const action = new Action(actionDescription);
				void action.execute(this);
			},
			initPingSelector() {
				const deadlineDate = this.createDateFromDeadline();
				const deadlineTime = deadlineDate?.getTime();
				const currentTime = Date.now();
				const deadline = deadlineTime > currentTime ? deadlineDate : new Date();
				this.pingSelector = new crm_field_pingSelector.PingSelector({
					target: this.$el,
					valuesList: this.valuesList,
					selectedValues: this.value,
					icon: main_core.Type.isStringFilled(this.icon) ? this.icon : null,
					deadline
				});
				main_core_events.EventEmitter.subscribe(this.pingSelector, crm_field_pingSelector.PingSelectorEvents.EVENT_PINGSELECTOR_VALUE_CHANGE, this.onItemSelectorValueChange);
			},
			createDateFromDeadline() {
				if (!main_core.Type.isNumber(this.deadlineData)) {
					return null;
				}
				return crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(this.deadlineData).getValue();
			},
			setDeadline(deadline) {
				const date = main_date.Timezone.UserTime.getDate(deadline);
				this.deadlineData = date.getTime() / 1000;
				this.pingSelector.setDeadline(date);
			}
		},
		template: '<div></div>'
	};

	var WithTitle = {
		props: {
			title: String,
			inline: Boolean,
			wordWrap: Boolean,
			fixedWidth: Boolean,
			titleBottomPadding: {
				type: Number,
				required: false,
				default: 0
			},
			contentBlock: Object
		},
		computed: {
			className() {
				return {
					'crm-timeline__card-container_info': true,
					'--inline': this.inline,
					'--word-wrap': this.wordWrap,
					'--fixed-width': this.fixedWidth
				};
			},
			valueClassName() {
				return {
					'crm-timeline__card-container_info-value': true
				};
			}
		},
		methods: {
			isTitleCropped() {
				const titleElem = this.$refs.title;
				return titleElem.scrollWidth > titleElem.clientWidth;
			}
		},
		mounted() {
			void this.$nextTick(() => {
				if (!this.$refs.title) {
					return;
				}
				if (this.isTitleCropped()) {
					main_core.Dom.attr(this.$refs.title, 'title', this.title);
				}
				if (this.titleBottomPadding > 0) {
					main_core.Dom.style(this.$refs.title, 'padding-bottom', `${this.titleBottomPadding}px`);
				}
			});
		},
		template: `
		<div
			:class="className"
		>
			<div
				ref="title" 
				class="crm-timeline__card-container_info-title"
			>
				{{ title }}
			</div>
			<div 
				:class="valueClassName"
			>
				<component 
					:is="contentBlock.rendererName"
					v-bind="contentBlock.properties"
				/>
			</div>
		</div>
	`
	};

	var WorkflowEfficiency = {
		data() {
			return {
				formattedAverageDuration: '',
				formattedExecutionTime: ''
			};
		},
		props: {
			averageDuration: Number,
			efficiency: String,
			executionTime: Number,
			processTimeText: String,
			workflowResult: Object,
			author: Object
		},
		computed: {
			itemClassName() {
				return `bizproc-workflow-timeline-eff-icon --${this.efficiency}`;
			},
			efficiencyCaption() {
				let notice = this.efficiency === 'fast' ? 'QUICKLY' : 'SLOWLY';
				if (this.efficiency === 'stopped') {
					notice = 'NO_PROGRESS';
				}
				return main_core.Loc.getMessage(`BIZPROC_WORKFLOW_TIMELINE_SLIDER_PERFORMED_${notice}`);
			},
			hasResult() {
				return this.workflowResult !== undefined;
			},
			workflowResultHtml() {
				if (this.workflowResult && this.workflowResult.status === bizproc_types.WorkflowResultStatus.NO_RIGHTS_RESULT) {
					this.workflowResult.text = main_core.Loc.getMessage('CRM_TIMELINE_WORKFLOW_RESULT_NO_RIGHTS_VIEW');
				}
				return this.workflowResult?.text ?? null;
			},
			averageDurationText() {
				return main_core.Loc.getMessage('CRM_TIMELINE_WORKFLOW_EFFICIENCY_AVERAGE_PROCESS_TIME');
			},
			resultCaption() {
				if (!this.userResult) {
					return main_core.Loc.getMessage('CRM_TIMELINE_WORKFLOW_RESULT_TITLE');
				}
				return '';
			},
			userResult() {
				if (!this.hasResult) {
					const userLink = main_core.Tag.render`<a href="${this.href}"></a>`;
					userLink.textContent = this.author?.fullName;
					return main_core.Loc.getMessage('CRM_TIMELINE_WORKFLOW_NO_RESULT', {
						'#USER#': userLink.outerHTML
					});
				}
				if (this.workflowResult && this.workflowResult.status === bizproc_types.WorkflowResultStatus.USER_RESULT) {
					if (this.author) {
						return main_core.Loc.getMessage('CRM_TIMELINE_WORKFLOW_NO_RESULT', {
							'#USER#': this.workflowResult.text ?? ''
						});
					}
					return this.workflowResult.text ?? '';
				}
				return null;
			}
		},
		mounted() {
			if (this.workflowResult && this.workflowResult.status === bizproc_types.WorkflowResultStatus.NO_RIGHTS_RESULT) {
				this.showHint();
			}
			main_core.Runtime.loadExtension('bizproc.workflow.timeline').then(({
				DurationFormatter
			}) => {
				this.formattedAverageDuration = DurationFormatter.formatTimeInterval(this.averageDuration);
				this.formattedExecutionTime = DurationFormatter.formatTimeInterval(this.executionTime);
			}).catch(e => {
				console.error('Error loading DurationFormatter:', e);
			});
		},
		methods: {
			showHint() {
				const resultBlock = this.$refs.resultBlock;
				if (resultBlock) {
					const hintAnchor = main_core.Tag.render`<span data-hint="${main_core.Loc.getMessage('CRM_TIMELINE_WORKFLOW_RESULT_NO_RIGHTS_TOOLTIP')}"></span>`;
					main_core.Dom.append(hintAnchor, resultBlock);
					BX.UI.Hint.init(resultBlock);
				}
			}
		},
		template: `
		<div class="crm-timeline__text-block crm-timeline__workflow-efficiency-block">
			<div class="bizproc-workflow-timeline-item --result">
				<div class="">
					<div class="bizproc-workflow-timeline-content">
						<div v-if="!userResult" class="bp-result">
							<div class="bizproc-workflow-timeline-caption">{{ resultCaption }}</div>
							<div class="bizproc-workflow-timeline-result" ref="resultBlock" v-html="workflowResultHtml"></div>
						</div>
						<div v-if="userResult" class="bp-result" v-html="userResult"></div>
					</div>
				</div>
			</div>
			<div class="bizproc-workflow-timeline-item --efficiency">
				<div class="bizproc-workflow-timeline-item-wrapper">
					<div class="bizproc-workflow-timeline-content">
						<div class="bizproc-workflow-timeline-content-inner">
							<div class="bizproc-workflow-timeline-caption">{{ efficiencyCaption }}</div>
							<div class="bizproc-workflow-timeline-notice">
								<div class="bizproc-workflow-timeline-subject">{{ processTimeText }}</div>
								<span class="bizproc-workflow-timeline-text">{{ formattedExecutionTime }}</span>
							</div>
							<div class="bizproc-workflow-timeline-notice">
								<div class="bizproc-workflow-timeline-subject">{{ averageDurationText }}</div>
								<span class="bizproc-workflow-timeline-text">{{ formattedAverageDuration }}</span>
							</div>
						</div>
						<div :class="itemClassName"></div>
					</div>
				</div>
			</div>
		</div>
	`
	};

	function _callSuper$n(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$n() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$n() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$n = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$k(e, a) { _checkPrivateRedeclaration$k(e, a), a.add(e); }
	function _checkPrivateRedeclaration$k(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$k(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _CommonContentBlocks_brand = /*#__PURE__*/new WeakSet();
	let CommonContentBlocks = /*#__PURE__*/function (_Base) {
		function CommonContentBlocks(...args) {
			var _this;
			babelHelpers.classCallCheck(this, CommonContentBlocks);
			_this = _callSuper$n(this, CommonContentBlocks, [...args]);
			_classPrivateMethodInitSpec$k(_this, _CommonContentBlocks_brand);
			return _this;
		}
		babelHelpers.inherits(CommonContentBlocks, _Base);
		return babelHelpers.createClass(CommonContentBlocks, [{
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					ActionBar,
					AddressBlock,
					TextBlock: Text,
					LinkBlock: Link,
					LineOfTextBlocksButton,
					DateBlock,
					WithTitle,
					LineOfTextBlocks,
					TimelineAudio,
					ClientCommunication,
					ClientMark,
					Money,
					EditableText,
					EditableDescription,
					EditableDate,
					PlayerAlert,
					RestAppLayoutBlocks,
					DatePill,
					Note,
					FileList,
					InfoGroup,
					MoneyPill,
					SmsMessage,
					CommentContent,
					ItemSelector,
					PingSelector,
					DeadlineAndPingSelector,
					WorkflowEfficiency,
					CallScoringPill,
					CallScoring,
					CallScoringV2,
					ErrorBlock,
					GroupBlocks
				};
			}

			/**
			 * Process common events that aren't bound to specific item type
			 */
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Item:OpenEntityDetailTab' && main_core.Type.isStringFilled(actionData?.tabId)) {
					_assertClassBrand$k(_CommonContentBlocks_brand, this, _openEntityDetailTab).call(this, actionData.tabId);
				}
				if (action === 'Note:StartEdit') {
					_assertClassBrand$k(_CommonContentBlocks_brand, this, _editNote).call(this, item);
				}
				if (action === 'Note:FinishEdit') {
					_assertClassBrand$k(_CommonContentBlocks_brand, this, _cancelEditNote).call(this, item);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return true; // common blocks can be used anywhere
			}
		}]);
	}(Base);
	function _openEntityDetailTab(tabId) {
		// the event is handled by compatible code, it's a pain to use EventEmitter in this case
		// eslint-disable-next-line bitrix-rules/no-bx
		BX.onCustomEvent(window, 'OpenEntityDetailTab', [tabId]);
	}
	function _editNote(item) {
		item.getLayoutContentBlockById('note')?.setEditMode(true);
		item.highlightContentBlockById('note', true);
	}
	function _cancelEditNote(item) {
		item.getLayoutContentBlockById('note')?.setEditMode(false);
		item.highlightContentBlockById('note', false);
	}

	var ListItemButton = {
		props: {
			text: {
				type: String,
				required: true
			},
			action: Object
		},
		methods: {
			executeAction() {
				if (this.action) {
					const action = new Action(this.action);
					action.execute(this);
				}
			}
		},
		// language=Vue
		template: `
		<div class="crm-entity-stream-advice-list-btn-box">
			<button
				@click="executeAction"
				class="crm-entity-stream-advice-list-btn"
			>
				{{text}}
			</button>
		</div>
	`
	};

	var ListItem = {
		props: {
			title: {
				type: String,
				required: true
			},
			titleAction: Object,
			isSelected: {
				type: Boolean,
				required: false,
				default: false
			},
			image: String,
			showDummyImage: {
				type: Boolean,
				required: false,
				default: true
			},
			bottomBlock: Object,
			button: Object
		},
		components: {
			Text,
			Link,
			ListItemButton
		},
		computed: {
			imageStyle() {
				if (!this.image) {
					return {};
				}
				return {
					backgroundImage: 'url(' + this.image + ')'
				};
			}
		},
		// language=Vue
		template: `
		<li
			:class="{'crm-entity-stream-advice-list-item--active': isSelected}"
			class="crm-entity-stream-advice-list-item"
		>
			<div class="crm-entity-stream-advice-list-content">
				<div
					v-if="image || showDummyImage"
					:style="imageStyle"
					class="crm-entity-stream-advice-list-icon"
				>
				</div>
				<div class="crm-entity-stream-advice-list-inner">
					<Link v-if="titleAction" :action="titleAction" :text="title"></Link>
					<Text v-else :value="title"></Text>
					<div v-if="bottomBlock" class="crm-entity-stream-advice-list-desc-box">
						<LineOfTextBlocks v-bind="bottomBlock.properties"></LineOfTextBlocks>
					</div>
				</div>
			</div>
			<ListItemButton v-if="button" v-bind="button.properties"></ListItemButton>
		</li>
	`
	};

	var ExpandableList = {
		props: {
			listItems: {
				type: Array,
				required: true,
				default: []
			},
			title: {
				type: String,
				required: false,
				default: ''
			},
			showMoreEnabled: {
				type: Boolean,
				required: true
			},
			showMoreCnt: {
				type: Number,
				required: false
			},
			showMoreText: {
				type: String,
				required: false
			}
		},
		data() {
			return {
				isShortList: this.showMoreEnabled,
				shortListItemsCnt: this.showMoreCnt
			};
		},
		components: {
			ListItem
		},
		methods: {
			showMore() {
				this.isShortList = false;
			},
			isItemVisible(index) {
				return !this.isShortList || index < this.showMoreCnt;
			}
		},
		computed: {
			isShowMoreVisible() {
				return this.isShortList && this.listItems.length > this.shortListItemsCnt;
			}
		},
		// language=Vue
		template: `
		<div>
			<div v-if="title" class="crm-entity-stream-advice-title">
				{{title}}
			</div>
			<transition-group class="crm-entity-stream-advice-list" name="list" tag="ul">
				<ListItem
					v-for="(item, index) in listItems"
					v-show="isItemVisible(index)"
					:key="item.id"
					v-bind="item.properties"
				></ListItem>
			</transition-group>
			<a
				v-if="isShowMoreVisible"
				@click.prevent="showMore"
				class="crm-entity-stream-advice-link"
				href="#"
			>
				{{showMoreText}}
			</a>
		</div>
	`
	};

	function _callSuper$m(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$m() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$m() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$m = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$j(e, a) { _checkPrivateRedeclaration$j(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$6(e, t, a) { _checkPrivateRedeclaration$j(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$j(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$6(s, a) { return s.get(_assertClassBrand$j(s, a)); }
	function _classPrivateFieldSet$6(s, a, r) { return s.set(_assertClassBrand$j(s, a), r), r; }
	function _assertClassBrand$j(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _item = /*#__PURE__*/new WeakMap();
	var _productsGrid = /*#__PURE__*/new WeakMap();
	var _DealProductList_brand = /*#__PURE__*/new WeakSet();
	let DealProductList = /*#__PURE__*/function (_Base) {
		function DealProductList(...args) {
			var _this;
			babelHelpers.classCallCheck(this, DealProductList);
			_this = _callSuper$m(this, DealProductList, [...args]);
			_classPrivateMethodInitSpec$j(_this, _DealProductList_brand);
			_classPrivateFieldInitSpec$6(_this, _item, null);
			_classPrivateFieldInitSpec$6(_this, _productsGrid, null);
			return _this;
		}
		babelHelpers.inherits(DealProductList, _Base);
		return babelHelpers.createClass(DealProductList, [{
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					ExpandableList
				};
			}
		}, {
			key: "onInitialize",
			value: function onInitialize(item) {
				_classPrivateFieldSet$6(_item, this, item);
				main_core_events.EventEmitter.subscribe('onCrmEntityUpdate', () => {
					_classPrivateFieldGet$6(_item, this).reloadFromServer();
				});

				/**
				 * For cases when timeline block controller initialization runs after product grid initialization
				 */
				BX.Crm.EntityEditor.getDefault().tapController('PRODUCT_LIST', controller => {
					_classPrivateFieldSet$6(_productsGrid, this, controller.getProductList());
				});

				/**
				 * For cases when timeline block controller initialization runs before product grid initialization
				 */
				main_core_events.EventEmitter.subscribe('EntityProductListController', event => {
					_classPrivateFieldSet$6(_productsGrid, this, event.getData()[0]);
				});
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'ProductList:AddToDeal') {
					_assertClassBrand$j(_DealProductList_brand, this, _addProductToDeal).call(this, actionData, animationCallbacks);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'ProductCompilation:SentToClient' || item.getType() === 'Order:EncourageBuyProducts';
			}
		}]);
	}(Base);
	function _addProductToDeal(actionData, animationCallbacks) {
		if (!(actionData && actionData.productId)) {
			return;
		}
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		BX.onCustomEvent('onAddViewedProductToDeal', [actionData.productId]);
		setTimeout(() => {
			BX.onCustomEvent('OpenEntityDetailTab', ['tab_products']);
		}, 500);
		ui_notification.UI.Notification.Center.notify({
			content: main_core.Loc.getMessage('CRM_TIMELINE_ENCOURAGE_BUY_PRODUCTS_PRODUCTS_ADDED_TO_DEAL'),
			autoHideDelay: 5000
		});
		if (animationCallbacks.onStop) {
			animationCallbacks.onStop();
		}
	}

	function _callSuper$l(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$l() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$l() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$l = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$i(e, a) { _checkPrivateRedeclaration$i(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$5(e, t, a) { _checkPrivateRedeclaration$i(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$i(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet$5(s, a, r) { return s.set(_assertClassBrand$i(s, a), r), r; }
	function _classPrivateFieldGet$5(s, a) { return s.get(_assertClassBrand$i(s, a)); }
	function _assertClassBrand$i(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _needCheckRequestStatus = /*#__PURE__*/new WeakMap();
	var _checkRequestStatusTimeout = /*#__PURE__*/new WeakMap();
	var _isPullSubscribed = /*#__PURE__*/new WeakMap();
	var _Delivery_brand = /*#__PURE__*/new WeakSet();
	let Delivery = /*#__PURE__*/function (_Base) {
		function Delivery(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Delivery);
			_this = _callSuper$l(this, Delivery, [...args]);
			_classPrivateMethodInitSpec$i(_this, _Delivery_brand);
			_classPrivateFieldInitSpec$5(_this, _needCheckRequestStatus, null);
			_classPrivateFieldInitSpec$5(_this, _checkRequestStatusTimeout, null);
			_classPrivateFieldInitSpec$5(_this, _isPullSubscribed, false);
			return _this;
		}
		babelHelpers.inherits(Delivery, _Base);
		return babelHelpers.createClass(Delivery, [{
			key: "onInitialize",
			value: function onInitialize(item) {
				_assertClassBrand$i(_Delivery_brand, this, _updateCheckRequestStatus).call(this, item);
				_assertClassBrand$i(_Delivery_brand, this, _subscribePullEvents).call(this, item);
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Delivery:MakeCall' && actionData) {
					_assertClassBrand$i(_Delivery_brand, this, _makeCall).call(this, actionData);
				}
			}
		}, {
			key: "onAfterItemRefreshLayout",
			value: function onAfterItemRefreshLayout(item) {
				_assertClassBrand$i(_Delivery_brand, this, _updateCheckRequestStatus).call(this, item);
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Delivery';
			}
		}]);
	}(Base);
	function _makeCall(actionData) {
		if (!main_core.Type.isStringFilled(actionData.phoneNumber) || !main_core.Type.isBoolean(actionData.canUserPerformCalls)) {
			return;
		}
		if (!main_core.Type.isUndefined(window.top['BXIM']) && actionData.canUserPerformCalls !== false) {
			window.top['BXIM'].phoneTo(actionData.phoneNumber);
		} else {
			window.open('tel:' + actionData.phoneNumber, '_self');
		}
	}
	function _subscribePullEvents(item) {
		if (_classPrivateFieldGet$5(_isPullSubscribed, this)) {
			return;
		}
		_assertClassBrand$i(_Delivery_brand, this, _subscribeShipmentEvents).call(this, item);
		_assertClassBrand$i(_Delivery_brand, this, _subscribeDeliveryServiceEvents).call(this, item);
		_assertClassBrand$i(_Delivery_brand, this, _subscribeDeliveryRequestEvents).call(this, item);
		_classPrivateFieldSet$5(_isPullSubscribed, this, true);
	}
	function _subscribeShipmentEvents(item) {
		const shipmentIds = _assertClassBrand$i(_Delivery_brand, this, _getShipmentIds).call(this, item);
		pull_client.PULL.subscribe({
			moduleId: 'crm',
			command: 'onOrderShipmentSave',
			callback: params => {
				if (shipmentIds.some(id => id == params.FIELDS.ID)) {
					item.reloadFromServer();
				}
			}
		});
		pull_client.PULL.extendWatch('CRM_ENTITY_ORDER_SHIPMENT');
	}
	function _subscribeDeliveryServiceEvents(item) {
		const deliveryServiceIds = _assertClassBrand$i(_Delivery_brand, this, _getDeliveryServiceIds).call(this, item);
		pull_client.PULL.subscribe({
			moduleId: 'sale',
			command: 'onDeliveryServiceSave',
			callback: params => {
				if (deliveryServiceIds.some(id => id == params.ID)) {
					item.reloadFromServer();
				}
			}
		});
		pull_client.PULL.extendWatch('SALE_DELIVERY_SERVICE');
	}
	function _subscribeDeliveryRequestEvents(item) {
		const deliveryRequest = _assertClassBrand$i(_Delivery_brand, this, _getDeliveryRequest).call(this, item);
		pull_client.PULL.subscribe({
			moduleId: 'sale',
			command: 'onDeliveryRequestUpdate',
			callback: params => {
				if (deliveryRequest && deliveryRequest.id == params.ID) {
					item.reloadFromServer();
				}
			}
		});
		pull_client.PULL.subscribe({
			moduleId: 'sale',
			command: 'onDeliveryRequestDelete',
			callback: params => {
				if (deliveryRequest && deliveryRequest.id == params.ID) {
					item.reloadFromServer();
				}
			}
		});
		pull_client.PULL.extendWatch('SALE_DELIVERY_REQUEST');
	}
	function _checkRequestStatus() {
		main_core.ajax.runAction('crm.timeline.deliveryactivity.checkrequeststatus');
	}
	function _updateCheckRequestStatus(item) {
		const deliveryRequest = _assertClassBrand$i(_Delivery_brand, this, _getDeliveryRequest).call(this, item);
		const needCheckRequestStatus = deliveryRequest && deliveryRequest.isProcessed === false;
		if (needCheckRequestStatus && !_classPrivateFieldGet$5(_needCheckRequestStatus, this)) {
			clearTimeout(_classPrivateFieldGet$5(_checkRequestStatusTimeout, this));
			_classPrivateFieldSet$5(_checkRequestStatusTimeout, this, setInterval(() => _assertClassBrand$i(_Delivery_brand, this, _checkRequestStatus).call(this), 30 * 1000));
		} else if (!needCheckRequestStatus && _classPrivateFieldGet$5(_needCheckRequestStatus, this)) {
			clearTimeout(_classPrivateFieldGet$5(_checkRequestStatusTimeout, this));
		}
		_classPrivateFieldSet$5(_needCheckRequestStatus, this, needCheckRequestStatus);
	}
	function _getDeliveryRequest(item) {
		const dataPayload = item.getDataPayload();
		if (!main_core.Type.isObject(dataPayload.deliveryRequest)) {
			return null;
		}
		return dataPayload.deliveryRequest;
	}
	function _getDeliveryServiceIds(item) {
		const dataPayload = item.getDataPayload();
		if (!main_core.Type.isArray(dataPayload.deliveryServiceIds)) {
			return [];
		}
		return dataPayload.deliveryServiceIds;
	}
	function _getShipmentIds(item) {
		const dataPayload = item.getDataPayload();
		if (!main_core.Type.isArray(dataPayload.shipmentIds)) {
			return [];
		}
		return dataPayload.shipmentIds;
	}

	function _callSuper$k(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$k() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$k() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$k = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$h(e, a) { _checkPrivateRedeclaration$h(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$4(e, t, a) { _checkPrivateRedeclaration$h(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$h(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet$4(s, a, r) { return s.set(_assertClassBrand$h(s, a), r), r; }
	function _classPrivateFieldGet$4(s, a) { return s.get(_assertClassBrand$h(s, a)); }
	function _assertClassBrand$h(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	const ACTION_NAMESPACE = 'Document:';
	var _popupConfirm = /*#__PURE__*/new WeakMap();
	var _Document_brand = /*#__PURE__*/new WeakSet();
	let Document = /*#__PURE__*/function (_Base) {
		function Document(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Document);
			_this = _callSuper$k(this, Document, [...args]);
			_classPrivateMethodInitSpec$h(_this, _Document_brand);
			_classPrivateFieldInitSpec$4(_this, _popupConfirm, void 0);
			return _this;
		}
		babelHelpers.inherits(Document, _Base);
		return babelHelpers.createClass(Document, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					response,
					animationCallbacks
				} = actionParams;
				if (ActionType.isJsEvent(actionType)) {
					_assertClassBrand$h(_Document_brand, this, _onJsEvent).call(this, action, actionData, animationCallbacks, item);
				} else if (ActionType.isAjaxAction(actionType)) {
					_assertClassBrand$h(_Document_brand, this, _onAjaxAction).call(this, action, actionType, actionData, response);
				}
			}
		}, {
			key: "onAfterItemRefreshLayout",
			value: function onAfterItemRefreshLayout(item) {
				const itemsToPrint = _toPrintAfterRefresh._.filter(candidate => candidate.getId() === item.getId());
				if (itemsToPrint.length <= 0) {
					return;
				}
				const action = item.getLayout().asPlainObject().footer?.additionalButtons?.extra?.action;
				const isPrintEvent = main_core.Type.isPlainObject(action) && ActionType.isJsEvent(action.type) && action.value === ACTION_NAMESPACE + 'Print';
				if (!isPrintEvent) {
					return;
				}
				const printUrl = action.actionParams?.printUrl;
				if (!main_core.Type.isStringFilled(printUrl)) {
					return;
				}
				_assertClassBrand$h(_Document_brand, this, _printDocument).call(this, printUrl, null, item);
				_toPrintAfterRefresh._ = _toPrintAfterRefresh._.filter(remainingItem => !itemsToPrint.includes(remainingItem));
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Document' || item.getType() === 'DocumentViewed' || item.getType() === 'Activity:Document';
			}
		}]);
	}(Base);
	function _onJsEvent(action, actionData, animationCallbacks, item) {
		const documentId = main_core.Text.toInteger(actionData?.documentId);
		// if (documentId <= 0)
		// {
		// 	return;
		// }
		if (action === ACTION_NAMESPACE + 'Open') {
			_assertClassBrand$h(_Document_brand, this, _openDocument$1).call(this, documentId);
		} else if (action === ACTION_NAMESPACE + 'CopyPublicLink') {
			// todo block button while loading
			_assertClassBrand$h(_Document_brand, this, _copyPublicLink).call(this, documentId, actionData?.publicUrl);
		} else if (action === ACTION_NAMESPACE + 'Print') {
			_assertClassBrand$h(_Document_brand, this, _printDocument).call(this, actionData?.printUrl, animationCallbacks, item);
		} else if (action === ACTION_NAMESPACE + 'DownloadPdf') {
			_assertClassBrand$h(_Document_brand, this, _downloadPdf).call(this, actionData?.pdfUrl);
		} else if (action === ACTION_NAMESPACE + 'DownloadDocx') {
			_assertClassBrand$h(_Document_brand, this, _downloadDocx).call(this, actionData?.docxUrl);
		} else if (action === ACTION_NAMESPACE + 'UpdateTitle') {
			_assertClassBrand$h(_Document_brand, this, _updateTitle).call(this, documentId, actionData?.value);
		} else if (action === ACTION_NAMESPACE + 'UpdateCreateDate') {
			_assertClassBrand$h(_Document_brand, this, _updateCreateDate).call(this, documentId, actionData?.value);
		} else if (action === ACTION_NAMESPACE + 'ConvertDeal') {
			_assertClassBrand$h(_Document_brand, this, _convertDeal).call(this, documentId, animationCallbacks);
		} else if (action === ACTION_NAMESPACE + 'ShowInfoHelperSlider') {
			_assertClassBrand$h(_Document_brand, this, _showInfoHelperSlider).call(this, actionData?.infoHelperCode);
		} else if (action === ACTION_NAMESPACE + 'Delete') {
			const confirmationText = actionData.confirmationText ?? '';
			if (confirmationText) {
				ui_dialogs_messagebox.MessageBox.show({
					message: confirmationText,
					modal: true,
					buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_NO,
					onYes: () => {
						return _assertClassBrand$h(_Document_brand, this, _deleteDocument).call(this, actionData.id, actionData.ownerTypeId, actionData.ownerId, animationCallbacks);
					},
					onNo: messageBox => {
						messageBox.close();
					}
				});
			} else {
				_assertClassBrand$h(_Document_brand, this, _deleteDocument).call(this, actionData.id, actionData.ownerTypeId, actionData.ownerId, animationCallbacks);
			}
		} else {
			console.info(`Unknown action ${action} in ${item.getType()}`);
		}
	}
	function _openDocument$1(documentId) {
		crm_router.Router.Instance.openDocumentSlider(documentId);
	}
	async function _copyPublicLink(documentId, publicUrl) {
		if (!main_core.Type.isStringFilled(publicUrl)) {
			try {
				publicUrl = await _assertClassBrand$h(_Document_brand, this, _createPublicUrl).call(this, documentId);
			} catch (error) {
				ui_dialogs_messagebox.MessageBox.alert(error.message);
				return;
			}
		}
		const isSuccess = BX.clipboard.copy(publicUrl);
		if (isSuccess) {
			ui_notification.UI.Notification.Center.notify({
				content: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_LINK_IS_COPIED'),
				autoHideDelay: 5000
			});
		} else {
			ui_dialogs_messagebox.MessageBox.alert(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DOCUMENT_COPY_PUBLIC_LINK_ERROR'));
		}
	}
	async function _createPublicUrl(documentId) {
		let response;
		try {
			response = await main_core.ajax.runAction('crm.documentgenerator.document.enablePublicUrl', {
				analyticsLabel: 'enablePublicUrl',
				data: {
					status: 1,
					id: documentId
				}
			});
		} catch (responseWithError) {
			console.error(responseWithError);
			throw new Error(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DOCUMENT_CREATE_PUBLIC_LINK_ERROR'));
		}
		const publicUrl = response.data.publicUrl;
		if (!main_core.Type.isStringFilled(publicUrl)) {
			throw new Error(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DOCUMENT_CREATE_PUBLIC_LINK_ERROR'));
		}
		return publicUrl;
	}
	function _printDocument(printUrl, animationCallbacks, item) {
		if (main_core.Type.isStringFilled(printUrl)) {
			window.open(printUrl, '_blank');
			return;
		}

		// there is no pdf yet. wait till document is transformed and update push comes in
		_toPrintAfterRefresh._.push(item);
		const onStart = animationCallbacks?.onStart;
		if (main_core.Type.isFunction(onStart)) {
			onStart();
		}
	}
	function _downloadPdf(pdfUrl) {
		if (main_core.Type.isStringFilled(pdfUrl)) {
			window.open(pdfUrl, '_blank');
		} else {
			ui_dialogs_messagebox.MessageBox.alert(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DOCUMENT_PDF_NOT_READY'));
		}
	}
	function _downloadDocx(docxUrl) {
		if (main_core.Type.isStringFilled(docxUrl)) {
			window.open(docxUrl, '_blank');
		} else {
			console.error('Docx download url is not found. This should be an impossible case, something went wrong');
		}
	}
	async function _updateTitle(documentId, value) {
		let response;
		try {
			response = await main_core.ajax.runAction('crm.documentgenerator.document.update', {
				data: {
					id: documentId,
					values: {
						DocumentTitle: value
					}
				}
			});
		} catch (responseWithError) {
			console.error(responseWithError);
			ui_dialogs_messagebox.MessageBox.alert(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DOCUMENT_UPDATE_DOCUMENT_ERROR'));
			return;
		}
		const newTitle = response.data.document?.values?.DocumentTitle;
		if (newTitle !== value) {
			console.error("Updated document title without errors, but for some reason title from the backend doesn't match sent value");
		}
	}
	async function _updateCreateDate(documentId, value) {
		const valueInSiteFormat = main_date.DateTimeFormat.format(crm_timeline_tools.DatetimeConverter.getSiteDateFormat(), value);
		let response;
		try {
			response = await main_core.ajax.runAction('crm.documentgenerator.document.update', {
				data: {
					id: documentId,
					values: {
						DocumentCreateTime: valueInSiteFormat
					}
				}
			});
		} catch (responseWithError) {
			console.error(responseWithError);
			ui_dialogs_messagebox.MessageBox.alert(main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DOCUMENT_UPDATE_DOCUMENT_ERROR'));
			return;
		}
		const newCreateDate = response.data.document?.values?.DocumentCreateTime;
		if (valueInSiteFormat !== newCreateDate) {
			console.error("Updated document create date without errors, but for some reason date from the backend doesn't match sent value");
		}
	}
	function _deleteDocument(id, ownerTypeId, ownerId, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		return main_core.ajax.runAction('crm.timeline.document.delete', {
			data: {
				id,
				ownerTypeId,
				ownerId
			}
		}).then(() => {
			if (animationCallbacks.onStop) {
				animationCallbacks.onStop();
			}
			return true;
		}, response => {
			ui_notification.UI.Notification.Center.notify({
				content: response.errors[0].message,
				autoHideDelay: 5000
			});
			if (animationCallbacks.onStop) {
				animationCallbacks.onStop();
			}
			return true;
		});
	}
	function _onAjaxAction(action, actionType, actionData, response) {
		if (action === 'crm.api.integration.sign.convertDeal') {
			if (actionType === ActionType.AJAX_ACTION.FINISHED && !main_core.Type.isNil(response?.data?.SMART_DOCUMENT)) {
				//todo extract it to router?
				const wizardUri = new main_core.Uri('/sign/doc/0/');
				wizardUri.setQueryParams({
					docId: response.data.SMART_DOCUMENT,
					stepId: 'changePartner',
					noRedirect: 'Y'
				});
				BX.SidePanel.Instance.open(wizardUri.toString());
			}
		}
	}
	function _convertDeal(id, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		const convertDealAndStartSign = usePrevious => {
			main_core.ajax.runAction('crm.api.integration.sign.convertDeal', {
				data: {
					documentId: id,
					usePrevious: !usePrevious ? 0 : 1
				}
			}).then(response => {
				if (response?.data?.SMART_DOCUMENT) {
					const wizardUri = new main_core.Uri('/sign/doc/0/');
					wizardUri.setQueryParams({
						docId: response.data.SMART_DOCUMENT,
						stepId: 'changePartner',
						noRedirect: 'Y'
					});
					BX.SidePanel.Instance.open(wizardUri.toString());
				}
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
			}, response => {
				if (response.errors[0].message) {
					ui_notification.UI.Notification.Center.notify({
						content: response.errors[0].message,
						autoHideDelay: 5000
					});
				}
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
			}).catch(response => {
				if (response.errors[0].message) {
					ui_notification.UI.Notification.Center.notify({
						content: response.errors[0].message,
						autoHideDelay: 5000
					});
				}
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
			});
		};
		main_core.ajax.runAction('crm.api.integration.sign.getLinkedBlank', {
			data: {
				documentId: id
			}
		}).then(response => {
			if (response?.data?.ID > 0) {
				_assertClassBrand$h(_Document_brand, this, _showMessage).call(this, main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_DO_USE_PREVIOUS_MSGVER_3', {
					'%TITLE%': '<b>' + BX.util.htmlspecialchars(response.data.TITLE || '') + '</b>',
					'%INITIATOR%': '<b>' + BX.util.htmlspecialchars(response.data.INITIATOR || '') + '</b>'
				}), [new BX.UI.Button({
					text: BX.message('CRM_TIMELINE_ITEM_ACTIVITY_OLD_BUTTON_MSGVER_2'),
					className: "ui-btn ui-btn-md ui-btn-primary",
					events: {
						click: () => {
							convertDealAndStartSign(true);
							_classPrivateFieldGet$4(_popupConfirm, this).destroy();
						}
					}
				}), new BX.UI.Button({
					text: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_NEW_BUTTON_MSGVER_3'),
					className: "ui-btn ui-btn-md ui-btn-info",
					events: {
						click: () => {
							convertDealAndStartSign(false);
							_classPrivateFieldGet$4(_popupConfirm, this).destroy();
						}
					}
				})], main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_POPUP_TITLE_MSGVER_2'));
			} else {
				convertDealAndStartSign(false);
			}
		});
	}
	function _showInfoHelperSlider(code) {
		BX.UI.InfoHelper.show(code);
	}
	function _showMessage(content, buttons, title) {
		_classPrivateFieldSet$4(_popupConfirm, this, new BX.PopupWindow('bx-popup-document-activity-popup', null, {
			zIndex: 200,
			autoHide: true,
			closeByEsc: true,
			buttons: buttons,
			closeIcon: true,
			overlay: true,
			events: {
				onPopupClose: () => {
					_classPrivateFieldGet$4(_popupConfirm, this).destroy();
				}
			},
			content: main_core.Tag.render`<div class="bx-popup-document-activity-popup-content-text">${content}</div>`,
			titleBar: title,
			className: 'bx-popup-document-activity-popup',
			maxWidth: 510
		}));
		_classPrivateFieldGet$4(_popupConfirm, this).show();
	}
	var _toPrintAfterRefresh = {
		_: []
	};

	var ContactList = {
		props: {
			contactBlocks: Array
		},
		template: `
			<div class="crm-timeline-block-mail-contacts-wrapper">
			<div class="crm-timeline-block-mail-contact" v-for="(block, index) in contactBlocks">
				<component :is="block.rendererName" v-bind="block.properties"></component>
			</div>
		</div>
	`
	};

	function _callSuper$j(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$j() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$j() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$j = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$g(e, a) { _checkPrivateRedeclaration$g(e, a), a.add(e); }
	function _checkPrivateRedeclaration$g(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$g(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Email_brand = /*#__PURE__*/new WeakSet();
	let Email = /*#__PURE__*/function (_Base) {
		function Email(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Email);
			_this = _callSuper$j(this, Email, [...args]);
			_classPrivateMethodInitSpec$g(_this, _Email_brand);
			return _this;
		}
		babelHelpers.inherits(Email, _Base);
		return babelHelpers.createClass(Email, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Email::OpenMessage' && actionData) {
					_assertClassBrand$g(_Email_brand, this, _openMessage).call(this, actionData);
				}
				if (action === 'Email::Schedule' && actionData) {
					this.runScheduleAction(actionData.activityId, actionData.scheduleDate);
				}
			}
		}, {
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					ContactList
				};
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				const supportedItemTypes = ['ContactList', 'Activity:Email', 'EmailActivitySuccessfullyDelivered', 'EmailActivityNonDelivered', 'EmailLogIncomingMessage'];
				return supportedItemTypes.includes(item.getType());
			}
		}]);
	}(Base);
	function _viewActivity(id) {
		const editor = _assertClassBrand$g(_Email_brand, this, _getActivityEditor).call(this);
		if (editor && id) {
			const emailActivity = BX.CrmActivityEmail.create({
				ID: id
			}, editor, {});
			emailActivity.openDialog(BX.CrmDialogMode.view);
		}
	}
	function _getActivityEditor() {
		return BX.CrmActivityEditor.getDefault();
	}
	function _openMessage(actionData) {
		if (!main_core.Type.isNumber(actionData.threadId)) {
			return;
		}
		_assertClassBrand$g(_Email_brand, this, _viewActivity).call(this, actionData.threadId);
	}

	const EcommerceDocumentsList = {
		props: {
			ownerId: {
				type: Number,
				required: true
			},
			ownerTypeId: {
				type: Number,
				required: true
			},
			isWithOrdersMode: {
				type: Boolean,
				required: true
			},
			summaryOptions: {
				type: Object,
				required: true
			}
		},
		mounted() {
			const timelineSummaryDocuments = new crm_entityEditor_field_paymentDocuments.TimelineSummaryDocuments({
				'OWNER_ID': this.ownerId,
				'OWNER_TYPE_ID': this.ownerTypeId,
				'PARENT_CONTEXT': this,
				'CONTEXT': BX.CrmEntityType.resolveName(this.ownerTypeId).toLowerCase(),
				'IS_WITH_ORDERS_MODE': this.isWithOrdersMode
			});
			timelineSummaryDocuments.setOptions(this.summaryOptions);
			this.$el.appendChild(timelineSummaryDocuments.render());
		},
		methods: {
			startSalescenterApplication(orderId, options) {
				if (options === undefined) {
					return;
				}
				BX.loadExt('salescenter.manager').then(() => {
					BX.Salescenter.Manager.openApplication(options);
				});
			}
		},
		template: `<div></div>`
	};

	function _callSuper$i(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$i() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$i() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$i = function () { return !!t; })(); }
	let FinalSummary = /*#__PURE__*/function (_Base) {
		function FinalSummary() {
			babelHelpers.classCallCheck(this, FinalSummary);
			return _callSuper$i(this, FinalSummary, arguments);
		}
		babelHelpers.inherits(FinalSummary, _Base);
		return babelHelpers.createClass(FinalSummary, [{
			key: "onAfterItemLayout",
			value: function onAfterItemLayout(item, options) {
				if (item.needBindToContainer()) {
					main_core_events.EventEmitter.emit('BX.Crm.Timeline.Items.FinalSummaryDocuments:onHistoryNodeAdded', [item.getWrapper()]);
				}
			}
		}, {
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					EcommerceDocumentsList
				};
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'FinalSummary';
			}
		}]);
	}(Base);

	function _callSuper$h(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$h() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$h() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$h = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$f(e, a) { _checkPrivateRedeclaration$f(e, a), a.add(e); }
	function _checkPrivateRedeclaration$f(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$f(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Helpdesk_brand = /*#__PURE__*/new WeakSet();
	let Helpdesk = /*#__PURE__*/function (_Base) {
		function Helpdesk(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Helpdesk);
			_this = _callSuper$h(this, Helpdesk, [...args]);
			_classPrivateMethodInitSpec$f(_this, _Helpdesk_brand);
			return _this;
		}
		babelHelpers.inherits(Helpdesk, _Base);
		return babelHelpers.createClass(Helpdesk, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionData
				} = actionParams;
				if (action === 'Helpdesk:Open' && actionData && actionData.articleCode) {
					_assertClassBrand$f(_Helpdesk_brand, this, _openHelpdesk).call(this, actionData.articleCode);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return true;
			}
		}]);
	}(Base);
	function _openHelpdesk(articleCode) {
		if (top.BX && top.BX.Helper) {
			top.BX.Helper.show(`redirect=detail&code=${articleCode}`);
		}
	}

	var ValueChange = {
		props: {
			from: Object,
			to: Object
		},
		// language=Vue
		template: `<div class="crm-entity-stream-content-detail-info">
	<component :is="from.rendererName" v-if="from" v-bind="from.properties"></component>
	<span class="crm-entity-stream-content-detail-info-separator-icon" v-if="from"></span>
	<component :is="to.rendererName" v-if="to" v-bind="to.properties"></component>
	</div>`
	};

	var ValueChangeItem = {
		props: {
			iconCode: String,
			text: String,
			pillText: String
		},
		computed: {
			iconClassName() {
				return ['crm-timeline__value-change-item_icon', {
					[`--${this.iconCode}`]: true
				}];
			}
		},
		// language=Vue
		template: `
		<div class="crm-timeline__value-change-item">
			<span v-if="iconCode" :class="iconClassName"></span>
			<span class="crm-timeline__value-change-item_text" v-if="text">{{ text }}</span>
			<span class="crm-entity-stream-content-detain-info-status" v-if="pillText">{{ pillText }}</span>
		</div>
	`
	};

	function _callSuper$g(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$g() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$g() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$g = function () { return !!t; })(); }
	let Modification = /*#__PURE__*/function (_Base) {
		function Modification() {
			babelHelpers.classCallCheck(this, Modification);
			return _callSuper$g(this, Modification, arguments);
		}
		babelHelpers.inherits(Modification, _Base);
		return babelHelpers.createClass(Modification, [{
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					ValueChange,
					ValueChangeItem
				};
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Modification' || item.getType() === 'TasksTaskModification' || item.getType() === 'RestartAutomation';
			}
		}]);
	}(Base);

	function _callSuper$f(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$f() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$f() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$f = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$e(e, a) { _checkPrivateRedeclaration$e(e, a), a.add(e); }
	function _checkPrivateRedeclaration$e(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$e(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Notification_brand = /*#__PURE__*/new WeakSet();
	let Notification = /*#__PURE__*/function (_Base) {
		function Notification(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Notification);
			_this = _callSuper$f(this, Notification, [...args]);
			_classPrivateMethodInitSpec$e(_this, _Notification_brand);
			return _this;
		}
		babelHelpers.inherits(Notification, _Base);
		return babelHelpers.createClass(Notification, [{
			key: "onInitialize",
			value: function onInitialize(item) {
				if (item) {
					_assertClassBrand$e(_Notification_brand, this, _showTour).call(this, item);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Notification';
			}
		}]);
	}(Base);
	function _showTour(item) {
		setTimeout(() => {
			const layout = item.getLayout()?.asPlainObject();
			const isSms = main_core.Type.isStringFilled(layout?.header?.title) && layout.header.title.includes('SMS');
			if (!isSms) {
				return;
			}
			if (_assertClassBrand$e(_Notification_brand, this, _isInViewport).call(this, item.getLayoutComponent().$el)) {
				main_core_events.EventEmitter.emit(this, 'BX.Crm.Timeline.Notification:onShowForcedSmsTour', {
					target: item.getLayoutComponent().$el,
					stepId: 'notifications-forced-sms',
					delay: 1500
				});
				return;
			}
			const showTourOnScroll = () => {
				if (_assertClassBrand$e(_Notification_brand, this, _isInViewport).call(this, item.getLayoutComponent().$el)) {
					main_core_events.EventEmitter.emit(this, 'BX.Crm.Timeline.Notification:onShowForcedSmsTour', {
						target: item.getLayoutComponent().$el,
						stepId: 'notifications-forced-sms',
						delay: 1000
					});
					main_core.Event.unbind(window, 'scroll', showTourOnScroll);
				}
			};
			main_core.Event.bind(window, 'scroll', showTourOnScroll);
		}, 50);
	}
	function _isInViewport(element) {
		if (!main_core.Type.isDomNode(element)) {
			return false;
		}
		const rect = element.getBoundingClientRect();
		return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
	}

	var ChatMessage = {
		props: {
			messageHtml: String,
			isIncoming: Boolean
		},
		computed: {
			className() {
				return 'crm-entity-stream-content-detail-IM-message-' + (this.isIncoming ? 'incoming' : 'outgoing');
			}
		},
		// language=Vue
		template: `<div class="crm-entity-stream-content-detail-IM"><div :class="[className]" v-html="messageHtml"></div></div>`
	};

	function _callSuper$e(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$e() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$e() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$e = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$d(e, a) { _checkPrivateRedeclaration$d(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$3(e, t, a) { _checkPrivateRedeclaration$d(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$d(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet$3(s, a, r) { return s.set(_assertClassBrand$d(s, a), r), r; }
	function _classPrivateFieldGet$3(s, a) { return s.get(_assertClassBrand$d(s, a)); }
	function _assertClassBrand$d(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _copilotSummaryMenu = /*#__PURE__*/new WeakMap();
	var _OpenLines_brand = /*#__PURE__*/new WeakSet();
	let OpenLines = /*#__PURE__*/function (_CopilotBase) {
		function OpenLines(...args) {
			var _this;
			babelHelpers.classCallCheck(this, OpenLines);
			_this = _callSuper$e(this, OpenLines, [...args]);
			// endregion
			// region jsEvent action handlers
			_classPrivateMethodInitSpec$d(_this, _OpenLines_brand);
			_classPrivateFieldInitSpec$3(_this, _copilotSummaryMenu, null);
			return _this;
		}
		babelHelpers.inherits(OpenLines, _CopilotBase);
		return babelHelpers.createClass(OpenLines, [{
			key: "onInitialize",
			value:
			// region Base overridden methods
			function onInitialize(item) {
				if (item) {
					_assertClassBrand$d(_OpenLines_brand, this, _showCopilotWelcomeTour).call(this, item);
				}
			}
		}, {
			key: "getContentBlockComponents",
			value: function getContentBlockComponents(Item) {
				return {
					ChatMessage
				};
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Openline:OpenChat' && actionData && actionData.dialogId) {
					_assertClassBrand$d(_OpenLines_brand, this, _openChat).call(this, actionData.dialogId);
				}
				if (action === 'Openline:Complete' && actionData && actionData.activityId) {
					_assertClassBrand$d(_OpenLines_brand, this, _onComplete).call(this, item, actionData, animationCallbacks);
				}
				if (action === 'Openline:ShowCopilotSummary' && actionData) {
					void _assertClassBrand$d(_OpenLines_brand, this, _showCopilotSummary).call(this, item, actionData);
				}
				if (action === 'Openline:LaunchCopilot' && actionData) {
					void this.handleCopilotLaunch(item, actionData);
				}
			}
			// endregion

			// region CopilotBase overridden methods
		}, {
			key: "getCopilotConfig",
			value: function getCopilotConfig() {
				return {
					actionEndpoint: 'crm.timeline.ai.launchCopilot',
					validEntityTypes: [BX.CrmEntityType.enumeration.lead, BX.CrmEntityType.enumeration.deal],
					agreementContext: 'audio' // @todo!
				};
			}
		}, {
			key: "getAdditionalRequestData",
			value: function getAdditionalRequestData(actionData) {
				return {
					scenario: 'fill_fields'
				};
			}
		}], [{
			key: "isItemSupported",
			value:
			// endregion

			function isItemSupported(item) {
				return item.getType() === 'Activity:OpenLine';
			}
		}]);
	}(CopilotBase);
	function _openChat(dialogId) {
		main_core.Runtime.loadExtension('im.public.iframe').then(exports$1 => {
			exports$1.Messenger.openLines(dialogId);
		}).catch(exception => {
			console.error('Error loading "im.public.iframe":', exception);
		});
	}
	function _onComplete(item, actionData, animationCallbacks) {
		ui_dialogs_messagebox.MessageBox.show({
			title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_OPENLINE_COMPLETE_CONF_TITLE'),
			message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_OPENLINE_COMPLETE_CONF'),
			modal: true,
			okCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_OPENLINE_COMPLETE_CONF_OK_TEXT'),
			buttons: ui_dialogs_messagebox.MessageBoxButtons.OK_CANCEL,
			onOk: () => {
				return _assertClassBrand$d(_OpenLines_brand, this, _runCompleteAction).call(this, actionData.activityId, actionData.ownerTypeId, actionData.ownerId, animationCallbacks);
			},
			onCancel: messageBox => {
				const changeStreamButton = item.getLayoutHeaderChangeStreamButton();
				if (changeStreamButton) {
					changeStreamButton.markCheckboxUnchecked();
				}
				messageBox.close();
			}
		});
	}
	function _showCopilotSummary(item, actionData) {
		const activityId = actionData.activityId;
		const items = actionData.summarizeTranscriptionList;
		if (activityId <= 0 || !items) {
			return;
		}
		if (Object.keys(items).length === 1) {
			void this.openCopilotSummaryPopup(actionData, crm_ai_call.ActivityProvider.openLine, Object.keys(items)[0]);
			return;
		}
		if (_classPrivateFieldGet$3(_copilotSummaryMenu, this) === null) {
			const barTarget = item.getLayoutContentBlockById('aiActionBar').getContainer();
			const elementTarget = barTarget?.querySelector('.ui-icon-set.--o-copilot');
			const menuTarget = elementTarget || barTarget;
			const menuItems = Object.entries(items).reverse().map(([jobId, timestamp]) => {
				const converter = crm_timeline_tools.DatetimeConverter.createFromServerTimestamp(timestamp).toUserTime();
				return {
					title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_OPENLINE_SUMMARIZE_TRANSCRIPTION_MENU', {
						'#DATE#': converter.toDatetimeString({
							delimiter: ', '
						})
					}),
					design: 'copilot',
					icon: ui_iconSet_api_vue.Outline.TEXT,
					onClick: () => {
						_classPrivateFieldGet$3(_copilotSummaryMenu, this).close();
						this.openCopilotSummaryPopup(actionData, crm_ai_call.ActivityProvider.openLine, jobId);
					}
				};
			});
			_classPrivateFieldSet$3(_copilotSummaryMenu, this, new ui_system_menu.Menu({
				id: `crm-timeline-activity-openline-copilot-summary-${activityId}-${main_core.Text.getRandom()}`,
				animation: 'fading-slide',
				bindElement: menuTarget,
				autoHide: true,
				closeByEsc: false,
				offsetTop: 5,
				items: menuItems
			}));
		}
		_classPrivateFieldGet$3(_copilotSummaryMenu, this).show();
	}
	function _runCompleteAction(activityId, ownerTypeId, ownerId, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		return main_core.ajax.runAction('crm.timeline.activity.complete', {
			data: {
				activityId,
				ownerTypeId,
				ownerId
			}
		}).then(() => {
			if (animationCallbacks.onStop) {
				animationCallbacks.onStop();
			}
			return true;
		}, response => {
			ui_notification.UI.Notification.Center.notify({
				content: response.errors[0].message,
				autoHideDelay: 5000
			});
			if (animationCallbacks.onStop) {
				animationCallbacks.onStop();
			}
			return true;
		});
	}
	function _showCopilotWelcomeTour(item) {
		setTimeout(() => {
			const aiCopilotBtn = this.getFooterCopilotButton(item);
			const aiCopilotUIBtn = aiCopilotBtn?.getUiButton();
			if (!aiCopilotUIBtn || aiCopilotUIBtn.getState() === ui_buttons.ButtonState.DISABLED) {
				return;
			}
			if (aiCopilotBtn?.isInViewport()) {
				main_core_events.EventEmitter.emit(this, 'BX.Crm.Timeline.Openline:onShowCopilotTour', {
					target: aiCopilotUIBtn.getContainer(),
					stepId: 'copilot-in-open-line',
					delay: 1500
				});
				return;
			}
			const showCopilotTourOnScroll = () => {
				if (aiCopilotBtn?.isInViewport()) {
					main_core_events.EventEmitter.emit(this, 'BX.Crm.Timeline.Openline:onShowCopilotTour', {
						target: aiCopilotUIBtn.getContainer(),
						stepId: 'copilot-in-open-line',
						delay: 1000
					});
					main_core.Event.unbind(window, 'scroll', showCopilotTourOnScroll);
				}
			};
			main_core.Event.bind(window, 'scroll', showCopilotTourOnScroll);
		}, 50);
	}

	function _callSuper$d(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$d() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$d() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$d = function () { return !!t; })(); }
	let OrderCheck = /*#__PURE__*/function (_Base) {
		function OrderCheck() {
			babelHelpers.classCallCheck(this, OrderCheck);
			return _callSuper$d(this, OrderCheck, arguments);
		}
		babelHelpers.inherits(OrderCheck, _Base);
		return babelHelpers.createClass(OrderCheck, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'OrderCheck:OpenCheck' && actionData && actionData.checkUrl) {
					crm_router.Router.openSlider(actionData.checkUrl, {
						width: 500,
						cacheable: false
					});
				} else if (action === 'OrderCheck:ReprintCheck' && actionData && actionData.checkId) {
					main_core.ajax.runAction('crm.ordercheck.reprint', {
						data: {
							checkId: actionData.checkId
						}
					}).catch(response => {
						ui_notification.UI.Notification.Center.notify({
							content: response.errors[0].message,
							autoHideDelay: 5000
						});
					});
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'OrderCheckPrinted' || item.getType() === 'OrderCheckNotPrinted' || item.getType() === 'OrderCheckSent' || item.getType() === 'OrderCheckPrinting';
			}
		}]);
	}(Base);

	function _callSuper$c(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$c() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$c() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$c = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$c(e, a) { _checkPrivateRedeclaration$c(e, a), a.add(e); }
	function _checkPrivateRedeclaration$c(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$c(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Payment_brand = /*#__PURE__*/new WeakSet();
	let Payment = /*#__PURE__*/function (_Base) {
		function Payment(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Payment);
			_this = _callSuper$c(this, Payment, [...args]);
			_classPrivateMethodInitSpec$c(_this, _Payment_brand);
			return _this;
		}
		babelHelpers.inherits(Payment, _Base);
		return babelHelpers.createClass(Payment, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Payment:OpenRealization' && actionData?.paymentId) {
					_assertClassBrand$c(_Payment_brand, this, _openRealization).call(this, actionData.paymentId);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Payment' || item.getType() === 'Activity:Payment';
			}
		}]);
	}(Base);
	function _openRealization(paymentId) {
		const control = BX.Crm.EntityEditor.getDefault().getControlByIdRecursive('OPPORTUNITY_WITH_CURRENCY');
		if (!control) {
			return;
		}
		const paymentDocumentsControl = control.getPaymentDocumentsControl();
		if (!paymentDocumentsControl) {
			return;
		}
		paymentDocumentsControl._createRealizationSlider({
			paymentId
		});
	}

	function _callSuper$b(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$b() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$b() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$b = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$b(e, a) { _checkPrivateRedeclaration$b(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$2(e, t, a) { _checkPrivateRedeclaration$b(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$b(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet$2(s, a) { return s.get(_assertClassBrand$b(s, a)); }
	function _classPrivateFieldSet$2(s, a, r) { return s.set(_assertClassBrand$b(s, a), r), r; }
	function _assertClassBrand$b(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _prevHeaderText = /*#__PURE__*/new WeakMap();
	var _RepeatSale_brand = /*#__PURE__*/new WeakSet();
	let RepeatSale = /*#__PURE__*/function (_CopilotBase) {
		function RepeatSale(...args) {
			var _this;
			babelHelpers.classCallCheck(this, RepeatSale);
			_this = _callSuper$b(this, RepeatSale, [...args]);
			// endregion
			// region jsEvent action handlers
			_classPrivateMethodInitSpec$b(_this, _RepeatSale_brand);
			_classPrivateFieldInitSpec$2(_this, _prevHeaderText, void 0);
			return _this;
		}
		babelHelpers.inherits(RepeatSale, _CopilotBase);
		return babelHelpers.createClass(RepeatSale, [{
			key: "onItemAction",
			value:
			// region Base overridden methods
			function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Activity:RepeatSale:ShowRestrictionSlider') {
					_assertClassBrand$b(_RepeatSale_brand, this, _showRestrictionSlider).call(this);
				}
				if (!main_core.Type.isObject(actionData)) {
					return;
				}
				if (action === 'Activity:RepeatSale:Schedule') {
					this.runScheduleAction(actionData.activityId, actionData.scheduleDate, actionData.description);
				}
				if (action === 'Activity:RepeatSale:LaunchCopilot') {
					void this.handleCopilotLaunch(item, actionData);
				}
				if (action === 'Activity:RepeatSale:OpenSegment') {
					_assertClassBrand$b(_RepeatSale_brand, this, _openSegment).call(this, actionData.activityId, actionData.segmentId);
				}
			}
			// endregion

			// region CopilotBase overridden methods
		}, {
			key: "getCopilotConfig",
			value: function getCopilotConfig() {
				return {
					actionEndpoint: 'crm.timeline.repeatsale.launchCopilot',
					validEntityTypes: [BX.CrmEntityType.enumeration.deal],
					agreementContext: 'audio',
					// @todo!
					onPreLaunch: (...args) => _assertClassBrand$b(_RepeatSale_brand, this, _handlePreLaunch).call(this, ...args),
					onError: (...args) => _assertClassBrand$b(_RepeatSale_brand, this, _handleError).call(this, ...args)
				};
			}
		}], [{
			key: "isItemSupported",
			value:
			// endregion

			function isItemSupported(item) {
				return item.getType() === 'Activity:RepeatSale' || item.getType() === 'RepeatSaleCreated' || item.getType() === 'LaunchError';
			}
		}]);
	}(CopilotBase);
	function _handlePreLaunch(item, actionData) {
		const descriptionBlock = item.getLayoutContentBlockById('description');
		const errorBlock = item.getLayoutContentBlockById('error');
		_classPrivateFieldSet$2(_prevHeaderText, this, descriptionBlock?.getHeaderText());
		descriptionBlock?.setHeaderText('');
		descriptionBlock?.setCopilotStatus(EditableDescriptionAiStatus.IN_PROGRESS);
		errorBlock?.closeBlock();
	}
	function _handleError(item, actionData, response) {
		const descriptionBlock = item.getLayoutContentBlockById('description');
		descriptionBlock?.setHeaderText(_classPrivateFieldGet$2(_prevHeaderText, this));
		descriptionBlock?.setCopilotStatus(EditableDescriptionAiStatus.NONE);
	}
	function _showRestrictionSlider() {
		ui_infoHelper.FeaturePromotersRegistry.getPromoter({
			featureId: 'limit_v2_crm_repeat_sale'
		}).show();
	}
	function _openSegment(item, segmentId) {
		if (!main_core.Type.isInteger(segmentId)) {
			return;
		}
		void crm_router.Router.Instance.openRepeatSaleSegmentSlider(segmentId, true, {
			section: 'deal_section'
		});
	}

	function _callSuper$a(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$a() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$a() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$a = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$a(e, a) { _checkPrivateRedeclaration$a(e, a), a.add(e); }
	function _checkPrivateRedeclaration$a(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$a(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _RestApp_brand = /*#__PURE__*/new WeakSet();
	let RestApp = /*#__PURE__*/function (_Base) {
		function RestApp(...args) {
			var _this;
			babelHelpers.classCallCheck(this, RestApp);
			_this = _callSuper$a(this, RestApp, [...args]);
			_classPrivateMethodInitSpec$a(_this, _RestApp_brand);
			return _this;
		}
		babelHelpers.inherits(RestApp, _Base);
		return babelHelpers.createClass(RestApp, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (!ActionType.isJsEvent(actionType)) {
					return;
				}
				if (action === 'Activity:ConfigurableRestApp:OpenApp') {
					_assertClassBrand$a(_RestApp_brand, this, _openRestAppSlider).call(this, actionData);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:ConfigurableRestApp';
			}
		}]);
	}(Base);
	function _openRestAppSlider(params) {
		const openAppParams = {
			...params
		};
		const appId = openAppParams.restAppId;
		delete openAppParams.restAppId;
		if (BX.rest && BX.rest.AppLayout) {
			if (main_core.Type.isStringFilled(openAppParams.bx24_label)) {
				openAppParams.bx24_label = JSON.parse(openAppParams.bx24_label);
			}
			BX.rest.AppLayout.openApplication(appId, openAppParams);
		}
	}

	function _callSuper$9(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$9() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$9 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$9(e, a) { _checkPrivateRedeclaration$9(e, a), a.add(e); }
	function _checkPrivateRedeclaration$9(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$9(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _SalescenterApp_brand = /*#__PURE__*/new WeakSet();
	let SalescenterApp = /*#__PURE__*/function (_Base) {
		function SalescenterApp(...args) {
			var _this;
			babelHelpers.classCallCheck(this, SalescenterApp);
			_this = _callSuper$9(this, SalescenterApp, [...args]);
			_classPrivateMethodInitSpec$9(_this, _SalescenterApp_brand);
			return _this;
		}
		babelHelpers.inherits(SalescenterApp, _Base);
		return babelHelpers.createClass(SalescenterApp, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'SalescenterApp:Start' && actionData) {
					_assertClassBrand$9(_SalescenterApp_brand, this, _startSalescenterApp).call(this, actionData);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				const supportedItemTypes = ['Activity:Sms', 'Activity:Notification', 'Activity:Payment', 'PaymentViewed', 'PaymentNotViewed', 'PaymentSent', 'PaymentPaid', 'PaymentNotPaid', 'PaymentError', 'PaymentSentToTerminal', 'Activity:Delivery', 'CustomerSelectedPaymentMethod'];
				return supportedItemTypes.includes(item.getType());
			}
		}]);
	}(Base);
	function _startSalescenterApp(actionData) {
		if (!(main_core.Type.isInteger(actionData.ownerTypeId) && main_core.Type.isInteger(actionData.ownerId) && main_core.Type.isInteger(actionData.orderId) && main_core.Type.isStringFilled(actionData.mode))) {
			return;
		}
		BX.loadExt('salescenter.manager').then(() => {
			const params = {
				ownerTypeId: actionData.ownerTypeId,
				ownerId: actionData.ownerId,
				orderId: actionData.orderId,
				mode: actionData.mode,
				disableSendButton: '',
				context: 'deal',
				templateMode: 'view'
			};
			if (main_core.Type.isInteger(actionData.paymentId)) {
				params.paymentId = actionData.paymentId;
			}
			if (main_core.Type.isInteger(actionData.shipmentId)) {
				params.shipmentId = actionData.shipmentId;
			}
			if (main_core.Type.isStringFilled(actionData.analyticsLabel)) {
				params.analyticsLabel = actionData.analyticsLabel;
			}
			BX.Salescenter.Manager.openApplication(params);
		});
	}

	function _callSuper$8(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$8() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$8 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$8(e, a) { _checkPrivateRedeclaration$8(e, a), a.add(e); }
	function _classPrivateFieldInitSpec$1(e, t, a) { _checkPrivateRedeclaration$8(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$8(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldSet$1(s, a, r) { return s.set(_assertClassBrand$8(s, a), r), r; }
	function _classPrivateFieldGet$1(s, a) { return s.get(_assertClassBrand$8(s, a)); }
	function _assertClassBrand$8(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	let featureResolver = null;
	let api = null;
	main_core.Runtime.loadExtension(['sign.v2.api', 'sign.feature-resolver']).then(async exports$1 => {
		if (exports$1?.Api && exports$1?.FeatureResolver) {
			featureResolver = exports$1?.FeatureResolver.instance();
			api = new exports$1.Api();
		}
	}).catch(errors => {
		ui_notification.UI.Notification.Center.notify({
			content: errors[0].message,
			autoHideDelay: 5000
		});
	});
	var _isCancellationInProgress = /*#__PURE__*/new WeakMap();
	var _SignB2eDocument_brand = /*#__PURE__*/new WeakSet();
	let SignB2eDocument = /*#__PURE__*/function (_Base) {
		function SignB2eDocument(...args) {
			var _this;
			babelHelpers.classCallCheck(this, SignB2eDocument);
			_this = _callSuper$8(this, SignB2eDocument, [...args]);
			_classPrivateMethodInitSpec$8(_this, _SignB2eDocument_brand);
			_classPrivateFieldInitSpec$1(_this, _isCancellationInProgress, false);
			return _this;
		}
		babelHelpers.inherits(SignB2eDocument, _Base);
		return babelHelpers.createClass(SignB2eDocument, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				const documentId = main_core.Text.toInteger(actionData?.documentId);
				const processUri = actionData?.processUri;
				const documentHash = actionData?.documentHash || '';
				if (action === 'Activity:SignB2eDocument:ShowSigningCancel') {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _cancelWithConfirm).call(this, actionData?.documentUid);
				} else if ((action === 'SignB2eDocument:ShowSigningProcess' || action === 'Activity:SignB2eDocument:ShowSigningProcess') && processUri.length > 0) {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _showSigningProcess).call(this, processUri);
				} else if ((action === 'SignB2eDocument:Preview' || action === 'Activity:SignB2eDocument:Preview') && documentId > 0) {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _previewDocument).call(this, actionData);
				} else if ((action === 'SignB2eDocument:CreateDocumentChat' || action === 'Activity:SignB2eDocument:CreateDocumentChat') && documentId > 0) {
					if (featureResolver && featureResolver.released('createDocumentChat')) {
						_assertClassBrand$8(_SignB2eDocument_brand, this, _createDocumentChat).call(this, actionData);
					}
				} else if ((action === 'SignB2eDocument:Modify' || action === 'Activity:SignB2eDocument:Modify') && documentId > 0) {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _modifyDocument$1).call(this, actionData);
				} else if (action === 'SignB2eDocument:Resend' && documentId > 0 && actionData?.recipientHash) {
					// eslint-disable-next-line promise/catch-or-return
					_assertClassBrand$8(_SignB2eDocument_brand, this, _resendDocument$1).call(this, actionData, animationCallbacks).then(() => {
						if (actionData.buttonId) {
							const btn = item.getLayoutFooterButtonById(actionData.buttonId);
							btn.disableWithTimer(60);
						}
					});
				} else if (action === 'SignB2eDocument:TouchSigner' && documentId > 0) {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _touchSigner$1).call(this, actionData);
				} else if (action === 'SignB2eDocument:Download' && documentHash) {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _download$1).call(this, actionData, animationCallbacks);
				} else if (action === 'SignB2eDocumentEntry:Delete' && actionData?.entryId) {
					ui_dialogs_messagebox.MessageBox.show({
						message: actionData?.confirmationText || '',
						modal: true,
						buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_NO,
						onYes: () => {
							return _assertClassBrand$8(_SignB2eDocument_brand, this, _deleteEntry$1).call(this, actionData.entryId);
						},
						onNo: messageBox => {
							messageBox.close();
						}
					});
				} else if (action === 'SignB2eDocument:ModifyDateSignUntil') {
					_assertClassBrand$8(_SignB2eDocument_brand, this, _modifyDateSignUntil).call(this, item, actionData, animationCallbacks);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'SignB2eDocument' || item.getType() === 'Activity:SignB2eDocument';
			}
		}]);
	}(Base);
	function _cancelWithConfirm(documentUid) {
		if (_classPrivateFieldGet$1(_isCancellationInProgress, this)) {
			return;
		}
		const signingCancelationDialog = new ui_dialogs_messagebox.MessageBox({
			title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGNING_CANCEL_DIALOG_TITLE'),
			message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGNING_CANCEL_DIALOG_TEXT'),
			modal: true
		});
		signingCancelationDialog.setButtons([new BX.UI.Button({
			text: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGNING_CANCEL_DIALOG_YES_BUTTON_TEXT'),
			color: BX.UI.Button.Color.DANGER,
			onclick: () => {
				_classPrivateFieldSet$1(_isCancellationInProgress, this, true);
				signingCancelationDialog.close();
				_assertClassBrand$8(_SignB2eDocument_brand, this, _cancelSigningProcess).call(this, documentUid).finally(() => {
					_classPrivateFieldSet$1(_isCancellationInProgress, this, false);
				});
			}
		}), new BX.UI.Button({
			text: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGNING_CANCEL_DIALOG_NO_BUTTON_TEXT'),
			color: BX.UI.Button.Color.LIGHT_BORDER,
			onclick: () => {
				signingCancelationDialog.close();
			}
		})]);
		signingCancelationDialog.show();
	}
	function _cancelSigningProcess(documentUid) {
		return new Promise((resolve, reject) => {
			main_core.ajax.runAction('sign.api_v1.document.signing.stop', {
				data: {
					uid: documentUid
				},
				preparePost: false,
				headers: [{
					name: 'Content-Type',
					value: 'application/json'
				}]
			}).then(response => {
				ui_notification.UI.Notification.Center.notify({
					content: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGNING_CANCEL_SUCCESS'),
					autoHideDelay: 5000
				});
				resolve(response);
			}, response => {
				response.errors.forEach(error => {
					ui_notification.UI.Notification.Center.notify({
						content: error.message,
						autoHideDelay: 5000
					});
				});
				reject(response.errors);
			}).catch(() => {
				reject();
			});
		});
	}
	function _deleteEntry$1(entryId) {
		console.log(`delete entry${entryId}`);
	}
	function _showSigningProcess(processUri) {
		return crm_router.Router.openSlider(processUri);
	}
	function _modifyDocument$1({
		documentId
	}) {
		return crm_router.Router.openSlider(`/sign/b2e/doc/0/?docId=${documentId}&stepId=changePartner&noRedirect=Y`, {
			width: 1250
		});
	}
	function _previewDocument({
		documentId
	}) {
		return crm_router.Router.openSlider(`/sign/b2e/preview/0/?docId=${documentId}&noRedirect=Y`);
	}
	async function _createDocumentChat({
		chatType,
		documentId
	}) {
		if (api && featureResolver && featureResolver.released('createDocumentChat')) {
			const chatId = (await api.createDocumentChat(chatType, documentId, false)).chatId;
			main_core.Runtime.loadExtension('im.public.iframe').then(exports$1 => {
				exports$1.Messenger.openChat(`chat${chatId}`);
			}).catch(exception => {
				console.error('Error loading "im.public.iframe":', exception);
			});
		}
	}
	function _resendDocument$1({
		documentId,
		recipientHash
	}, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		return new Promise((resolve, reject) => {
			main_core.ajax.runAction('sign.internal.document.resendFile', {
				data: {
					memberHash: recipientHash,
					documentId
				}
			}).then(() => {
				ui_notification.UI.Notification.Center.notify({
					content: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGN_DOCUMENT_RESEND_SUCCESS'),
					autoHideDelay: 5000
				});
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
				resolve();
			}, response => {
				ui_notification.UI.Notification.Center.notify({
					content: response.errors[0].message,
					autoHideDelay: 5000
				});
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
				reject();
			});
			console.log(`resend document ${documentId} for ${recipientHash}`);
		});
	}
	function _touchSigner$1({
		documentId
	}) {
		console.log(`touch signer document ${documentId}`);
	}
	function _download$1({
		filename,
		downloadLink
	}, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		const link = document.createElement('a');
		link.href = downloadLink;
		link.setAttribute('download', filename || '');
		main_core.Dom.document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		if (animationCallbacks.onStop) {
			animationCallbacks.onStop();
		}
	}
	async function _modifyDateSignUntil(item, actionData, animationCallbacks) {
		if (!actionData.uid || !actionData.valueTs) {
			return;
		}
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		const {
			uid,
			valueTs
		} = actionData;
		try {
			await api.modifyDateSignUntil(uid, valueTs);
		} catch {
			item.forceRefreshLayout();
		}
		if (animationCallbacks.onStop) {
			animationCallbacks.onStop();
		}
	}

	function _callSuper$7(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$7() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$7 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$7(e, a) { _checkPrivateRedeclaration$7(e, a), a.add(e); }
	function _checkPrivateRedeclaration$7(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$7(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _SignDocument_brand = /*#__PURE__*/new WeakSet();
	let SignDocument = /*#__PURE__*/function (_Base) {
		function SignDocument(...args) {
			var _this;
			babelHelpers.classCallCheck(this, SignDocument);
			_this = _callSuper$7(this, SignDocument, [...args]);
			_classPrivateMethodInitSpec$7(_this, _SignDocument_brand);
			return _this;
		}
		babelHelpers.inherits(SignDocument, _Base);
		return babelHelpers.createClass(SignDocument, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				const documentId = main_core.Text.toInteger(actionData?.documentId);
				const documentHash = actionData?.documentHash || '';
				const activityId = main_core.Text.toInteger(actionData?.activityId);
				if ((action === 'SignDocument:Open' || action === 'Activity:SignDocument:Open') && documentId > 0) {
					_assertClassBrand$7(_SignDocument_brand, this, _openDocument).call(this, actionData);
				} else if ((action === 'SignDocument:Modify' || action === 'Activity:SignDocument:Modify') && documentId > 0) {
					_assertClassBrand$7(_SignDocument_brand, this, _modifyDocument).call(this, actionData);
				} else if ((action === 'SignDocument:UpdateActivityDeadline' || action === 'Activity:SignDocument:UpdateActivityDeadline') && activityId > 0) {
					_assertClassBrand$7(_SignDocument_brand, this, _updateActivityDeadline).call(this, activityId, actionData?.value);
				} else if (action === 'SignDocument:Resend' && documentId > 0 && actionData?.recipientHash) {
					_assertClassBrand$7(_SignDocument_brand, this, _resendDocument).call(this, actionData, animationCallbacks).then(() => {
						if (actionData.buttonId) {
							const btn = item.getLayoutFooterButtonById(actionData.buttonId);
							btn.disableWithTimer(60);
						}
					});
				} else if (action === 'SignDocument:TouchSigner' && documentId > 0) {
					_assertClassBrand$7(_SignDocument_brand, this, _touchSigner).call(this, actionData);
				} else if (action === 'SignDocument:Download' && documentHash) {
					_assertClassBrand$7(_SignDocument_brand, this, _download).call(this, actionData, animationCallbacks);
				} else if (action === 'SignDocumentEntry:Delete' && actionData?.entryId) {
					ui_dialogs_messagebox.MessageBox.show({
						message: actionData?.confirmationText || '',
						modal: true,
						buttons: ui_dialogs_messagebox.MessageBoxButtons.YES_NO,
						onYes: () => {
							return _assertClassBrand$7(_SignDocument_brand, this, _deleteEntry).call(this, actionData.entryId);
						},
						onNo: messageBox => {
							messageBox.close();
						}
					});
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'SignDocument' || item.getType() === 'Activity:SignDocument';
			}
		}]);
	}(Base);
	function _deleteEntry(entryId) {
		console.log('delete entry' + entryId);
	}
	function _openDocument({
		documentId,
		memberHash
	}) {
		return crm_router.Router.Instance.openSignDocumentSlider(documentId, memberHash);
	}
	function _modifyDocument({
		documentId
	}) {
		return crm_router.Router.Instance.openSignDocumentModifySlider(documentId);
	}
	async function _updateActivityDeadline(activityId, value) {
		const valueInSiteFormat = main_date.DateTimeFormat.format(crm_timeline_tools.DatetimeConverter.getSiteDateFormat(), value);
		let response;
		try {
			response = await main_core.ajax.runAction('crm.timeline.signdocument.updateActivityDeadline', {
				data: {
					activityId: activityId,
					activityDeadline: valueInSiteFormat
				}
			});
		} catch (responseWithError) {
			console.error(responseWithError);
			return;
		}
		const newCreateDate = response.data.document?.activityDeadline;
		if (valueInSiteFormat !== newCreateDate) {
			console.error("Updated document create date without errors, but for some reason date from the backend doesn't match sent value");
		}
	}
	function _resendDocument({
		documentId,
		recipientHash
	}, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		return new Promise((resolve, reject) => {
			main_core.ajax.runAction('sign.internal.document.resendFile', {
				data: {
					memberHash: recipientHash,
					documentId: documentId
				}
			}).then(() => {
				ui_notification.UI.Notification.Center.notify({
					content: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_SIGN_DOCUMENT_RESEND_SUCCESS'),
					autoHideDelay: 5000
				});
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
				resolve();
			}, response => {
				ui_notification.UI.Notification.Center.notify({
					content: response.errors[0].message,
					autoHideDelay: 5000
				});
				if (animationCallbacks.onStop) {
					animationCallbacks.onStop();
				}
				reject();
			});
			console.log('resend document ' + documentId + ' for ' + recipientHash);
		});
	}
	function _touchSigner({
		documentId
	}) {
		console.log('touch signer document ' + documentId);
	}
	function _download({
		filename,
		downloadLink
	}, animationCallbacks) {
		if (animationCallbacks.onStart) {
			animationCallbacks.onStart();
		}
		const link = document.createElement('a');
		/*link.href = '/bitrix/services/main/ajax.php?action=sign.document.getFileForSrc' +
			'&memberHash=' + memberHash +
			'&documentHash=' + documentHash;*/
		link.href = downloadLink;
		link.setAttribute('download', filename || '');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		if (animationCallbacks.onStop) {
			animationCallbacks.onStop();
		}
	}

	async function tryToResendWithMessage(params) {
		const menuBar = BX.Crm?.Timeline?.MenuBar?.getDefault();
		if (!menuBar) {
			return false;
		}
		const messageItem = menuBar.getItemById('message');
		if (!messageItem) {
			return false;
		}
		if (messageItem.shouldConfirmStateChange(params)) {
			const {
				isCancelled
			} = await confirmStateChange();
			if (isCancelled) {
				return true;
			}
		}
		menuBar.scrollIntoView();
		menuBar.setActiveItemById('message');
		void messageItem.tryToResend(params);
		return true;
	}
	function confirmStateChange() {
		return new Promise(resolve => {
			ui_dialogs_messagebox.MessageBox.show({
				modal: true,
				title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_MESSAGE_RESEND_CONFIRM_DIALOG_TITLE'),
				message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_MESSAGE_RESEND_CONFIRM_DIALOG_MESSAGE'),
				buttons: ui_dialogs_messagebox.MessageBoxButtons.OK_CANCEL,
				okCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_SMS_RESEND_CONFIRM_DIALOG_OK_BTN'),
				onOk: messageBox => {
					messageBox.close();
					resolve({
						isCancelled: false
					});
				},
				onCancel: messageBox => {
					messageBox.close();
					resolve({
						isCancelled: true
					});
				}
			});
		});
	}

	function _callSuper$6(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$6() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$6 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$6(e, a) { _checkPrivateRedeclaration$6(e, a), a.add(e); }
	function _checkPrivateRedeclaration$6(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$6(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Sms_brand = /*#__PURE__*/new WeakSet();
	let Sms = /*#__PURE__*/function (_Base) {
		function Sms(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Sms);
			_this = _callSuper$6(this, Sms, [...args]);
			_classPrivateMethodInitSpec$6(_this, _Sms_brand);
			return _this;
		}
		babelHelpers.inherits(Sms, _Base);
		return babelHelpers.createClass(Sms, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Activity:Sms:Resend' && main_core.Type.isPlainObject(actionData.params)) {
					void _assertClassBrand$6(_Sms_brand, this, _resendSms).call(this, actionData.params);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Sms';
			}
		}]);
	}(Base);
	async function _resendSms(params) {
		const messageParams = {
			backend: {
				senderCode: params.senderCode,
				id: params.senderId
			},
			fromId: params.from,
			client: params.client,
			text: params.text
		};
		if (await tryToResendWithMessage(messageParams)) {
			return;
		}
		const menuBar = BX.Crm?.Timeline?.MenuBar?.getDefault();
		if (!menuBar) {
			throw new Error('"BX.Crm?.Timeline.MenuBar" component not found');
		}
		const smsItem = menuBar.getItemById('sms');
		if (!smsItem) {
			throw new Error('"BX.Crm.Timeline.MenuBar.Sms" component not found');
		}
		const goToEditor = () => {
			menuBar.scrollIntoView();
			menuBar.setActiveItemById('sms');
			smsItem.tryToResend(params.senderId, params.from, params.client, params.text);
		};
		const {
			text,
			templateId
		} = smsItem.getSendData();
		if (main_core.Type.isStringFilled(text) || templateId !== null) {
			ui_dialogs_messagebox.MessageBox.show({
				modal: true,
				title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_SMS_RESEND_CONFIRM_DIALOG_TITLE'),
				message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_SMS_RESEND_CONFIRM_DIALOG_MESSAGE'),
				buttons: ui_dialogs_messagebox.MessageBoxButtons.OK_CANCEL,
				okCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_SMS_RESEND_CONFIRM_DIALOG_OK_BTN'),
				onOk: messageBox => {
					messageBox.close();
					goToEditor();
				},
				onCancel: messageBox => messageBox.close()
			});
		} else {
			goToEditor();
		}
	}

	function _callSuper$5(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$5() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$5 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$5(e, a) { _checkPrivateRedeclaration$5(e, a), a.add(e); }
	function _checkPrivateRedeclaration$5(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$5(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Task_brand = /*#__PURE__*/new WeakSet();
	let Task = /*#__PURE__*/function (_Base) {
		function Task(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Task);
			_this = _callSuper$5(this, Task, [...args]);
			_classPrivateMethodInitSpec$5(_this, _Task_brand);
			return _this;
		}
		babelHelpers.inherits(Task, _Base);
		return babelHelpers.createClass(Task, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData,
					animationCallbacks
				} = actionParams;
				if (!actionData) {
					return;
				}
				const taskId = actionData.taskId ?? null;
				if (!taskId) {
					return;
				}
				if (actionType !== 'jsEvent') {
					return;
				}
				switch (action) {
					case 'Task:Ping':
						this.ping(actionData);
						break;
					case 'Task:ChangeDeadline':
						this.changeDeadline(item, actionData);
						break;
					case 'Task:View':
						this.view(actionData);
						break;
					case 'Task:Edit':
						this.edit(actionData);
						break;
					case 'Task:Delete':
						this.delete(item, actionData);
						break;
					case 'Task:ResultView':
						this.viewResult(actionData);
						break;
				}
			}
		}, {
			key: "ping",
			value: function ping(actionData) {
				if (!actionData.taskId) {
					return;
				}
				main_core.ajax.runAction('tasks.task.ping', {
					data: {
						taskId: actionData.taskId
					}
				}).then(response => {
					if (response.status === 'success') {
						ui_notification.UI.Notification.Center.notify({
							content: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_TASK_PING_SENT'),
							autoHideDelay: 3000
						});
					}
				});
			}
		}, {
			key: "changeDeadline",
			value: function changeDeadline(item, actionData) {
				if (!actionData.taskId || !actionData.value) {
					return;
				}
				main_core.ajax.runAction('tasks.task.update', {
					data: {
						taskId: actionData.taskId,
						fields: {
							DEADLINE: new Date(actionData.valueTs * 1000).toISOString()
						},
						params: {
							skipTimeZoneOffset: 'DEADLINE'
						}
					}
				}).catch(response => {
					const errors = response.errors ?? null;
					if (errors.length > 0) {
						ui_notification.UI.Notification.Center.notify({
							content: errors[0].message,
							autoHideDelay: 3000
						});
						item.forceRefreshLayout();
					}
				});
			}
		}, {
			key: "view",
			value: function view(actionData) {
				if (!actionData.path) {
					return;
				}
				BX.SidePanel.Instance.open(actionData.path, {
					cacheable: false
				});
			}
		}, {
			key: "edit",
			value: function edit(actionData) {
				if (!actionData.path) {
					return;
				}
				BX.SidePanel.Instance.open(actionData.path, {
					cacheable: false
				});
			}
		}, {
			key: "delete",
			value: function _delete(item, actionData) {
				if (!actionData.taskId) {
					return;
				}
				const entityTypeName = _assertClassBrand$5(_Task_brand, this, _getEntityTypeName).call(this, item);
				const messageBox = new ui_dialogs_messagebox.MessageBox({
					message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_TASK_CONFIRM_DELETE'),
					buttons: BX.UI.Dialogs.MessageBoxButtons.YES_NO,
					onYes: () => {
						main_core.ajax.runAction('tasks.V2.Task.delete', {
							json: {
								taskId: actionData.taskId
							},
							analytics: {
								tool: 'tasks',
								category: 'task_operations',
								event: 'task_delete',
								type: 'task',
								c_section: 'crm',
								c_sub_section: entityTypeName,
								c_element: 'context_menu'
							}
						}).then(() => {
							messageBox.close();
						}).catch(error => {
							ui_notification.UI.Notification.Center.notify({
								content: error.errors[0].message ?? 'Error',
								autoHideDelay: 3000
							});
							messageBox.close();
						});
					},
					onNo: () => {
						messageBox.close();
					}
				});
				messageBox.show();
			}
		}, {
			key: "viewResult",
			value: function viewResult(actionData) {
				if (!actionData.taskId) {
					return;
				}
				if (!actionData.path) {
					return;
				}
				main_core.ajax.runAction('tasks.task.result.getLast', {
					data: {
						taskId: actionData.taskId
					}
				}).then(response => {
					if (response.status === 'success') {
						const resultId = response.data.result;
						BX.SidePanel.Instance.open(actionData.path + '?RID=' + resultId, {
							cacheable: false
						});
					}
				});
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:TasksTask' || item.getType() === 'TasksTaskCreation' || item.getType() === 'TasksTaskModification' || item.getType() === 'Activity:TasksTaskComment';
			}
		}]);
	}(Base);
	function _getEntityTypeName(item) {
		const ownerTypeId = item.getOwnerTypeId();
		if (!ownerTypeId) {
			return null;
		}
		const entityTypeName = BX.CrmEntityType.resolveName(ownerTypeId);
		if (!entityTypeName) {
			return null;
		}
		return entityTypeName.toLowerCase();
	}

	function _callSuper$4(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$4() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$4 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$4(e, a) { _checkPrivateRedeclaration$4(e, a), a.add(e); }
	function _checkPrivateRedeclaration$4(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$4(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Telegram_brand = /*#__PURE__*/new WeakSet();
	let Telegram = /*#__PURE__*/function (_Base) {
		function Telegram(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Telegram);
			_this = _callSuper$4(this, Telegram, [...args]);
			_classPrivateMethodInitSpec$4(_this, _Telegram_brand);
			return _this;
		}
		babelHelpers.inherits(Telegram, _Base);
		return babelHelpers.createClass(Telegram, [{
			key: "getDeleteActionMethod",
			value: function getDeleteActionMethod() {
				return 'crm.timeline.activity.delete';
			}
		}, {
			key: "getDeleteActionCfg",
			value: function getDeleteActionCfg(recordId, ownerTypeId, ownerId) {
				return {
					data: {
						activityId: recordId,
						ownerTypeId,
						ownerId
					}
				};
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Activity:Telegram:Resend' && main_core.Type.isPlainObject(actionData.params)) {
					void _assertClassBrand$4(_Telegram_brand, this, _resendTelegram).call(this, actionData.params);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Telegram';
			}
		}]);
	}(Base);
	async function _resendTelegram(params) {
		const messageParams = {
			backend: {
				senderCode: params.senderCode,
				id: params.senderId
			},
			fromId: params.from,
			client: params.client,
			text: params.text
		};
		const wasResendAvailable = await tryToResendWithMessage(messageParams);
		if (!wasResendAvailable) {
			console.error('BX.Crm.Timeline.Item.Controllers.Telegram: could not resend message via message menubar item');
		}
	}

	function _callSuper$3(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$3() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$3 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$3(e, a) { _checkPrivateRedeclaration$3(e, a), a.add(e); }
	function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration$3(e, t), t.set(e, a); }
	function _checkPrivateRedeclaration$3(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand$3(s, a)); }
	function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand$3(s, a), r), r; }
	function _assertClassBrand$3(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _responsibleUserSelectorDialog = /*#__PURE__*/new WeakMap();
	var _ToDo_brand = /*#__PURE__*/new WeakSet();
	let ToDo = /*#__PURE__*/function (_Base) {
		function ToDo(...args) {
			var _this;
			babelHelpers.classCallCheck(this, ToDo);
			_this = _callSuper$3(this, ToDo, [...args]);
			_classPrivateMethodInitSpec$3(_this, _ToDo_brand);
			_classPrivateFieldInitSpec(_this, _responsibleUserSelectorDialog, null);
			return _this;
		}
		babelHelpers.inherits(ToDo, _Base);
		return babelHelpers.createClass(ToDo, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'ColorSelector:Change' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _runUpdateColorAction).call(this, item, actionData);
				}
				if (action === 'EditableDescription:StartEdit') {
					item.highlightContentBlockById('description', true);
				}
				if (action === 'EditableDescription:FinishEdit') {
					item.highlightContentBlockById('description', false);
				}
				if (action === 'Activity:ToDo:AddFile' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _showFileUploaderPopup).call(this, item, actionData);
				}
				if (action === 'Activity:ToDo:ChangeResponsible' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _showResponsibleUserSelector).call(this, item, actionData);
				}
				if (action === 'Activity:ToDo:Repeat' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _emitRepeatTodo).call(this, item, actionData);
				}
				if (action === 'Activity:ToDo:Update' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _emitUpdateTodo).call(this, item, actionData);
				}
				if (action === 'Activity:ToDo:ShowCalendar' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _showCalendar).call(this, item, actionData);
				}
				if (action === 'Activity:ToDo:Client:Click' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _openClient).call(this, actionData.entityId, actionData.entityTypeId);
				}
				if (action === 'Activity:ToDo:User:Click' && actionData) {
					_assertClassBrand$3(_ToDo_brand, this, _openUser).call(this, actionData.userId);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:ToDo';
			}
		}]);
	}(Base);
	function _showFileUploaderPopup(item, actionData) {
		const isValidParams = main_core.Type.isNumber(actionData.entityId) && main_core.Type.isNumber(actionData.entityTypeId) && main_core.Type.isNumber(actionData.ownerId) && main_core.Type.isNumber(actionData.ownerTypeId);
		if (!isValidParams) {
			return;
		}
		actionData.files = actionData.files.split(',').filter(id => main_core.Type.isNumber(id));
		const fileList = item.getLayoutContentBlockById('fileList');
		if (fileList) {
			fileList.showFileUploaderPopup(actionData);
		} else {
			const popup = new crm_activity_fileUploaderPopup.FileUploaderPopup(actionData);
			popup.show();
		}
	}
	function _showResponsibleUserSelector(item, actionData) {
		const isValidParams = main_core.Type.isNumber(actionData.id) && main_core.Type.isNumber(actionData.ownerId) && main_core.Type.isNumber(actionData.ownerTypeId) && main_core.Type.isNumber(actionData.responsibleId);
		if (!isValidParams) {
			return;
		}
		_classPrivateFieldSet(_responsibleUserSelectorDialog, this, new ui_entitySelector.Dialog({
			id: 'responsible-user-selector-dialog-' + actionData.id,
			targetNode: item.getLayoutFooterMenu().$el,
			context: 'CRM_ACTIVITY_TODO_RESPONSIBLE_USER',
			multiple: false,
			dropdownMode: true,
			showAvatars: true,
			enableSearch: true,
			width: 450,
			entities: [{
				id: 'user'
			}],
			preselectedItems: [['user', actionData.responsibleId]],
			undeselectedItems: [['user', actionData.responsibleId]],
			events: {
				'Item:onSelect': event => {
					const selectedItem = event.getData().item.getDialog().getSelectedItems()[0];
					if (selectedItem) {
						_assertClassBrand$3(_ToDo_brand, this, _runResponsibleUserAction).call(this, actionData.id, actionData.ownerId, actionData.ownerTypeId, selectedItem.getId());
					}
				},
				'Item:onDeselect': event => {
					setTimeout(() => {
						const selectedItems = _classPrivateFieldGet(_responsibleUserSelectorDialog, this).getSelectedItems();
						if (selectedItems.length === 0) {
							_classPrivateFieldGet(_responsibleUserSelectorDialog, this).hide();
							_assertClassBrand$3(_ToDo_brand, this, _runResponsibleUserAction).call(this, actionData.id, actionData.ownerId, actionData.ownerTypeId, actionData.responsibleId);
						}
					}, 100);
				}
			}
		}));
		_classPrivateFieldGet(_responsibleUserSelectorDialog, this).show();
	}
	function _emitRepeatTodo(item, actionData) {
		main_core_events.EventEmitter.emit('crm:timeline:todo:repeat', actionData);
	}
	function _emitUpdateTodo(item, actionData) {
		main_core_events.EventEmitter.emit('crm:timeline:todo:update', actionData);
	}
	function _runUpdateColorAction(item, actionData) {
		const {
			id,
			ownerTypeId,
			ownerId
		} = item.getDataPayload();
		const {
			colorId
		} = actionData;
		const isValidParams = main_core.Type.isNumber(id) && main_core.Type.isNumber(ownerId) && main_core.Type.isNumber(ownerTypeId) && main_core.Type.isStringFilled(colorId);
		if (!isValidParams) {
			return;
		}
		const data = {
			ownerTypeId,
			ownerId,
			id,
			colorId
		};
		main_core.ajax.runAction('crm.activity.todo.updateColor', {
			data
		}).catch(response => {
			ui_notification.UI.Notification.Center.notify({
				content: response.errors[0].message,
				autoHideDelay: 5000
			});
			throw response;
		});
	}
	function _showCalendar(item, actionData) {
		const {
			calendarEventId,
			entryDateFrom,
			timezoneOffset
		} = actionData;
		if (!window.top.BX.Calendar) {
			// eslint-disable-next-line no-console
			console.warn('BX.Calendar not found');
			return;
		}
		new window.top.BX.Calendar.SliderLoader(calendarEventId, {
			entryDateFrom,
			timezoneOffset,
			calendarContext: null
		}).show();
	}
	function _runResponsibleUserAction(id, ownerId, ownerTypeId, responsibleId) {
		const data = {
			ownerTypeId,
			ownerId,
			id,
			responsibleId
		};
		main_core.ajax.runAction('crm.activity.todo.updateResponsibleUser', {
			data
		}).catch(response => {
			ui_notification.UI.Notification.Center.notify({
				content: response.errors[0].message,
				autoHideDelay: 5000
			});
			throw response;
		});
	}
	function _openClient(entityId, entityTypeId) {
		if (ui_sidepanel.SidePanel.Instance) {
			const entityTypeName = BX.CrmEntityType.resolveName(entityTypeId).toLowerCase();
			const path = `/crm/${entityTypeName}/details/${entityId}/`;
			ui_sidepanel.SidePanel.Instance.open(path);
		}
	}
	function _openUser(userId) {
		if (ui_sidepanel.SidePanel.Instance) {
			const path = `/company/personal/user/${userId}/`;
			ui_sidepanel.SidePanel.Instance.open(path);
		}
	}

	function _callSuper$2(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$2() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$2 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$2(e, a) { _checkPrivateRedeclaration$2(e, a), a.add(e); }
	function _checkPrivateRedeclaration$2(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$2(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _Visit_brand = /*#__PURE__*/new WeakSet();
	let Visit = /*#__PURE__*/function (_Base) {
		function Visit(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Visit);
			_this = _callSuper$2(this, Visit, [...args]);
			_classPrivateMethodInitSpec$2(_this, _Visit_brand);
			return _this;
		}
		babelHelpers.inherits(Visit, _Base);
		return babelHelpers.createClass(Visit, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Activity:Visit:ChangePlayerState' && actionData && actionData.recordId) {
					_assertClassBrand$2(_Visit_brand, this, _changePlayerState).call(this, item, actionData.recordId);
				}
				if (action === 'Activity:Visit:Schedule' && actionData) {
					this.runScheduleAction(actionData.activityId, actionData.scheduleDate);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Visit';
			}
		}]);
	}(Base);
	function _changePlayerState(item, recordId) {
		const player = item?.getLayoutContentBlockById('visitGroupOfBlocks')?.getBlockById('audio');
		if (!player) {
			return;
		}
		if (recordId !== player.id) {
			return;
		}
		if (player.state === 'play') {
			player.pause();
		} else {
			player.play();
		}
	}

	function _callSuper$1(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$1() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$1 = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec$1(e, a) { _checkPrivateRedeclaration$1(e, a), a.add(e); }
	function _checkPrivateRedeclaration$1(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand$1(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	var _WhatsApp_brand = /*#__PURE__*/new WeakSet();
	let WhatsApp = /*#__PURE__*/function (_Base) {
		function WhatsApp(...args) {
			var _this;
			babelHelpers.classCallCheck(this, WhatsApp);
			_this = _callSuper$1(this, WhatsApp, [...args]);
			_classPrivateMethodInitSpec$1(_this, _WhatsApp_brand);
			return _this;
		}
		babelHelpers.inherits(WhatsApp, _Base);
		return babelHelpers.createClass(WhatsApp, [{
			key: "getDeleteActionMethod",
			value: function getDeleteActionMethod() {
				return 'crm.timeline.activity.delete';
			}
		}, {
			key: "getDeleteActionCfg",
			value: function getDeleteActionCfg(recordId, ownerTypeId, ownerId) {
				return {
					data: {
						activityId: recordId,
						ownerTypeId,
						ownerId,
						analytics: _assertClassBrand$1(_WhatsApp_brand, this, _buildAnalyticsData).call(this)
					}
				};
			}
		}, {
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent') {
					return;
				}
				if (action === 'Activity:Whatsapp:Resend' && main_core.Type.isPlainObject(actionData.params)) {
					void _assertClassBrand$1(_WhatsApp_brand, this, _resendWhatsApp).call(this, actionData.params);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Whatsapp';
			}
		}]);
	}(Base);
	async function _resendWhatsApp(params) {
		const messageParams = {
			backend: {
				senderCode: params.senderCode,
				id: params.senderId
			},
			fromId: params.from,
			client: params.client,
			template: params.template
		};
		if (await tryToResendWithMessage(messageParams)) {
			return;
		}
		const menuBar = BX.Crm?.Timeline?.MenuBar?.getDefault();
		if (!menuBar) {
			throw new Error('"BX.Crm?.Timeline.MenuBar" component not found');
		}
		const whatsAppItem = menuBar.getItemById('whatsapp');
		if (!whatsAppItem) {
			throw new Error('"BX.Crm.Timeline.MenuBar.WhatsApp" component not found');
		}
		const goToEditor = () => {
			menuBar.scrollIntoView();
			menuBar.setActiveItemById('whatsapp');
			whatsAppItem.tryToResend(params.template, params.from, params.client);
		};
		const templateId = params.template?.ORIGINAL_ID;
		const filledPlaceholders = params.template?.FILLED_PLACEHOLDERS ?? [];
		const currentTemplateId = whatsAppItem.getTemplate()?.ORIGINAL_ID;
		const currentFilledPlaceholders = whatsAppItem.getTemplate()?.FILLED_PLACEHOLDERS ?? [];
		if (main_core.Type.isNumber(templateId) && templateId > 0 && main_core.Type.isNumber(currentTemplateId) && currentTemplateId > 0 && (templateId !== currentTemplateId || JSON.stringify(filledPlaceholders) !== JSON.stringify(currentFilledPlaceholders))) {
			ui_dialogs_messagebox.MessageBox.show({
				modal: true,
				title: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_WHATSAPP_RESEND_CONFIRM_DIALOG_TITLE'),
				message: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_WHATSAPP_RESEND_CONFIRM_DIALOG_MESSAGE'),
				buttons: ui_dialogs_messagebox.MessageBoxButtons.OK_CANCEL,
				okCaption: main_core.Loc.getMessage('CRM_TIMELINE_ITEM_ACTIVITY_SMS_RESEND_CONFIRM_DIALOG_OK_BTN'),
				onOk: messageBox => {
					messageBox.close();
					goToEditor();
				},
				onCancel: messageBox => messageBox.close()
			});
		} else {
			goToEditor();
		}
	}
	function _buildAnalyticsData(ownerTypeId) {
		return crm_integration_analytics.Builder.Communication.DeleteEvent.createDefault(ownerTypeId).setElement(crm_integration_analytics.Dictionary.ELEMENT_WA_MESSAGE_DELETE).buildData();
	}

	function _callSuper(t, o, e) { return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function () { return !!t; })(); }
	function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
	function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
	function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
	const DOWNLOAD_DELAY = 300;
	var _Zoom_brand = /*#__PURE__*/new WeakSet();
	let Zoom = /*#__PURE__*/function (_Base) {
		function Zoom(...args) {
			var _this;
			babelHelpers.classCallCheck(this, Zoom);
			_this = _callSuper(this, Zoom, [...args]);
			_classPrivateMethodInitSpec(_this, _Zoom_brand);
			return _this;
		}
		babelHelpers.inherits(Zoom, _Base);
		return babelHelpers.createClass(Zoom, [{
			key: "onItemAction",
			value: function onItemAction(item, actionParams) {
				const {
					action,
					actionType,
					actionData
				} = actionParams;
				if (actionType !== 'jsEvent' || !actionData) {
					return;
				}
				if (action === 'Activity:Zoom:CopyInviteUrl') {
					_assertClassBrand(_Zoom_brand, this, _copyToClipboard).call(this, actionData.url);
				}
				if (action === 'Activity:Zoom:Schedule') {
					this.runScheduleAction(actionData.activityId, actionData.scheduleDate);
				}
				if (action === 'Activity:Zoom:CopyPassword') {
					_assertClassBrand(_Zoom_brand, this, _copyToClipboard).call(this, actionData.password);
				}
				if (action === 'Activity:Zoom:DownloadAllRecords' && main_core.Type.isArray(actionData.urlList)) {
					_assertClassBrand(_Zoom_brand, this, _downloadAllRecords).call(this, actionData.urlList);
				}
			}
		}], [{
			key: "isItemSupported",
			value: function isItemSupported(item) {
				return item.getType() === 'Activity:Zoom';
			}
		}]);
	}(Base);
	function _copyToClipboard(input) {
		if (main_core.Type.isStringFilled(input)) {
			const isSuccess = BX.clipboard.copy(input);
			if (isSuccess) {
				ui_notification.UI.Notification.Center.notify({
					content: main_core.Loc.getMessage('CRM_COMMON_ACTION_COPY_TO_CLIPBOARD_SUCCESS'),
					autoHideDelay: 2000
				});
			}
		}
	}
	function _downloadAllRecords(urlList) {
		const download = urls => {
			const url = urls.pop();
			const a = document.createElement('a');
			a.setAttribute('href', url);
			if ('download' in a) {
				a.setAttribute('download', `zoom_record_file_${main_core.Text.getRandom(5)}.m4a`);
			}
			a.setAttribute('target', '_blank');
			a.click();
			if (urls.length === 0) {
				clearInterval(interval);
			}
		};
		const interval = setInterval(download, DOWNLOAD_DELAY, urlList);
	}

	ControllerManager.registerController(Activity);
	ControllerManager.registerController(CommonContentBlocks);
	ControllerManager.registerController(OpenLines);
	ControllerManager.registerController(Modification);
	ControllerManager.registerController(SignDocument);
	ControllerManager.registerController(Document);
	ControllerManager.registerController(Call);
	ControllerManager.registerController(ToDo);
	ControllerManager.registerController(Helpdesk);
	ControllerManager.registerController(Payment);
	ControllerManager.registerController(DealProductList);
	ControllerManager.registerController(Email);
	ControllerManager.registerController(OrderCheck);
	ControllerManager.registerController(FinalSummary);
	ControllerManager.registerController(SalescenterApp);
	ControllerManager.registerController(Delivery);
	ControllerManager.registerController(RestApp);
	ControllerManager.registerController(Comment);
	ControllerManager.registerController(Sharing);
	ControllerManager.registerController(Task);
	ControllerManager.registerController(CallTranscriptResult);
	ControllerManager.registerController(TranscriptSummaryResult);
	ControllerManager.registerController(EntityFieldsFillingResult);
	ControllerManager.registerController(CallScoringResult);
	ControllerManager.registerController(SignB2eDocument);
	ControllerManager.registerController(Visit);
	ControllerManager.registerController(Zoom);
	ControllerManager.registerController(Sms);
	ControllerManager.registerController(WhatsApp);
	ControllerManager.registerController(Telegram);
	ControllerManager.registerController(Notification);
	ControllerManager.registerController(Bizproc);
	ControllerManager.registerController(Booking);
	ControllerManager.registerController(WaitListItem);
	ControllerManager.registerController(RepeatSale);

	exports.BaseController = Base;
	exports.ConfigurableItem = ConfigurableItem;
	exports.ControllerManager = ControllerManager;
	exports.Item = Item;
	exports.StreamType = StreamType;

})(this.BX.Crm.Timeline = this.BX.Crm.Timeline || {}, BX.Crm.Timeline, BX.Crm.Timeline, BX, BX.Vue3, BX, BX.Main, BX, BX.UI.Analytics, BX, BX.UI, BX.UI.System, BX.UI, BX.Main, BX, BX.Crm.Field, BX.Event, BX.Vue3.Directives, BX.UI, BX.UI, BX.Crm, BX.UI.Dialogs, BX.UI.EntitySelector, BX, BX.Crm.Timeline, BX.UI, window, BX, BX.SidePanel, BX.Calendar.Sharing, BX.Calendar, BX.Crm.AI, BX.UI.Feedback, BX.Crm.AI, BX.UI.IconSet, BX.UI.System.Chip.Vue, BX.Location.Core, BX.Location.Widget, BX.UI.IconSet, BX.UI.System.Label, BX.UI.System.Label.Vue, BX.Crm.Timeline.Editors, BX.UI.BBCode.Formatter, BX.UI.TextEditor, BX.UI, BX, BX.UI, BX.UI, BX.Crm.Activity, BX.UI.Icons.Generator, BX.Crm, window, BX.Crm.Field, BX.Currency, BX.UI, BX.Crm.Field, BX.Bizproc, BX, BX, BX.Crm, BX, BX.Crm.Integration.Analytics);
//# sourceMappingURL=index.bundle.js.map
