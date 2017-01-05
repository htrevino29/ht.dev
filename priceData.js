var prices = {
	masterPlans: {
		uiText: "Master plans",
		sub: "menu",
		options: {
			HN: {
				uiText: "Heavenly Nest",
				price: 309900,
				image: "FLOOR_PLAN.jpg",
				folder: "HEAVENLY NEST/10 GENERAL SALES PLAN/LAYERS APP",
				pdf: "",
				description: "Heavenly Nest",
				area: 1953.665,
				areaCoveredPorch: 629.647,
				areaTotalGarage: 534.111,
				blueprints: [
								{location: "HEAVENLY NEST/01 MASTER PLANS/01_RESORT STYLE/RJ_HN_0101-01.pdf"}
							],
				styles: {
					traditional: {
						popupImages: [
							{src: "previews/04_RENDERS/HEAVENLY NEST/HEAVENLY_NEST_FRONTAL_DIA_01.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/HEAVENLY_NEST_FRONTAL_NOCHE.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/HEAVENLY_NEST_POSTERIOR_DIA.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/HEAVENLY_NEST_POSTERIOR_NOCHE.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/INTERIOR_COWBOY.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/TEASER.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/TERRAZA.jpg", type: 'image'}
						]
					}
				}
			},
			AB: {
				uiText: "Airy Bliss",
				price: 385000,
				image: "FLOOR_PLAN.jpg",
				folder: "AIRY BLISS/10 GENERAL SALES PLAN/LAYERS APP",
				pdf: "",
				description: "Airy Bliss",
				area: 2877.819,
				areaCoveredPorch: 712.717,
				areaTotalGarage: 543.604,
				blueprints: [
								{location: "AIRY BLISS/01 MASTER PLAN/01_RESORT STYLE/RJ_AB_0101-01.pdf"}
							],
				styles: {
					traditional: {
						popupImages: [
							{src: "previews/04_RENDERS/AIRY BLISS/AIRY_BLISS_FRONTAL_DIA.jpg", type: 'image'},
							{src: "previews/04_RENDERS/AIRY BLISS/AIRY_BLISS_POSTERIOR_DIA.jpg", type: 'image'},
							{src: "previews/04_RENDERS/AIRY BLISS/AIRY_BLISS_POSTERIOR_TARDE.jpg", type: 'image'},
							{src: "previews/04_RENDERS/AIRY BLISS/INTERIOR_COWBOY.jpg", type: 'image'},
							{src: "previews/04_RENDERS/AIRY BLISS/TEASER.jpg", type: 'image'},
							{src: "previews/04_RENDERS/HEAVENLY NEST/TERRAZA.jpg", type: 'image'}
						]
					}
				}
			},
			VH: {
				uiText: "Vintage Heaven",
				price: 450000,
				image: "FLOOR_PLAN.jpg",
				folder: "VINTAGE HEAVEN/10 GENERAL SALES PLAN/LAYER APP",
				pdf: "",
				description: "Vintage Heaven",
				area: 3720.683,
				areaCoveredPorch: 662.836,
				areaTotalGarage: 530.154,
				blueprints: [
								{location: "VINTAGE HEAVEN/01 MASTER PLANS/01_RESORT STYLE/RJ_VH_0101-01.pdf"}
							],
				styles: {
					traditional: {
						popupImages: [
							{src: "previews/04_RENDERS/VINTAGE HEAVEN/VINTAGE_HEAVEN_FRONTAL_TARDE.jpg", type: 'image'},
							{src: "previews/04_RENDERS/VINTAGE HEAVEN/VINTAGE_HEAVEN_POSTERIOR_NOCHE.jpg", type: 'image'},
							{src: "previews/04_RENDERS/VINTAGE HEAVEN/VINTAGE_HEAVEN_POSTERIOR_TARDE.jpg", type: 'image'},
							{src: "previews/04_RENDERS/VINTAGE HEAVEN/VINTAGE_HEAVEN_RECAMARA.jpg", type: 'image'},
							{src: "previews/04_RENDERS/VINTAGE HEAVEN/TERRAZA.jpg", type: 'image'}
						]
					}
				}
			},
			GH: {
				uiText: "Glorious Hills",
				price: 249900,
				image: "GH_01_Floor BASE.jpg",
				folder: "GLORIOUS HILL/10 GENERAL SALES PLAN/LAYER APP GH",
				pdf: "",
				description: "Glorious Hills",
				area: 1848,
				areaCoveredPorch: 125,
				areaTotalGarage: 478,
				blueprints: [
								{location: "GLORIOUS HILL/01 MASTER PLANS/01_TRADITIONAL STYLE/RJ_GH_0101.pdf"}
							],
				styles: {
					traditional: {
						popupImages: [
							{src: "previews/04_RENDERS/GLORIOUS HILLS/traditionalFrente.jpg", type: 'image'},
							{src: "previews/04_RENDERS/GLORIOUS HILLS/traditionalPosterior.jpg", type: 'image'}
						]
					},
					tuscan: {
						popupImages: [
							{src: "previews/04_RENDERS/GLORIOUS HILLS/tuscanFrente.jpg", type: 'image'},
							{src: "previews/04_RENDERS/GLORIOUS HILLS/tuscanPosterior.jpg", type: 'image'}
						]
					}
				}
			}
		}
	},
	hillCountryStyle:{
		uiText: "Hill Country Style",
		sub: "menu",
		selection: "selection.hillCountryStyle",
		options:{
			exteriorStone:{
				uiText: "Exterior Stone",
				sub: "choice",
				selection: "selection.hillCountryStyle.exteriorStone",
				options:{
					fullWainscoat: {
						uiText: "Full Wainscoat",
						selection: "selection.hillCountryStyle.exteriorStone.fullWainscoat",
						id: 1,
						stone: "ws",
						price: [
								{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 7500},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 7500},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 8500},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 7000}
							],
						area: [
								{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 1953.665},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 1944.191},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 2461.416}
							],
						areaCoveredPorch: [
								{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", areaCoveredPorch: 629.647},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", areaCoveredPorch: 629.665},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", areaCoveredPorch: 556.225}
							],
						areaTotalGarage: [
								{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", areaTotalGarage: 534.111},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", areaTotalGarage: 543.604},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", areaTotalGarage: 530.154}
							]
					},
					garageMasterFullWainscoat: {
						uiText: "Garage and Master Plus Full Wainscoat",
						selection: "selection.hillCountryStyle.exteriorStone.garageMasterFullWainscoat",
						id: 2,
						stone: "ws",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
						],
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 13500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 13500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 16000},
						],
						area: [
								{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 933.6283},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 1259.26736}
							],
						areaCoveredPorch: [
								{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", areaCoveredPorch: 83.0521},
								{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", areaCoveredPorch: 106.61112}
							]
					},
					garageFullWainscoat: {
						uiText: "Garage Plus Full Wainscot",
						selection: "selection.hillCountryStyle.exteriorStone.garageFullWainscoat",
						id: 3,
						stone: "ws",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						price: 14000
					},
					chimney: {
						uiText: "Chimney",
						selection: "selection.hillCountryStyle.exteriorStone.chimney",
						stone: "fs",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"}
						],
						price: 8500
					}
				}
			},
			roof:{
				uiText: "Roof",
				sub: "choice",
				selection: "selection.hillCountryStyle.roof",
				options:{
					metalRoof:{
						uiText: "Metal Roof",
						description: "Metal Roof",
						id: 4,
						selection: "selection.hillCountryStyle.roof.metalRoof",
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 17000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 18000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 19000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 17000}
						]
					},
					tileRoof:{
						uiText: "Tile Roof",
						description: "Tile Roof",
						id: 5,
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						selection: "selection.hillCountryStyle.roof.tileRoof",
						price: 24500
					}
				}
			}
		}
	},
	siteSpecific: {
		uiText: "Site specific",
		sub: "choice",
		selection: "selection.siteSpecific.allowance",
		options: {
			easy: {
				uiText: "Easy",
				price: [
						{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 10000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 10000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 12000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 10000}
					]
			},
			moderate: {
				uiText: "Moderate",
				price: [
						{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 18000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 18000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 22000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 18000}
					]
			},
			aggresive: {
				uiText: "Aggresive",
				price: [
						{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 30000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 30000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 34000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 30000}
					]
			},
			extreme: {
				uiText: "Extreme",
				price: [
						{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 45000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 45000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 50000},
						{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 45000}
					]
			}
		}
	},
	hobbies: {
		uiText: "Life Style Hobbies",
		options: {
			kitchen: {
				uiText: "Kitchen",
				description: "Kitchen",
				options:{
					ironChef: {
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"}
						],
						requiresAnd: [
							{field: "selection.hobbies.extendedPergola", value: null},
							{field: "selection.hobbies.jackJill", value: null},
							{field: "selection.hobbies.romanRoom", value: null},
							{field: "selection.hobbies.kitchen.kitchenRoyal", value: null}
						],
						uiText: "Iron Chef",
						description: "Iron Chef",
						selection: "selection.hobbies.kitchen.ironChef",
						inline: "true",
						id: 6,
						kitchen: "",
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 22000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 22000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 19000}
						],
						image: "IRON_CHEF.png",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 194.101},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 194.101},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 128}
						],
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/01 IRON CHEF/RJ_HN_0301.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/01 IRON CHEF/RJ_AB_0301.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0301.pdf"}
						]
					},
					GHIronChef: {
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						requiresAnd: [
							{field: "selection.hobbies.extendedPergola", value: null},
							{field: "selection.hobbies.jackJill", value: null},
							{field: "selection.hobbies.kitchen.kitchenRoyal", value: null}
						],
						uiText: "Iron Chef",
						description: "Iron Chef",
						selection: "selection.hobbies.kitchen.ironChef",
						inline: "true",
						id: 6,
						kitchen: "",
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 22000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 22000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 19000}
						],
						image: "IRON_CHEF.png",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 194.101},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 194.101},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 128}
						],
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/01 IRON CHEF/RJ_HN_0301.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/01 IRON CHEF/RJ_AB_0301.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0301.pdf"}
						]
					},
					kitchenRoyal: {
						requiresAnd: [
							{field: "selection.hobbies.kitchen.ironChef", value: null}
						],
						uiText: "Kitchen Royal",
						description: "Kitchen Royal",
						image: "ROYAL_KITCHEN.png",
						inline: "true",
						selection: "selection.hobbies.kitchen.kitchenRoyal",
						price: 2000,
						id: 7,
						kitchen: "kr",
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/13 KITCHEN ROYAL/RJ_HN_0313.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/13 KITCHEN ROYAL/RJ_AB_0313.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/12 KITCHEN ROYAL/RJ_VH_0312.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: ""}
						]
					}
				}
			},
			pergola: {
				requiresAnd: [
					{field: "selection.hobbies.extendedPergola", value: null},
					{field: "selection.hobbies.jackJill", value: null}
				],
				uiText: "Pergola",
				description : "Pergola",
				inline: "true",
				selection: "selection.hobbies.pergola",
				id: 8,
				price: 10000,
				areaCoveredPorch: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", areaCoveredPorch: 147.958},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", areaCoveredPorch: 147.958},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", areaCoveredPorch: 147.958},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", areaCoveredPorch: 140}
				],
				image: "PERGOLA.png",
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/02 PERGOLA/RJ_HN_0302.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/02 PERGOLA/RJ_AB_0302.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/02 PERGOLA/RJ_VH_0302.pdf"}
				]
			},
			pergolaGrill: {
				requiresAnd: [
					{field: "selection.hobbies.pergola", value: "prices.hobbies.options.pergola"}
				],
				uiText: "Pergola Grill",
				description: "Grill",
				id: 9,
				price: 5500,
				image: "GRILL.png",
				inline: "true",
				selection: "selection.hobbies.pergolaGrill"
			},
			extendedPergola: {
				requiresAnd: [
					{field: "selection.hobbies.kitchen.ironChef", value: null},
					{field: "selection.hobbies.pergola", value: null},
					{field: "selection.hobbies.livingRoomExtension", value: null},
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.romanRoom", value: null}
				],
				uiText: "Extended pergola",
				sub: "multiple",
				id: 10,
				price: 20000,
				description: "Extended Pergola",
				inline: "true",
				selection: "selection.hobbies.extendedPergola",
				image: "EXTENDED_PERGOLA.png",
				areaCoveredPorch: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", areaCoveredPorch: 305}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/03 EXTENDED PERGOLA/RH_HN_0303.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/03 EXTENDED PERGOLA/RH_AB_0303.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/03 EXTENDED PERGOLA/RH_VH_0303.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFESTYLE HOBBIES/RJ_GH_0303.pdf"}
				]
			},
			extendedPergolaGrill: {
				requiresAnd: [
					{field: "selection.hobbies.extendedPergola", value: "prices.hobbies.options.extendedPergola"}
				],
				uiText: "Extended Pergola Grill",
				description: "Grill",
				id: 11,
				price: 5500,
				image: "EXTENDED_PERGOLA_GRILL.png",
				inline: "true",
				selection: "selection.hobbies.extendedPergolaGrill"
			},
			flexroom: {
				uiText: "Flexroom",
				description: "Flexroom",
				sub: "multiple",
				selection: "selection.hobbies.flexroom",
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/04 FLEX ROOM/RJ_HN_030401.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/04 FLEX ROOM/RJ_AB_030401.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/04 FLEX ROOM/RJ_VH_030401.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0304.pdf"}
				],
				options: {
					media:{
						uiText: "Media 5.1 surround Sound",
						description: "Media 5.1 surround Sound",
						selection: "selection.hobbies.flexroom",
						image: "FLEX_MEDIA_ROOM.png",
						id: 12,
						price: 950
					},
					artsCrafts:{
						uiText: "Arts & Crafts Pre Plumb for future sink",
						description: "Arts & Crafts Pre Plumb for future sink",
						selection: "selection.hobbies.flexroom",
						image: "FLEX_ARTS_CRAFTS.png",
						id: 13,
						price: 1400
					}
				}
			},
			livingRoomExtension: {
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
				],
				requiresAnd: [
					{field: "selection.hobbies.extendedPergola", value: null},
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.romanRoom", value: null}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/05 LIVING ROOM EXTENSION/RJ_VH_0305.pdf"}
				],
				uiText: "Living Room Extension",
				image: "EXTENDED_LIVING_ROOM.png",
				selection: "selection.hobbies.livingRoomExtension",
				id: 14,
				inline: "true",
				area: 313.883,
				price: 27000,
				wsPrice: 2100,
				fsPrice: 6800,
				options: {
					media:{
						uiText: "Media 5.1 surround Sound",
						selection: "selection.hobbies.livingRoomExtension",
						id: 15,
						price: 950
					},
					artsCrafts:{
						uiText: "Arts & Crafts Pre Plumb for future sink",
						selection: "selection.hobbies.livingRoomExtension",
						id: 16,
						price: 1400
					},
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.livingRoomExtension",
						id: 17,
						price: 2100,
						area: 570.135,
						stone: "ws"
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.livingRoomExtension",
						id: 18,
						price: 6800,
						area: 570.135,
						stone: "fs"
					}
				}
			},
			jackJill: {
				requiresAnd: [
				  {field: "selection.hobbies.kitchen.ironChef", value: null},
					{field: "selection.hobbies.pergola", value: null},
					{field: "selection.hobbies.extendedPergola", value: null},
					{field: "selection.hobbies.livingRoomExtension", value: null},
					{field: "selection.hobbies.golfCartGarage", value: null},
					{field: "selection.hobbies.hobbyRoom", value: null},
					{field: "selection.hobbies.thirdGarage", value: null},
					{field: "selection.hobbies.romanRoom", value: null}
				],
				uiText: "Jack and Jill Bedrooms",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 60000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 60000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 60000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 57000}
				],
				wsPrice: 2100,
				fsPrice: 6800,
				id: 19,
				area: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 570.135},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 570.135},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 570.135},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 564}
				],
				inline: "true",
				hasAlt: "true",
				imageArr: [
					{field: "selection.hobbies.kitchen.kitchenRoyal", value: "null", image: "JACK_JILL.png"},
					{field: "selection.hobbies.kitchen.kitchenRoyal", value: "prices.hobbies.options.kitchen.options.kitchenRoyal", image: "KR_JACK_JILL.png"}
				],
				image: "JACK_JILL.png",
				stone: true,
				selection: "selection.hobbies.jackJill",
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/06 JACK & JILL BEDROOMS/RJ_HN_0306.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/06 JACK & JILL BEDROOMS/RJ_AB_0306.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/06 JACK & JILL BEDROOMS/RJ_VH_0306.pdf"}
				],
				options: {
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.jackJill",
						id: 20,
						price: 2100,
						stone: "ws",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 570.135},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 570.135},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 570.135},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 572}
						]
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.jackJill",
						stone: "fs",
						id: 21,
						price: 6800,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 570.135},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 570.135},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 570.135},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 572}
						]
					}
				}
			},
			golfCartGarage: {
				uiText: "Golf cart Garage",
				selection: "selection.hobbies.golfCartGarage",
				requiresAnd: [
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.hobbyRoom", value: null},
					{field: "selection.hobbies.thirdGarage", value: null},
					{field: "selection.hobbies.romanRoom", value: null}
				],
				id: 22,
				image: "GOLF_CART_GARAGE.png",
				stone: true,
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 23000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 23000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 23000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 20000}
				],
				wsPrice: 1100,
				fsPrice: 3800,
				inline: "true",
				area: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 204}
				],
				areaTotalGarage: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", areaTotalGarage: 228.504},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", areaTotalGarage: 228.504},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", areaTotalGarage: 229.777}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/07 GOLF CART GARAGE/RJ_HN_0307.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/07 GOLF CART GARAGE/RJ_AB_0307.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/07 GOLF CART GARAGE/RJ_VH_0307.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0307.pdf"}
				],
				options: {
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.golfCartGarage",
						id: 23,
						price: 1100,
						stone: "ws",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 222}
						]
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.golfCartGarage",
						id: 24,
						price: 3800,
						stone: "fs",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 222}
						]
					}
				}
			},
			hobbyRoom: {
				uiText: "Hobby room (Studio, Arts and Crafts)",
				description: "Hobby room (Studio, Arts and Crafts)",
				selection: "selection.hobbies.hobbyRoom",
				requiresAnd: [
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.golfCartGarage", value: null},
					{field: "selection.hobbies.thirdGarage", value: null},
					{field: "selection.hobbies.romanRoom", value: null}
				],
				image: "HOBBY_ROOM.png",
				stone: true,
				id: 25,
				inline: "true",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 25000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 25000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 25000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 21000}
				],
				wsPrice: 1100,
				fsPrice: 3800,
				area: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 228.503},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 228.503},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 229.777}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/08 HOBBY ROOM/RJ_HN_0308.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/08 HOBBY ROOM/RJ_AB_0308.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/08 HOBBY ROOM/RJ_VH_0308.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0308.pdf"}
				],
				options: {
					media:{
						uiText: "Media 5.1 surround Sound",
						selection: "selection.hobbies.hobbyRoom",
						id: 26,
						price: 68950,
						image: "HOBBY_ROOM MEDIA.png",
						GHonly: true,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 246}
						],
						stone: true
					},
					artsCrafts:{
						uiText: "Arts & Crafts Pre Plumb for future sink",
						selection: "selection.hobbies.hobbyRoom",
						id: 27,
						price: 69400,
						image: "HOBBY_ROOM ARTS.png",
						GHonly: true,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 246}
						],
						stone: true
					},
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.hobbyRoom",
						id: 28,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 269}
						],
						price: 1100,
						stone: "ws"
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.hobbyRoom",
						id: 29,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 269}
						],
						price: 3800,
						stone: "fs"
					}
				}
			},
			thirdGarage: {
				uiText: "Third Garage",
				description: "Third Garage",
				selection: "selection.hobbies.thirdGarage",
				image: "THIRD_GARAGE.png",
				stone: true,
				requiresAnd: [
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.golfCartGarage", value: null},
					{field: "selection.hobbies.hobbyRoom", value: null},
					{field: "selection.hobbies.romanRoom", value: null}
				],
				id: 30,
				inline: "true",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 24000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 24000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 24000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 22000}
				],
				wsPrice: 1300,
				fsPrice: 4250,
				area: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 242}
				],
				areaTotalGarage: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", areaTotalGarage: 287.398},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", areaTotalGarage: 287.398},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", areaTotalGarage: 288.668}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/09 THIRD GARAGE/RJ_HN_0309.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/09 THIRD GARAGE/RJ_AB_0309.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/09 THIRD GARAGE/RJ_VH_0309.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0309.pdf"}
				],
				options: {
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.thirdGarage",
						id: 31,
						price: 1300,
						stone: "ws",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 260}
						]
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.thirdGarage",
						id: 32,
						price: 4250,
						stone: "fs",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 260}
						]
					}
				}
			},
			romanRoom: {
				uiText: "Add Roman Room",
				inline: "true",
				requires:[
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
				],
				requiresAnd: [
					{field: "selection.hobbies.kitchen.ironChef", value: null},
					{field: "selection.hobbies.extendedPergola", value: null},
					{field: "selection.hobbies.livingRoomExtension", value: null},
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.golfCartGarage", value: null},
					{field: "selection.hobbies.hobbyRoom", value: null},
					{field: "selection.hobbies.thirdGarage", value: null}
				],
				description: "The Roman Room",
				selection: "selection.hobbies.romanRoom",
				hasAlt: "true",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 32000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 32000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 32000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 30000}
				],
				wsPrice: 1200,
				fsPrice: 4000,
				id: 33,
				imageArr: [
					{field: "selection.hobbies.kitchen.kitchenRoyal", value: null, image: "ROMAN_ROOM.png"},
					{field: "selection.hobbies.kitchen.kitchenRoyal", value: "prices.hobbies.options.kitchen.options.kitchenRoyal", image: "KR_ROMAN_ROOM.png"}
				],
				image: "ROMAN_ROOM.png",
				stone: true,
				area: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 256.652},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 256.652},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 256.652},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 261}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/10 ROMAN ROOM/RJ_HN_0310.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/10 ROMAN ROOM/RJ_AB_0310.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/10 ROMAN ROOM/RJ_VH_0310.pdf"}
				],
				options: {
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.romanRoom",
						id: 34,
						price: 1200,
						stone: "ws",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 283}
						]
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.romanRoom",
						id: 35,
						price: 4000,
						stone: "fs",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 283}
						]
					}
				}
			},
			GHRomanRoom: {
				uiText: "Add Roman Room",
				inline: "true",
				requiresAnd: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"},
					{field: "selection.hobbies.extendedPergola", value: null},
					{field: "selection.hobbies.livingRoomExtension", value: null},
					{field: "selection.hobbies.jackJill", value: null},
					{field: "selection.hobbies.golfCartGarage", value: null},
					{field: "selection.hobbies.hobbyRoom", value: null},
					{field: "selection.hobbies.thirdGarage", value: null}
				],
				description: "The Roman Room",
				selection: "selection.hobbies.romanRoom",
				hasAlt: "true",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 32000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 32000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 32000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 30000}
				],
				wsPrice: 1200,
				fsPrice: 4000,
				id: 33,
				imageArr: [
					{field: "selection.hobbies.kitchen.kitchenRoyal", value: null, image: "ROMAN_ROOM.png"},
					{field: "selection.hobbies.kitchen.kitchenRoyal", value: "prices.hobbies.options.kitchen.options.kitchenRoyal", image: "KR_ROMAN_ROOM.png"}
				],
				image: "ROMAN_ROOM.png",
				stone: true,
				area: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", aValue: 256.652},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", aValue: 256.652},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", aValue: 256.652},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 261}
				],
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/10 ROMAN ROOM/RJ_HN_0310.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/10 ROMAN ROOM/RJ_AB_0310.pdf"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/10 ROMAN ROOM/RJ_VH_0310.pdf"}
				],
				options: {
					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.romanRoom",
						id: 34,
						price: 1200,
						stone: "ws",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 283}
						]
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.romanRoom",
						id: 35,
						price: 4000,
						stone: "fs",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 283}
						]
					}
				}
			},
			casita: {
				uiText: "Casita",
				sub: "multiple",
				selection: "selection.hobbies.casita",
				id: 36,
				price: 68000,
				wsPrice: 3900,
				fsPrice: 6600,
				area: 462.879,
				options: {
					media:{
						uiText: "Media 5.1 surround Sound",
						selection: "selection.hobbies.casita",
						image: "SAC_MEDIA_ENTERTAINMENT.png",
						stone: true,
						id: 38,
						price: 68950,
						GHonly: true,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 463}
						],
						areaCoveredPorch: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", areaCoveredPorch: 65}
						],
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/11 CASITA/RJ_HN_031103.1.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/11 CASITA/RJ_AB_031103.1.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/11 CASITA/RJ_VH_031103.1.pdf"}
						]
					},
					artsCrafts:{
						uiText: "Arts & Crafts Pre Plumb for future sink",
						selection: "selection.hobbies.casita",
						image: "SAC_ARTS_CRAFTS.png",
						stone: true,
						GHonly: true,
						id: 39,
						price: 69400,
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 463}
						],
						areaCoveredPorch: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", areaCoveredPorch: 65}
						],
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/11 CASITA/RJ_HN_031102.1.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/11 CASITA/RJ_AB_031102.1.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/11 CASITA/RJ_VH_031102.1.pdf"}
						]
					},

				}
			},
			casitaOptions: {

				uiText: "Casita Options",
				sub: "multiple",
				requires: [
					{field: "selection.hobbies.casita", value: "not null"}
				],
				options:{

					wainscoatStone:{
						uiText: "Wainscoat of Stone",
						selection: "selection.hobbies.casitaStone",
						id: 40,
						price: 3900,
						stone: "ws",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 497}
						]
					},
					exteriorStone:{
						uiText: "Full Exterior Stone",
						selection: "selection.hobbies.casitaStone",
						id: 41,
						price: 6600,
						stone: "fs",
						area: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", aValue: 497}
						]
					},
					deck:{
						uiText: "Deck",
						selection: "selection.hobbies.casitaDeck",
						image: "SAC_DECK.png",
						id: 43,
						price: 8500
					},
					pergola:{
						uiText: "Pergola",
						selection: "selection.hobbies.casitaPergola",
						image: "SAC_PERGOLA.png",
						id: 42,
						price: 9500,
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/03 LIFE STYLE HOBBIES/11 CASITA/RJ_HN_031105.1.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/03 LIFE STYLE HOBBIES/11 CASITA/RJ_AB_031105.1.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/03 LIFE STYLE HOBBIES/11 CASITA/RJ_VH_031105.1.pdf"}
						]
					}


				}

			},
			GHterrace: {
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
				],
				requiresAnd: [
					{field: "selection.hobbies.GHextendedTerrace", value: null}
				],
				uiText: "GH Terrace",
				description : "GH Terrace",
				inline: "true",
				selection: "selection.hobbies.GHterrace",
				image: "TERRACE.png",
				id: 44,
				price: 11000,
				areaCoveredPorch: 187,
				blueprints: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/03 LIFE STYLE HOBBIES/RJ_GH_0312.pdf"}
				]
			},
			GHterraceGrill: {
				requiresAnd: [
					{field: "selection.hobbies.GHterrace", value: "prices.hobbies.options.GHterrace"}
				],
				uiText: "GH Terrace Grill",
				description: "GH Terrace Grill",
				id: 45,
				price: 5500,
				image: "TERRACE_GRILL.png",
				inline: "true",
				selection: "selection.hobbies.GHterraceGrill"
			},
			GHextendedTerrace: {
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
				],
				requiresAnd: [
					{field: "selection.hobbies.GHterrace", value: null}
				],
				uiText: "GH Extended Terrace",
				description : "GH Extended Terrace",
				image: "EXT_TERRACE.png",
				inline: "true",
				selection: "selection.hobbies.GHextendedTerrace",
				id: 46,
				price: 20000,
				areaCoveredPorch: 258
			},
			GHextendedTerraceGrill: {
				requiresAnd: [
					{field: "selection.hobbies.GHextendedTerrace", value: "prices.hobbies.options.GHextendedTerrace"}
				],
				uiText: "GH Extended Terrace Grill",
				description: "GH Extended Terrace Grill",
				id: 47,
				price: 5500,
				image: "EXT_TERRACE_GRILL.png",
				inline: "true",
				selection: "selection.hobbies.GHextendedTerraceGrill"
			},
			extendedMasterBathroom:{
				uiText: "Extended Master Bathroom",
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
				],
				selection: "selection.hobbies.extendedMasterBathroom",
				id: 48,
				price: 9750,
				area: 53,
				inline: "true",
				image: "EXT_MASTER_BATH.png"
			},
			jackJillBathroom:{
				uiText: "Jack & Jill Bathroom",
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
				],
				selection: "selection.hobbies.jackJillBathroom",
				id: 49,
				price: 13000,
				area: 73,
				inline: "true",
				image: "GH_0312_Jack&Jill_Bath.png"
			},
			petSmart:{
				uiText: "Pet Smart",
				selection: "selection.hobbies.petSmart",
				id: 50,
				price: 2700,
				inline: "true",
				image: "PET SMART.png"
			}
		}
	},
	upgrades: {
		uiText: "Upgrades",
		sub: "menu",
		options: {
			interior: {
				uiText: "Interior",
				sub: "menu",
				options:{
					campestres: {
						uiText: "Campestres Living System",
						sub: "choice",
						selection: "selection.upgrades.interior.campestres",
						options: {
							none:{
								uiText: "No CLS",
								price: 0,
								id: 51,
								nullChoice: true,
								description: "No CLS",
								noPDF: "true"
							},
							cls: {
								uiText: "CLS",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 24500},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 24500},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 24500},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 31000}
								],
								id: 52,
								image: "CLS.png",
								description:"Campestres Living System",
								blueprints: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/01 CAMPESTRES LIVING SYSTEM/RJ_HN_040101.01.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/01 CAMPESTRES LIVING SYSTEM/RJ_AB_040101.01.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/01 CAMPESTRES LIVING SYSTEM/RJ_VH_040101.01.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/04 UPGRADES/01 INTERIOR/CAMPESTRES LIVING SYSTEM/RJ_GH_040101.pdf"}
								]
							},
							pocket: {
								uiText: "CLS and Pocket Doors CLS",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 28850},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 28850},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 28850},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 35350}
								],
								id: 53,
								image: "CLS_POCKET_DOORS.png",
								description:"CLS and Pocket Doors CLS",
								blueprints: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/01 CAMPESTRES LIVING SYSTEM/RJ_HN_040101.02.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/01 CAMPESTRES LIVING SYSTEM/RJ_AB_040101.02.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/01 CAMPESTRES LIVING SYSTEM/RJ_VH_040101.02.pdf"}
								]
							}
						}
					},
					firePlace: {
						uiText: "Fire Place",
						sub: "choice",
						selection: "selection.upgrades.interior.firePlace",
						options: {
							woodBurning: {
								uiText: 'Wood Burning 42"',
								price: 3950,
								id: 54,
								image: "FIREPLACE_WOOD_BURNING_42.png",
								description:'Wood Burning 42"'
							},
							gas: {
								uiText: 'Gas direct vent',
								price: 3950,
								id: 55,
								image: "FIREPLACE_GAS_DIRECT_VENT.png",
								description:'Gas direct vent',
								blueprints: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/02 FIRE PLACE/RJ_HN_040102.02.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/02 FIRE PLACE/RJ_AB_040102.02.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/02 FIRE PLACE/RJ_VH_040102.02.pdf"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/04 UPGRADES/01 INTERIOR/FIRE PLACE/RJ_GH_040102.02.pdf"}
								]
							}
						}
					},
					ceilingFans: {
						uiText: "Ceiling Fans",
						description: "Ceiling Fans",
						selection: "selection.upgrades.interior.ceilingFans",
						id: 56,
						price: 600
					},
					masterBedroomClosetUpgrade: {
						uiText: "Master Bedroom Closet Upgrade",
						description: "Master Bedroom Closet Upgrade",
						selection: "selection.upgrades.interior.masterBedroomClosetUpgrade",
						id: 57,
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3600},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6300},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6300},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 4500}
						]
					},
					insulation: {
						uiText: "Insulation",
						description: "Insulation",
						sub: "choice",
						selection: "selection.upgrades.interior.insulation",
						options: {
							bibsBlown: {
								uiText: "Bibs and Blown",
								id: 58,
								pack: 5,
								description:"Bibs and Blown",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1350},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1400},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1700},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1400},
									{
										field: "selection.hobbies.jackJill.selected",
										value: "prices.hobbies.options.attached.options.jackJill.options.jackJillChoice.options.individualBathrooms",
										price: 300
									},
									{
										field: "selection.hobbies.jackJill.selected",
										value: "prices.hobbies.options.attached.options.jackJill.options.jackJillChoice.options.sharedBathrooms",
										price: 300
									},
									{field: "selection.hobbies.livingRoomExtension", value: "not null", price: 300},
									{field: "selection.hobbies.hobbyRoomGarage.secondary", value: "not null", price: 300},
									{field: "selection.hobbies.standAloneCasita", value: "not null", price: 300},
									{field: "selection.hobbies.romanRoom", value: "not null", price: 300},
									{field: "selection.indoorUpgrades.extendedBathroomCloset", value: "not null", price: 300}
								]
							},
							bibsFoam: {
								uiText: "Bibs and Foam",
								id: 59,
								pack: 7,
								description:"Bibs and Foam",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4800},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 5200},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5500},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 4800},
									{
										field: "selection.hobbies.jackJill.selected",
										value: "prices.hobbies.options.attached.options.jackJill.options.jackJillChoice.options.individualBathrooms",
										price: 700
									},
									{
										field: "selection.hobbies.jackJill.selected",
										value: "prices.hobbies.options.attached.options.jackJill.options.jackJillChoice.options.sharedBathrooms",
										price: 700
									},
									{field: "selection.hobbies.livingRoomExtension", value: "not null", price: 700},
									{field: "selection.hobbies.hobbyRoomGarage.secondary", value: "not null", price: 700},
									{field: "selection.hobbies.standAloneCasita", value: "not null", price: 700},
									{field: "selection.hobbies.romanRoom", value: "not null", price: 700},
									{field: "selection.indoorUpgrades.extendedBathroomCloset", value: "not null", price: 700}
								]
							}
						}
					},
					specialAssistance: {
						uiText: "Comfort Height Toilets & Grabs bars at baths",
						price: 4700,
						inline: "true",
						uiText: "Comfort Height Toilets & Grabs bars at baths",
						id: 60,
						selection: "selection.upgrades.interior.specialAssistance",
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/10 SPECIAL ASSISTANCE/RJ_HN_040110.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/10 SPECIAL ASSISTANCE/RJ_AB_040110.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/10 SPECIAL ASSISTANCE/RJ_VH_040110.pdf"}
						]
					},
					tanklessWaterHeaterGas: {
						uiText: "Tank-less Water Heater Gas",
						selection: "selection.upgrades.interior.tanklessWaterHeater",
						price: 2500,
						id: 61,
						pack: 35,
						description: "Tank-less Water Heater Gas"
					},
					waterSoftener: {
						uiText: "Water Softener",
						selection: "selection.upgrades.interior.waterSoftener",
						price: 1800,
						id: 62,
						pack: 7,
						description: "Water Softener"
					},
					propanePackage: {
						uiText: "Propane Package",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						selection: "selection.upgrades.interior.propanePackage",
						price: 8250,
						id: 63,
						description: "Propane Package"
					},
					electricPackage: {
						uiText: "Electric Package",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
						],
						selection: "selection.upgrades.interior.electricPackage",
						price: 3950,
						id: 64,
						description: "Electric Package"
					},
					frenchDoorToSlider: {
						uiText: "French Door To Slider",
						description: "French Door To Slider",
						selection: "selection.upgrades.interior.frenchDoorToSlider",
						image: "FRENCH_DOOR_TERRACE.png",
						id: 65,
						price: 1000,
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/13 FRENCH DOOR TO SLIDER TERRACE/RJ_HN_040113.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/13 FRENCH DOOR TO SLIDER TERRACE/RJ_AB_040113.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/13 FRENCH DOOR TO SLIDER TERRACE/RJ_VH_040113.pdf"}
						]
					},
					additionalFrenchDoor: {
						uiText: "Additional French Door",
						description: "Additional French Door",
						selection: "selection.upgrades.interior.additionalFrenchDoor",
						id: 66,
						image: "EXTRA_FRENCH_DOOR_MB.png",
						price: 1200,
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/14 EXTRA FRENCH DOOR AT MASTER BEDROOM/RJ_HN_040114.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/14 EXTRA FRENCH DOOR AT MASTER BEDROOM/RJ_AB_040114.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/14 EXTRA FRENCH DOOR AT MASTER BEDROOM/RJ_VH_040114.pdf"}
						]
					},
					additionalSliderDoor: {
						uiText: "Additional Slider Door",
						description: "Additional Slider Door",
						selection: "selection.upgrades.interior.additionalSliderDoor",
						id: 67,
						image: "EXTRA_FRENCH_SLIDDER_DOOR_MB.png",
						price: 2100,
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/01 INTERIOR/15 EXTRA SLIDER DOOR AT MASTER BEDROOM/RJ_HN_040115.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/01 INTERIOR/15 EXTRA SLIDER DOOR AT MASTER BEDROOM/RJ_AB_040115.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/01 INTERIOR/15 EXTRA SLIDER DOOR AT MASTER BEDROOM/RJ_GH_040115.pdf"}
						]
					}
				}
			},
			exterior: {
				uiText: "Exterior",
				sub: "menu",
				options:{
					firepittSmall:{
						uiText: "Fire Pitt Small",
						description: "Fire Pitt Small",
						price: 3500,
						id: 68,
						selection: "selection.upgrades.exterior.firepittSmall",
						image: "FIREPITT_SMALL.png",
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/02 EXTERIOR/01 FIRE PITT SMALL/RJ_HN_040201.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/02 EXTERIOR/01 FIRE PITT SMALL/RJ_AB_040201.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/02 EXTERIOR/01 FIRE PITT SMALL/RJ_VH_040201.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/04 UPGRADES/02 EXTERIOR/FIRE PITT SMALL/RJ_GH_040201.pdf"}
						]
					},
					firepittLarge:{
						uiText: "Fire Pitt Large",
						description: "Fire Pitt Large",
						price: 7000,
						id: 69,
						selection: "selection.upgrades.exterior.firepittLarge",
						image: "FIREPITT_BIG.png",
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/02 EXTERIOR/02 FIRE PITT LARGE/RJ_HN_040202.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/02 EXTERIOR/02 FIRE PITT LARGE/RJ_AB_040202.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/02 EXTERIOR/02 FIRE PITT LARGE/RJ_VH_040202.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/04 UPGRADES/02 EXTERIOR/FIRE PITT LARGE/RJ_GH_040202.pdf"}
						]
					},
					sideGarageEntrance: {
						requiresAnd: [
							{field: "selection.hobbies.hobbyRoomGarage.secondary", value: null}
						],
						uiText: "Side Garage Entrance",
						description: "Side Garage Entrance",
						id: 70,
						price: 5000,
						image: "SIDE_GARAGE_ENTRANCE.png",
						inline: "true",
						selection: "selection.upgrades.exterior.sideGarageEntrance",
						blueprints: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", location: "HEAVENLY NEST/04 UPGRADES/02 EXTERIOR/03 SIDE GARAGE ENTRANCE/RJ_HN_040203.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", location: "AIRY BLISS/04 UPGRADES/02 EXTERIOR/03 SIDE GARAGE ENTRANCE/RJ_AB_040203.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", location: "VINTAGE HEAVEN/04 UPGRADES/02 EXTERIOR/03 SIDE GARAGE ENTRANCE/RJ_VH_040203.pdf"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", location: "GLORIOUS HILL/04 UPGRADES/02 EXTERIOR/SIDE GARAGE ENTRANCE/RJ_GH_040203.pdf"}
						]
					},
					flagPole: {
						uiText: "20' Tall Flag Pole",
						description: "20' Tall Flag Pole",
						id: 71,
						price: 1350,
						selection: "selection.upgrades.exterior.flagPole",
					}
				}
			}
		}
	},
	finishes:{
		uiText: "Finishes",
		sub: "menu",
		options:{
			cabinetry:{
				uiText: "Cabinetry",
				sub: "menu",
				options:{
					level2:{
						uiText: "Cabinetry level 2",
						description: "Cabinetry level 2",
						selection: "selection.finishes.kitchen.cabinetry",
						id: 72,
						price: 2750
					},
					level3:{
						uiText: "Cabinetry level 3",
						description: "Cabinetry level 3",
						selection: "selection.finishes.kitchen.cabinetry",
						id: 73,
						price: 4500
					}
				}
			},
			faucetsFixtures:{
				uiText: "Faucets & Fixtures",
				sub: "menu",
				options:{
					kitchenFaucet:{
						uiText: "Kitchen Faucet",
						sub: "menu",
						options:{
							level1:{
								uiText: "Kitchen Faucet Level 1",
								description: "Kitchen Faucet Level 1",
								sub: "menu",
								options:{
									nickel:{
										uiText: "Satin Nickel",
										description: "Satin Nickel",
										selection: "selection.finishes.faucetsFixtures.kitchenFaucet.level1",
										id: 74,
										price: 95
									},
									bronze:{
										uiText: "Oil Rubbed Bronze",
										description: "Oil Rubbed Bronze",
										selection: "selection.finishes.faucetsFixtures.kitchenFaucet.level1",
										id: 75,
										price: 125
									}
								}
							},
							level2:{
								uiText: "Kitchen Faucet Level 2",
								description: "Kitchen Faucet Level 2",
								sub: "menu",
								options:{
									chrome:{
										uiText: "Chrome",
										description: "Chrome",
										selection: "selection.finishes.faucetsFixtures.kitchenFaucet.level2",
										id: 76,
										price: 100
									},
									nickel:{
										uiText: "Satin Nickel",
										description: "Satin Nickel",
										selection: "selection.finishes.faucetsFixtures.kitchenFaucet.level2",
										id: 77,
										price: 195
									},
									bronze:{
										uiText: "Oil Rubbed Bronze",
										description: "Oil Rubbed Bronze",
										selection: "selection.finishes.faucetsFixtures.kitchenFaucet.level2",
										id: 78,
										price: 200
									}
								}
							}
						}
					},
					bathroomFaucet:{
						uiText: "Bathroom Faucets and Fixtures",
						sub: "menu",
						options:{
							level1:{
								uiText: "Bathroom Faucets and Fixtures Level 1",
								description: "Bathroom Faucets and Fixtures Level 1",
								sub: "menu",
								options:{
									nickel:{
										uiText: "Satin Nickel",
										description: "Satin Nickel",
										selection: "selection.finishes.faucetsFixtures.bathroomFaucet.level1",
										id: 79,
										price: 2000
									},
									bronze:{
										uiText: "Oil Rubbed Bronze",
										description: "Oil Rubbed Bronze",
										selection: "selection.finishes.faucetsFixtures.bathroomFaucet.level1",
										id: 80,
										price: 2500
									}
								}
							},
							level2:{
								uiText: "Bathroom Faucets and Fixtures Level 2",
								description: "Bathroom Faucets and Fixtures Level 2",
								sub: "menu",
								options:{
									chrome:{
										uiText: "Chrome",
										description: "Chrome",
										selection: "selection.finishes.faucetsFixtures.bathroomFaucet.level2",
										id: 81,
										price: 2000
									},
									nickel:{
										uiText: "Satin Nickel",
										description: "Satin Nickel",
										selection: "selection.finishes.faucetsFixtures.bathroomFaucet.level2",
										id: 82,
										price: 2600
									},
									bronze:{
										uiText: "Oil Rubbed Bronze",
										description: "Oil Rubbed Bronze",
										selection: "selection.finishes.faucetsFixtures.bathroomFaucet.level2",
										id: 83,
										price: 3000
									}
								}
							}
						}
					}
				}
			},
			floors:{
				uiText: "Floors",
				sub:"menu",
				options:{
					kitchen:{
						uiText: "Kitchen",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 84,
										selection: "selection.finishes.floors.kitchen",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 400},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 350}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 85,
										selection: "selection.finishes.floors.kitchen",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 850},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 700}
										]
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 86,
										selection: "selection.finishes.floors.kitchen",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 700}
										]
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 87,
										selection: "selection.finishes.floors.kitchen",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1100},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 900}
										]
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 88,
										selection: "selection.finishes.floors.kitchen",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1300}
										]
									}
								}
							}
						}
					},
					livingArea:{
						uiText: "Living Area",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 89,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2150},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2150},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1300}
										]
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 90,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3750},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1600}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 91,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2200}
										]
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 92,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
										]
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 93,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 5600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 5600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2750}
										]
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 94,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 6600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 7800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3200}
										]
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 95,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 400},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 350}
										]
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 96,
										selection: "selection.finishes.floors.livingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 600}
										]
									}
								}
							}
						}
					},
					masterBedroom:{
						uiText: "Master Bedroom",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 97,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1750},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1100}
										]
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 98,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2550},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1400}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 99,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3810},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1800}
										]
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 100,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3810},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2000}
										]
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 101,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
										]
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 102,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2800}
										]
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 103,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 250},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 250},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 350},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 250}
										]
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 104,
										selection: "selection.finishes.floors.masterBedroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 350},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 350},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 480},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 450}
										]
									}
								}
							}
						}
					},
					secondaryBedrooms:{
						uiText: "Secondary Bedrooms",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 105,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1400}
										]
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 106,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1250},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1800}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 107,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
										]
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 108,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2300}
										]
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 109,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2100},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2800}
										]
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 110,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3600}
										]
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 111,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 450},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 400}
										]
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 112,
										selection: "selection.finishes.floors.secondaryBedrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 250},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 550},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 500}
										]
									}
								}
							}
						}
					},
					masterBathroom:{
						uiText: "Master Bathroom",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 113,
										selection: "selection.finishes.floors.masterBathroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 250},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 250}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 114,
										selection: "selection.finishes.floors.masterBathroom",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 550},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 550},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 500}
										]
									}
								}
							}
						}
					},
					secondaryBathrooms:{
						uiText: "Secondary Bathrooms",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 115,
										selection: "selection.finishes.floors.secondaryBathrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 200}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 116,
										selection: "selection.finishes.floors.secondaryBathrooms",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1100},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 400}
										]
									}
								}
							}
						}
					},
					mudUtilities:{
						uiText: "Mud & Utilities",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 117,
										selection: "selection.finishes.floors.mudUtilities",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 250},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 250}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 118,
										selection: "selection.finishes.floors.mudUtilities",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 550},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 550},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 450}
										]
									}
								}
							}
						}
					},
					ironChef:{
						uiText: "Iron Chef",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 119,
										selection: "selection.finishes.floors.ironChef",
										price: 1300
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 120,
										selection: "selection.finishes.floors.ironChef",
										price: 1850
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 121,
										selection: "selection.finishes.floors.ironChef",
										price: 1850
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 122,
										selection: "selection.finishes.floors.ironChef",
										price: 2200
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 123,
										selection: "selection.finishes.floors.ironChef",
										price: 2600
									}
								}
							}
						}
					},
					livingRoomExtension:{
						uiText: "Living Room Extension",
						sub:"menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
						],
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 124,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 1150
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 125,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 1600
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 126,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 2500
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 127,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 2500
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 128,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 2900
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 129,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 3300
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 130,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 200
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 131,
										selection: "selection.finishes.floors.livingRoomExtension",
										price: 400
									}
								}
							}
						}
					},
					jackJillBedrooms:{
						uiText: "Jack and Jill Bedrooms",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 132,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 1900
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 133,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 2550
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 134,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 3900
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 135,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 3900
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 136,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 4300
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 137,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 4700
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 138,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 350
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 139,
										selection: "selection.finishes.floors.jackJillBedrooms",
										price: 650
									}
								}
							}
						}
					},
					hobbyRoom:{
						uiText: "Hobby Room (Arts and Crafts)",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 140,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 1200
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 141,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 1500
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 142,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 2150
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 143,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 2150
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 144,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 2550
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 145,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 2950
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 146,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 600
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 147,
										selection: "selection.finishes.floors.hobbyRoom",
										price: 700
									}
								}
							}
						}
					},
					romanRoom:{
						uiText: "Roman Room",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 148,
										selection: "selection.finishes.floors.romanRoom",
										price: 1200
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 149,
										selection: "selection.finishes.floors.romanRoom",
										price: 1500
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 150,
										selection: "selection.finishes.floors.romanRoom",
										price: 2150
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 151,
										selection: "selection.finishes.floors.romanRoom",
										price: 2150
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 152,
										selection: "selection.finishes.floors.romanRoom",
										price: 2550
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 153,
										selection: "selection.finishes.floors.romanRoom",
										price: 2950
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 154,
										selection: "selection.finishes.floors.romanRoom",
										price: 600
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 155,
										selection: "selection.finishes.floors.romanRoom",
										price: 700
									}
								}
							}
						}
					},
					casita:{
						uiText: "Casita",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 156,
										selection: "selection.finishes.floors.casita",
										price: 2200
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 157,
										selection: "selection.finishes.floors.casita",
										price: 2750
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 158,
										selection: "selection.finishes.floors.casita",
										price: 3900
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 159,
										selection: "selection.finishes.floors.casita",
										price: 3900
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 160,
										selection: "selection.finishes.floors.casita",
										price: 4300
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 161,
										selection: "selection.finishes.floors.casita",
										price: 4700
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 162,
										selection: "selection.finishes.floors.casita",
										price: 800
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 163,
										selection: "selection.finishes.floors.casita",
										price: 900
									}
								}
							}
						}
					},
					stairsUpstairsLivingArea:{
						uiText: "Stairs and Upstairs LivingArea",
						sub:"menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
						],
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 164,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1900}
										]
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 165,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2600}
										]
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 166,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900}
										]
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 167,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900}
										]
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 168,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4300}
										]
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 169,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4700}
										]
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 170,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 450}
										]
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 171,
										selection: "selection.finishes.floors.stairsUpstairsLivingArea",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 550}
										]
									}
								}
							}
						}
					},
					extendedMasterBathroom:{
						uiText: "Extended Master Bathroom",
						sub:"menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 172,
										selection: "selection.finishes.floors.extendedMasterBathroom",
										price: 150
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 173,
										selection: "selection.finishes.floors.extendedMasterBathroom",
										price: 250
									}
								}
							}
						}
					},
					jackJillBathroom:{
						uiText: "Jack & Jill Bathroom",
						sub:"menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 174,
										selection: "selection.finishes.floors.jackJillBathroom",
										price: 200
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 175,
										selection: "selection.finishes.floors.jackJillBathroom",
										price: 300
									}
								}
							}
						}
					},
					foyerEntryHall:{
						uiText: "Foyer and Entry Hall",
						sub:"menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 176,
										selection: "selection.finishes.floors.foyerEntryHall",
										price: 400
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 177,
										selection: "selection.finishes.floors.foyerEntryHall",
										price: 800
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 1",
										id: 178,
										selection: "selection.finishes.floors.foyerEntryHall",
										price: 800
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 179,
										selection: "selection.finishes.floors.foyerEntryHall",
										price: 1000
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 180,
										selection: "selection.finishes.floors.foyerEntryHall",
										price: 1500
									}
								}
							}
						}
					},
					masterWic:{
						uiText: "Master WIC",
						sub:"menu",
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level1:{
										uiText: "Tile level 1",
										description: "Tile level 1",
										id: 181,
										selection: "selection.finishes.floors.masterWic",
										price: 300
									},
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 182,
										selection: "selection.finishes.floors.masterWic",
										price: 400
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 183,
										selection: "selection.finishes.floors.masterWic",
										price: 500
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 2",
										id: 184,
										selection: "selection.finishes.floors.masterWic",
										price: 600
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 185,
										selection: "selection.finishes.floors.masterWic",
										price: 750
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 186,
										selection: "selection.finishes.floors.masterWic",
										price: 900
									}
								}
							},
							carpet:{
								uiText: "Carpet",
								sub: "menu",
								options:{
									level2:{
										uiText: "Carpet level 2",
										description: "Carpet level 2",
										id: 187,
										selection: "selection.finishes.floors.masterWic",
										price: 100
									},
									level3:{
										uiText: "Carpet level 3",
										description: "Carpet level 3",
										id: 188,
										selection: "selection.finishes.floors.masterWic",
										price: 200
									}
								}
							}
						}
					},
					dining:{
						uiText: "Dining",
						sub:"menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options:{
							tile:{
								uiText: "Tile",
								sub: "menu",
								options:{
									level2:{
										uiText: "Tile level 2",
										description: "Tile level 2",
										id: 189,
										selection: "selection.finishes.floors.dining",
										price: 450
									},
									level3:{
										uiText: "Tile level 3",
										description: "Tile level 3",
										id: 190,
										selection: "selection.finishes.floors.dining",
										price: 700
									}
								}
							},
							wood:{
								uiText: "Wood",
								sub: "menu",
								options:{
									level1:{
										uiText: "Wood level 1",
										description: "Wood level 1",
										id: 191,
										selection: "selection.finishes.floors.dining",
										price: 700
									},
									level2:{
										uiText: "Wood level 2",
										description: "Wood level 2",
										id: 192,
										selection: "selection.finishes.floors.dining",
										price: 950
									},
									level3:{
										uiText: "Wood level 3",
										description: "Wood level 3",
										id: 193,
										selection: "selection.finishes.floors.dining",
										price: 1350
									}
								}
							}
						}
					}
				}
			},
			kitchen:{
				uiText: "Kitchen",
				sub: "menu",
				options:{
					countertops:{
						uiText: "countertops",
						sub: "menu",
						options:{
							level2:{
								uiText: "countertops level 2",
								description: "countertops level 2",
								id: 194,
								selection: "selection.finishes.kitchen.countertops",
								price: 750
							},
							level3:{
								uiText: "countertops level 3",
								description: "countertops level 3",
								id: 195,
								selection: "selection.finishes.kitchen.countertops",
								price: 1500
							},
							level4:{
								uiText: "countertops level 4",
								description: "countertops level 4",
								id: 196,
								selection: "selection.finishes.kitchen.countertops",
								price: 2250
							}
						}
					},
					sink:{
						uiText: "Sink",
						sub: "menu",
						options:{
							level2:{
								uiText: "Sink level 2",
								description: "Sink level 2",
								id: 197,
								selection: "selection.finishes.kitchen.sink",
								price: 750
							}
						}
					},
					appliances:{
						uiText: "Appliances",
						sub: "menu",
						options:{
							level2:{
								uiText: "Appliances level 2",
								description: "Appliances level 2",
								id: 198,
								selection: "selection.finishes.kitchen.appliances",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1300},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1300},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1300},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2000}
								]
							},
							level3:{
								uiText: "Appliances level 3",
								description: "Appliances level 3",
								id: 199,
								selection: "selection.finishes.kitchen.appliances",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 6000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3200}
								]
							},
							level4:{
								uiText: "Appliances level 4",
								description: "Appliances level 4",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								id: 200,
								selection: "selection.finishes.kitchen.appliances",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 7400}
								]
							}
						}
					}
				}
			},
			kitchenRoyal:{
				uiText: "Kitchen Royal",
				sub: "menu",
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"}
				],
				options:{
					countertops:{
						uiText: "countertops",
						sub: "menu",
						options:{
							level2:{
								uiText: "countertops level 2",
								description: "countertops level 2",
								id: 201,
								selection: "selection.finishes.kitchenRoyal.countertops",
								price: 900
							},
							level3:{
								uiText: "countertops level 3",
								description: "countertops level 3",
								id: 202,
								selection: "selection.finishes.kitchenRoyal.countertops",
								price: 1800
							},
							level4:{
								uiText: "countertops level 4",
								description: "countertops level 4",
								id: 203,
								selection: "selection.finishes.kitchenRoyal.countertops",
								price: 2700
							}
						}
					},
					sink:{
						uiText: "Sink",
						sub: "menu",
						options:{
							level2:{
								uiText: "Sink level 2",
								description: "Sink level 2",
								id: 204,
								selection: "selection.finishes.kitchenRoyal.sink",
								price: 750
							}
						}
					},
					appliances:{
						uiText: "Appliances",
						sub: "menu",
						options:{
							level2:{
								uiText: "Appliances level 2",
								description: "Appliances level 2",
								id: 205,
								selection: "selection.finishes.kitchenRoyal.appliances",
								price: 1300
							},
							level3:{
								uiText: "Appliances level 3",
								description: "Appliances level 3",
								id: 206,
								selection: "selection.finishes.kitchenRoyal.appliances",
								price: 6000
							}
						}
					},
				}
			},
			ironChefKitchen:{
				uiText: "Iron Chef Kitchen",
				sub: "menu",
				options:{
					countertops:{
						uiText: "countertops",
						sub: "menu",
						options:{
							level2:{
								uiText: "countertops level 2",
								description: "countertops level 2",
								id: 207,
								selection: "selection.finishes.ironChefKitchen.countertops",
								price: 1000
							},
							level3:{
								uiText: "countertops level 3",
								description: "countertops level 3",
								id: 208,
								selection: "selection.finishes.ironChefKitchen.countertops",
								price: 2000
							},
							level4:{
								uiText: "countertops level 4",
								description: "countertops level 4",
								id: 209,
								selection: "selection.finishes.ironChefKitchen.countertops",
								price: 3000
							}
						}
					},
					sink:{
						uiText: "Sink",
						sub: "menu",
						options:{
							level2:{
								uiText: "Sink level 2",
								description: "Sink level 2",
								id: 210,
								selection: "selection.finishes.ironChefKitchen.sink",
								price: 750
							}
						}
					},
					appliances:{
						uiText: "Appliances",
						sub: "menu",
						options:{
							level2:{
								uiText: "Appliances level 2",
								description: "Appliances level 2",
								id: 211,
								selection: "selection.finishes.ironChefKitchen.appliances",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1700},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1700},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1700},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
								]
							},
							level3:{
								uiText: "Appliances level 3",
								description: "Appliances level 3",
								id: 212,
								selection: "selection.finishes.ironChefKitchen.appliances",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 8200},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 8200},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 8200},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3600}
								]
							},
							level4:{
								uiText: "Appliances level 4",
								description: "Appliances level 4",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								id: 213,
								selection: "selection.finishes.ironChefKitchen.appliances",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 8200}
								]
							}
						}
					},
				}
			},
			bathrooms:{
				uiText: "Bathrooms",
				sub: "menu",
				options:{
					masterBathroom:{
						uiText: "Master Bathroom",
						sub: "menu",
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 214,
												selection: "selection.finishes.bathrooms.masterBathroom.countertops",
												price: 500
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 215,
												selection: "selection.finishes.bathrooms.masterBathroom.countertops",
												price: 1000
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 216,
												selection: "selection.finishes.bathrooms.masterBathroom.countertops",
												price: 1200
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 217,
												selection: "selection.finishes.bathrooms.masterBathroom.countertops",
												price: 1400
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 218,
												selection: "selection.finishes.bathrooms.masterBathroom.countertops",
												price: 1600
											}
										}
									}
								}
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 219,
								selection: "selection.finishes.bathrooms.masterBathroom.framelessShowerDoors",
								price: 3000
							}
						}
					},
					secondaryBathrooms:{
						uiText: "Secondary Bathrooms",
						sub: "menu",
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 220,
												selection: "selection.finishes.bathrooms.secondaryBathrooms.countertops",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 300}
												]
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 221,
												selection: "selection.finishes.bathrooms.secondaryBathrooms.countertops",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 600}
												]
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 222,
												selection: "selection.finishes.bathrooms.secondaryBathrooms.countertops",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 800}
												]
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 223,
												selection: "selection.finishes.bathrooms.secondaryBathrooms.countertops",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1000}
												]
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 224,
												selection: "selection.finishes.bathrooms.secondaryBathrooms.countertops",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1200}
												]
											}
										}
									}
								}
							},
							walkInShower:{
								uiText: "Change Tub to Walk in Shower",
								description: "Change Tub to Walk in Shower",
								id: 225,
								selection: "selection.finishes.bathrooms.secondaryBathrooms.walkInShower",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1800},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3600},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3600},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1800}
								]
							},
							extendedBathtub:{
								uiText: "Extended Bathtub 6'",
								description: "Extended Bathtub 6'",
								id: 226,
								selection: "selection.finishes.bathrooms.secondaryBathrooms.extendedBathtub",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 500},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 500}
								]
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 227,
								selection: "selection.finishes.bathrooms.secondaryBathrooms.framelessShowerDoors",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3000}
								]
							}
						}
					},
					jackJillBedrooms:{
						uiText: "Jack and Jill Bedrooms",
						sub: "menu",
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 228,
												selection: "selection.finishes.bathrooms.jackJillBedrooms.countertops",
												price: 500
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 229,
												selection: "selection.finishes.bathrooms.jackJillBedrooms.countertops",
												price: 1000
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 230,
												selection: "selection.finishes.bathrooms.jackJillBedrooms.countertops",
												price: 1200
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 231,
												selection: "selection.finishes.bathrooms.jackJillBedrooms.countertops",
												price: 1400
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 232,
												selection: "selection.finishes.bathrooms.jackJillBedrooms.countertops",
												price: 1600
											}
										}
									}
								}
							},
							walkInShower:{
								uiText: "Change Tub to Walk in Shower",
								description: "Change Tub to Walk in Shower",
								id: 233,
								selection: "selection.finishes.bathrooms.jackJillBedrooms.walkInShower",
								price: 1800
							},
							extendedBathtub:{
								uiText: "Extended Bathtub 6'",
								description: "Extended Bathtub 6'",
								id: 234,
								selection: "selection.finishes.bathrooms.jackJillBedrooms.extendedBathtub",
								price: 500
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 235,
								selection: "selection.finishes.bathrooms.jackJillBedrooms.framelessShowerDoors",
								price: 3000
							}
						}
					},
					romanRoom:{
						uiText: "Roman Room",
						sub: "menu",
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 236,
												selection: "selection.finishes.bathrooms.romanRoom.countertops",
												price: 300
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 237,
												selection: "selection.finishes.bathrooms.romanRoom.countertops",
												price: 600
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 238,
												selection: "selection.finishes.bathrooms.romanRoom.countertops",
												price: 800
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 239,
												selection: "selection.finishes.bathrooms.romanRoom.countertops",
												price: 1000
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 240,
												selection: "selection.finishes.bathrooms.romanRoom.countertops",
												price: 1200
											}
										}
									}
								}
							},
							walkInShower:{
								uiText: "Change Tub to Walk in Shower",
								description: "Change Tub to Walk in Shower",
								id: 241,
								selection: "selection.finishes.bathrooms.romanRoom.walkInShower",
								price: 1800
							},
							extendedBathtub:{
								uiText: "Extended Bathtub 6'",
								description: "Extended Bathtub 6'",
								id: 242,
								selection: "selection.finishes.bathrooms.romanRoom.extendedBathtub",
								price: 500
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 243,
								selection: "selection.finishes.bathrooms.romanRoom.framelessShowerDoors",
								price: 3000
							}
						}
					},
					casita:{
						uiText: "Casita",
						sub: "menu",
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 244,
												selection: "selection.finishes.bathrooms.casita.countertops",
												price: 300
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 245,
												selection: "selection.finishes.bathrooms.casita.countertops",
												price: 600
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 246,
												selection: "selection.finishes.bathrooms.casita.countertops",
												price: 800
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 247,
												selection: "selection.finishes.bathrooms.casita.countertops",
												price: 1000
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 248,
												selection: "selection.finishes.bathrooms.casita.countertops",
												price: 1200
											}
										}
									}
								}
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 249,
								selection: "selection.finishes.bathrooms.casita.framelessShowerDoors",
								price: 2000
							}
						}
					},
					extendedMasterBathroom:{
						uiText: "Extended Master Bathroom",
						sub: "menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 250,
												selection: "selection.finishes.bathrooms.extendedMasterBathroom.countertops",
												price: 500
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 251,
												selection: "selection.finishes.bathrooms.extendedMasterBathroom.countertops",
												price: 1000
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 252,
												selection: "selection.finishes.bathrooms.extendedMasterBathroom.countertops",
												price: 1200
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 253,
												selection: "selection.finishes.bathrooms.extendedMasterBathroom.countertops",
												price: 1400
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 254,
												selection: "selection.finishes.bathrooms.extendedMasterBathroom.countertops",
												price: 1600
											}
										}
									}
								}
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 255,
								selection: "selection.finishes.bathrooms.extendedMasterBathroom.framelessShowerDoors",
								price: 6000
							}
						}
					},
					jackJillBathroom:{
						uiText: "Jack & Jill Bathroom",
						sub: "menu",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options:{
							countertops:{
								uiText: "countertops",
								sub: "menu",
								options:{
									culturedGranite:{
										uiText:"Cultured Granite",
										sub: "menu",
										options:{
											level2:{
												uiText: "Cultured Granite countertops",
												description: "Cultured Granite countertops",
												id: 256,
												selection: "selection.finishes.bathrooms.jackJillBathroom.countertops",
												price: 300
											}
										}
									},
									graniteMarble:{
										uiText:"Granite and Marble",
										sub: "menu",
										options:{
											level1:{
												uiText: "Granite and Marble Level 1",
												description: "Granite and Marble Level 1",
												id: 257,
												selection: "selection.finishes.bathrooms.jackJillBathroom.countertops",
												price: 600
											},
											level2:{
												uiText: "Granite and Marble Level 2",
												description: "Granite and Marble Level 2",
												id: 258,
												selection: "selection.finishes.bathrooms.jackJillBathroom.countertops",
												price: 800
											},
											level3:{
												uiText: "Granite and Marble Level 3",
												description: "Granite and Marble Level 3",
												id: 259,
												selection: "selection.finishes.bathrooms.jackJillBathroom.countertops",
												price: 1000
											},
											level4:{
												uiText: "Granite and Marble Level 4",
												description: "Granite and Marble Level 4",
												id: 260,
												selection: "selection.finishes.bathrooms.jackJillBathroom.countertops",
												price: 1200
											}
										}
									}
								}
							},
							walkInShower:{
								uiText: "Change Tub to Walk in Shower",
								description: "Change Tub to Walk in Shower",
								id: 261,
								selection: "selection.finishes.bathrooms.romanRoom.walkInShower",
								price: 1800
							},
							extendedBathtub:{
								uiText: "Extended Bathtub 6'",
								description: "Extended Bathtub 6'",
								id: 262,
								selection: "selection.finishes.bathrooms.romanRoom.extendedBathtub",
								price: 500
							},
							framelessShowerDoors:{
								uiText: "Frameless Shower Doors",
								description: "Frameless Shower Doors",
								id: 263,
								selection: "selection.finishes.bathrooms.jackJillBathroom.framelessShowerDoors",
								price: 3000
							}
						}
					}
				}
			},
			vinylWindows:{
				uiText: "Vinyl Windows",
				description: "Vinyl Windows",
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
				],
				id: 264,
				selection: "selection.finishes.vinylWindows",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1450}
				]
			},
			andersonUpgradeWindows:{
				uiText: "Anderson 100 Upgrade Windows",
				description: "Anderson 100 Upgrade Windows",
				id: 265,
				selection: "selection.finishes.andersonUpgradeWindows",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 11800},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 13500},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 16250},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 10750}
				]
			},
			doorsTrimsBaseBoards:{
				uiText: "Doors, Trims & Base Boards Solid Core Stain Grade",
				description: "Doors, Trims & Base Boards Solid Core Stain Grade",
				id: 266,
				selection: "selection.finishes.doorsTrimsBaseBoards",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6100},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 7000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 4000}
				]
			},
			keyPad:{
				uiText: "Keyless Entry Keypad",
				description: "Keyless Entry Keypad",
				id: 267,
				selection: "selection.finishes.keyPad",
				price: 550
			},
			wroughtIronBalusters:{
				uiText: "Wrought Iron Balusters",
				description: "Wrought Iron Balusters",
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
				],
				id: 268,
				selection: "selection.finishes.wroughtIronBalusters",
				price: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 5000},
					{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5600}
				]
			}
		}
	},

	matrix:{
		uiText: "",
		options: {
			elevationStyle:{
				uiText: "ELEVATION STYLE",
				checked: true,
				requires: [
					{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
				],
				options:{
					traditional: {
						uiText:"TRADITIONAL",
						styleText: "traditional",
						price:0,
						id: "000_0",
						selection:"selection.matrix.elevationStyle"
					},

					tuscan: {
						uiText:"TUSCAN",
						styleText: "tuscan",
						id: "000_1",
						price:5000,
						selection:"selection.matrix.elevationStyle"
					}
				}
			},
			exteriorStone:{
				uiText: "EXTERIOR STONE",
				checked: true,
				options: {
					noStone: {
						uiText: "NO STONE",
						stone: "",
						fullhouseStone: "",
						price: 0,
						id: "001_0",
						selection: "selection.matrix.exteriorStone"
					},
					fullWainscoat: {
						uiText: "FULL WAINSCOT",
						stone: "ws",
						fullhouseStone: "WS_",
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 7500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 7500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 8500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 7000}
						],
						id: "001_1",
						selection: "selection.matrix.exteriorStone"
					},
					chimney: {
						uiText: "CHIMNEY",
						stone: "",
						fullhouseStone: "",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"}
						],
						price: 8500,
						id: "001_2",
						selection: "selection.matrix.exteriorStone"
					},
					garageMasterFullWainscoat: {
						uiText: "GARAGE AND MASTER PLUS FULL WAINSCOAT",
						stone: "ws",
						fullhouseStone: "GMWS_",
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 13500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 13500},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 16000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 14000}
						],
						id: "001_3",
						selection: "selection.matrix.exteriorStone"
					}
				}
			},
			roof:{
				uiText: "ROOF",
				checked: true,
				options: {
					shingles: {
						uiText: "SHINGLES",
						price: 0,
						id: "002_0",
						selection: "selection.matrix.roof"
					},
					metalRoof: {
						uiText: " METAL ROOF",
						price: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 17000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 18000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 19000},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 17000}
						],
						id: "002_1",
						selection: "selection.matrix.roof"
					},
					tileRoof: {
						uiText: " TILE ROOF",
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						price: 24500,
						id: "002_2",
						selection: "selection.matrix.roof"
					}
				}
			},
			upgrades:{
				uiText: "UPGRADES",
				options: {
					interior: {
						uiText: "INTERIOR",
						options: {
							cls: {
								uiText: "CAMPESTRES LIVING SYSTEM",
								checked: true,
								options: {
									cls: {
										uiText: "CAMPESTRES LIVING SYSTEM",
										image: "CLS.png",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 24500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 24500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 24500},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 31000}
										],
										id: "003_0",
										selection: "selection.matrix.cls"
									},
									clsPocket: {
										uiText: "CLS POCKET DOOR",
										image: "CLS_POCKET_DOORS.png",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 28850},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 28850},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 28850},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 35350}
										],
										id: "003_1",
										selection: "selection.matrix.cls"
									}
								}
							},
							fireplace: {
								uiText: "FIRE PLACE",
								checked: true,
								options: {
									wood: {
										uiText: "WOOD BURNING 42''",
										image: "FIREPLACE_WOOD_BURNING_42.png",
										price: 2900,
										id: "004_0",
										selection: "selection.matrix.fireplace"
									},
									gas: {
										uiText: "GAS DIRECT VENT",
										image: "FIREPLACE_GAS_DIRECT_VENT.png",
										price: 3950,
										id: "004_1",
										selection: "selection.matrix.fireplace"
									}
								}
							},
							ceilingFans: {
								uiText: "CEILING FANS",
								checked: true,
								options: {
									onepiece: {uiText: "ONE PIECE", price:600, id: "005_0", selection: "selection.matrix.ceilingFans"},
									twopiece: {uiText: "TWO PIECES", price:1200, id: "005_1", selection: "selection.matrix.ceilingFans"},
									threepiece: {uiText: "THREE PIECES", price:1800, id: "005_2", selection: "selection.matrix.ceilingFans"},
									fourpiece: {uiText: "FOUR PIECES", price:2400, id: "005_3", selection: "selection.matrix.ceilingFans"}
								}
							},
							closets: {
								uiText: "CLOSETS",
								options: {
									masterBedroomDeluxe: {
										uiText: "MASTER BEDROOM CLOSET UPGRADE",
										checked: true,
										options: {
											add: {
												uiText: "DELUXE CLOSET",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 4500}
												],
												id: "006_0",
												selection: "selection.matrix.masterBedroomCloset"
											}
										}
									}
								}
							},
							insulation: {
								uiText: "INSULATION",
								checked: true,
								options: {
									batBlown: {uiText: "BAT & BLOWN", price:0, id: "007_0",  selection: "selection.matrix.insulation"},
									bibsBlown: {uiText: "BIBS & BLOWN",
										price: [
												{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1350},
												{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1400},
												{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1700},
												{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1400}
										],
										id: "007_1", selection: "selection.matrix.insulation"
									},
									bibsFoam: {uiText: "BIBS & FOAM",
										price: [
												{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4800},
												{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 5200},
												{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5500},
												{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 4800}
										],
										id: "007_2", selection: "selection.matrix.insulation"}
								}
							},
							specialAssistance: {
								uiText: "COMFORT HEIGHT TOILETS & GRABS BARS AT BATHS",
								checked: true,
								options: {
									add: {uiText: "ADD PACKAGE", price:4700, id: "008_0", selection: "selection.matrix.specialAssistance"}
								}
							},
							tanklessWaterHeater: {
								uiText: "TANKLESS WATER HEATER",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM", price:2500, id: "009_0", selection: "selection.matrix.tanklessWaterHeater"}
								}
							},
							waterSoftener: {
								uiText: "WATER SOFTENER",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM", price:1800, id: "010_0", selection: "selection.matrix.waterSoftener"}
								}
							},
							electricPackage: {
								uiText: "ELECTRIC PACKAGE",
								checked: true,
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
								],
								options: {
									add: {
										uiText: "ADD ITEM",
										price: -3950,
										id: "011_0",
										selection: "selection.matrix.electricPackage"
									}
								}
							},
							propanePackage: {
								uiText: "PROPANE PACKAGE",
								checked: true,
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								options: {
									add: {
										uiText: "ADD ITEM",
										price: 8250,
										id: "012_0",
										selection: "selection.matrix.propanePackage"
									}
								}
							},
							frenchDoorToSlider: {
								uiText: "FRENCH DOOR TO SLIDER",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM", image: "FRENCH_DOOR_TERRACE.png", price:1000, id: "013_0", selection: "selection.matrix.frenchDoorToSlider"}
								}
							},
							additionalFrenchDoor: {
								uiText: "EXTRA FRENCH DOOR AT MASTER BEDROOM",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM", image: "EXTRA_FRENCH_DOOR_MB.png", price:1200, id: "014_0", selection: "selection.matrix.additionalFrenchDoor"}
								}
							},
							additionalSliderDoor: {
								uiText: "EXTRA SLIDER DOOR AT MASTER BEDROOM",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM", image: "EXTRA_FRENCH_SLIDDER_DOOR_MB.png", price:2100, id: "015_0", selection: "selection.matrix.additionalSliderDoor"}
								}
							}
						}
					},
					exterior : {
						uiText: "EXTERIOR",
						options: {
							firepit: {
								uiText: "FIRE PIT",
								checked: true,
								options: {
									small: {uiText: "SMALL", image: "FIREPITT_SMALL.png", price:3500, id: "016_0", selection: "selection.matrix.firepit"},
									large: {uiText: "LARGE", image: "FIREPITT_BIG.png", price:7000, id: "016_1", selection: "selection.matrix.firepit"}
								}
							},
							sideGarageEntrance: {
								uiText: "SIDE GARAGE ENTRANCE",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM", image: "SIDE_GARAGE_ENTRANCE.png", price:5000, id: "017_0", selection: "selection.matrix.sideGarageEntrance"}
								}
							},
							flagPole:{
								uiText: "20' TALL FLAG POLE (LOCATION TBD)",
								checked: true,
								options: {
									add: {uiText: "ADD ITEM",
									price: 1350,
									id: "018_0", selection: "selection.matrix.flagPole"}
								}
							}
						}
					}
				}
			},
			finishes: {
				uiText: "FINISHES",
				options: {
					cabinetry: {
						uiText: "CABINETRY",
						checked: true,
						options: {
							level2: {uiText: "LEVEL 2", price:2750, id:"019_0", levelDefault: 2, selection: "selection.matrix.finishes.cabinetry"},
							level3: {uiText: "LEVEL 3", price:4500, id:"019_1", levelDefault: 3, selection: "selection.matrix.finishes.cabinetry"}
						}
					},
					faucetsFixtures: {
						uiText: "FAUCETS & FIXTURES",
						options: {
							kitchenFaucet: {
								uiText: "KITCHEN FAUCET",
								options: {
									level1: {
										uiText: "LEVEL 1",
										checked: true,
										options: {
											nickel: {uiText: "NICKEL", description:"LEVEL 1 NICKEL", price:95, id:"020_0",  levelDefault: 1, selection: "selection.matrix.finishes.faucetsFixtures.kitchenFaucet"},
											bronze: {uiText: "BRONZE", description:"LEVEL 1 BRONZE", price:125, id:"020_1", levelDefault: 1, selection: "selection.matrix.finishes.faucetsFixtures.kitchenFaucet"}
										}
									},
									level2: {
										uiText: "LEVEL 2",
										checked: true,
										options: {
											chrome: {uiText: "CHROME", description:"LEVEL 2 CHROME", price: 100, id:"021_0",  levelDefault: 2, selection: "selection.matrix.finishes.faucetsFixtures.kitchenFaucet"},
											nickel: {uiText: "NICKEL", description:"LEVEL 2 NICKEL", price: 195, id:"021_1",  levelDefault: 2, selection: "selection.matrix.finishes.faucetsFixtures.kitchenFaucet"},
											bronze: {uiText: "BRONZE", description:"LEVEL 2 BRONZE", price: 200, id:"021_2", levelDefault: 2, selection: "selection.matrix.finishes.faucetsFixtures.kitchenFaucet"}
										}
									}
								}
							},
							bathroomFaucet: {
								uiText: "BATHROOM FAUCETS AND FIXTURES",
								options: {
									level1: {
										uiText: "LEVEL 1",
										checked: true,
										options: {
											nickel: {uiText: "NICKEL", description:"LEVEL 1 NICKEL", price:2000, id:"022_0",  levelDefault: 1, selection: "selection.matrix.finishes.faucetsFixtures.bathroomFaucet"},
											bronze: {uiText: "BRONZE", description:"LEVEL 1 BRONZE", price:2500, id:"022_1", levelDefault: 1, selection: "selection.matrix.finishes.faucetsFixtures.bathroomFaucet"}
										}
									},
									level2: {
										uiText: "LEVEL 2",
										checked: true,
										options: {
											chrome: {uiText: "CHROME", description:"LEVEL 2 CHROME", price: 2100, id:"023_0",  levelDefault: 2, selection: "selection.matrix.finishes.faucetsFixtures.bathroomFaucet"},
											nickel: {uiText: "NICKEL", description:"LEVEL 2 NICKEL", price: 2600, id:"023_1",  levelDefault: 2, selection: "selection.matrix.finishes.faucetsFixtures.bathroomFaucet"},
											bronze: {uiText: "BRONZE", description:"LEVEL 2 BRONZE", price: 3000, id:"023_2", levelDefault: 2, selection: "selection.matrix.finishes.faucetsFixtures.bathroomFaucet"}
										}
									}
								}
							}
						}
					},
					floors: {
						uiText: "FLOORS",
						levels: 3,
						options: {
							kitchen: {
								uiText: "KITCHEN",
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"026_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.kitchen"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 350}
												],
												id:"026_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.kitchen"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 850},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 700}
												],
												id:"026_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.kitchen"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 700}
												],
												id:"027_0", selection: "selection.matrix.finishes.floors.kitchen"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1100},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 900}
												],
												id:"027_1", selection: "selection.matrix.finishes.floors.kitchen"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1300}
												],
												id:"027_2", selection: "selection.matrix.finishes.floors.kitchen"}
										}
									}
								}
							},
							livingArea: {
								uiText: "LIVING AREA",
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2150},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2150},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2700},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1300}
												],
												id:"028_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.livingArea"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3750},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1600}
												],
												id:"028_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.livingArea"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2200}
												],
												id:"028_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.livingArea"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
												],
												id:"029_0", selection: "selection.matrix.finishes.floors.livingArea"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 5600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 5600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2750}
												],
												id:"029_1", selection: "selection.matrix.finishes.floors.livingArea"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 6600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 7800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3200}
												],
												id:"029_2", selection: "selection.matrix.finishes.floors.livingArea"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"030_0", selection: "selection.matrix.finishes.floors.livingArea"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 350}
												],
												id:"030_1", selection: "selection.matrix.finishes.floors.livingArea"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 700},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 700},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 600}
												],
												id:"030_2", selection: "selection.matrix.finishes.floors.livingArea"}
										}
									}
								}
							},
							masterBedroom: {
								uiText: "MASTER BEDROOM",
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1750},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1100}
												],
												id:"031_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.masterBedroom"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2550},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1400}
												],
												id:"031_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.masterBedroom"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3810},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1800}
												],
												id:"031_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.masterBedroom"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3810},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2000}
												],
												id:"032_0", selection: "selection.matrix.finishes.floors.masterBedroom"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
												],
												id:"032_1", selection: "selection.matrix.finishes.floors.masterBedroom"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2800}
												],
												id:"032_2", selection: "selection.matrix.finishes.floors.masterBedroom"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"033_0", selection: "selection.matrix.finishes.floors.masterBedroom"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 250},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 250},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 350},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 250}
												],
												id:"033_1", selection: "selection.matrix.finishes.floors.masterBedroom"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 350},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 350},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 480},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 450}
												],
												id:"033_2", selection: "selection.matrix.finishes.floors.masterBedroom"}
										}
									}
								}
							},
							secondaryBedrooms: {
								uiText: "SECONDARY BEDROOMS",
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1400}
												],
												id:"034_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.secondaryBedrooms"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1250},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1800}
												],
												id:"034_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.secondaryBedrooms"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
												],
												id:"034_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.secondaryBedrooms"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2300}
												],
												id:"035_0", selection: "selection.matrix.finishes.floors.secondaryBedrooms"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2100},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2800}
												],
												id:"035_1", selection: "selection.matrix.finishes.floors.secondaryBedrooms"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 2300},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4700},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3600}
												],
												id:"035_2", selection: "selection.matrix.finishes.floors.secondaryBedrooms"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"036_0", selection: "selection.matrix.finishes.floors.secondaryBedrooms"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 450},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 400}
												],
												id:"036_1", selection: "selection.matrix.finishes.floors.secondaryBedrooms"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 250},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 550},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 500}
												],
												id:"036_2", selection: "selection.matrix.finishes.floors.secondaryBedrooms"}
										}
									}
								}
							},
							masterBathroom: {
								uiText: "MASTER BATHROOM",
								options: {

									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"037_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.masterBathroom"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 250},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 250}
												],
												id:"037_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.masterBathroom"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 550},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 550},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 500}
												],
												id:"037_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.masterBathroom"}
										}
									}
								}
							},
							secondaryBathrooms: {
								uiText: "SECONDARY BATHROOMS",
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"031_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.secondaryBathrooms"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 200}
												],
												id:"038_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.secondaryBathrooms"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1100},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 400}
												],
												id:"038_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.secondaryBathrooms"}
										}
									}
								}
							},
							mudUtilities: {
								uiText: "MUD & UTILITIES",
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"032_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.mudUtilities"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 250},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 250}
												],
												id:"039_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.mudUtilities"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 550},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 550},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 450}
												],
												id:"039_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.mudUtilities"}
										}
									}
								}
							},
							ironChef: {
								uiText: "IRON CHEF",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
									{field: "selection.hobbies.kitchen.ironChef", value: "not null"}
								],
								options: {

									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"040_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.ironChef"},
											level2: {uiText: "LEVEL 2", price:1300, id:"040_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.ironChef"},
											level3: {uiText: "LEVEL 3", price:1850, id:"040_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.ironChef"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:1850, id:"041_0", selection: "selection.matrix.finishes.floors.ironChef"},
											level2: {uiText: "LEVEL 2", price:2200, id:"041_1", selection: "selection.matrix.finishes.floors.ironChef"},
											level3: {uiText: "LEVEL 3", price:2600, id:"041_2", selection: "selection.matrix.finishes.floors.ironChef"}
										}
									}
								}

							},
							jackJill: {
								uiText: "JACK & JILL BEDROOMS",
								requires: [
									{field: "selection.hobbies.jackJill", value: "not null"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:1900, id:"042_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.jackJill"},
											level2: {uiText: "LEVEL 2", price:2550, id:"042_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.jackJill"},
											level3: {uiText: "LEVEL 3", price:3900, id:"042_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.jackJill"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:3900, id:"043_0", selection: "selection.matrix.finishes.floors.jackJill"},
											level2: {uiText: "LEVEL 2", price:4300, id:"043_1", selection: "selection.matrix.finishes.floors.jackJill"},
											level3: {uiText: "LEVEL 3", price:4700, id:"043_2", selection: "selection.matrix.finishes.floors.jackJill"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"044_0", selection: "selection.matrix.finishes.floors.jackJill"},
											level2: {uiText: "LEVEL 2", price:350, id:"044_1", selection: "selection.matrix.finishes.floors.jackJill"},
											level3: {uiText: "LEVEL 3", price:650, id:"044_2", selection: "selection.matrix.finishes.floors.jackJill"}
										}
									}
								}
							},
							hobbyRoom: {
								uiText: "HOBBY ROOM (ARTS & CRAFTS)",
								requires: [
									{field: "selection.hobbies.hobbyRoom", value: "not null"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:1200, id:"045_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.hobbyRoom"},
											level2: {uiText: "LEVEL 2", price:1500, id:"045_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.hobbyRoom"},
											level3: {uiText: "LEVEL 3", price:2150, id:"045_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.hobbyRoom"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:2150, id:"046_0", selection: "selection.matrix.finishes.floors.hobbyRoom"},
											level2: {uiText: "LEVEL 2", price:2550, id:"046_1", selection: "selection.matrix.finishes.floors.hobbyRoom"},
											level3: {uiText: "LEVEL 3", price:2950, id:"046_2", selection: "selection.matrix.finishes.floors.hobbyRoom"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"047_0", selection: "selection.matrix.finishes.floors.hobbyRoom"},
											level2: {uiText: "LEVEL 2", price:350, id:"047_1", selection: "selection.matrix.finishes.floors.hobbyRoom"},
											level3: {uiText: "LEVEL 3", price:650, id:"047_2", selection: "selection.matrix.finishes.floors.hobbyRoom"}
										}
									}
								}
							},
							romanRoom: {
								uiText: "ROMAN ROOM",
								requires: [
									{field: "selection.hobbies.romanRoom", value: "not null"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:1200, id:"048_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.romanRoom"},
											level2: {uiText: "LEVEL 2", price:1500, id:"048_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.romanRoom"},
											level3: {uiText: "LEVEL 3", price:2150, id:"048_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.romanRoom"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:2150, id:"049_0", selection: "selection.matrix.finishes.floors.romanRoom"},
											level2: {uiText: "LEVEL 2", price:2550, id:"049_1", selection: "selection.matrix.finishes.floors.romanRoom"},
											level3: {uiText: "LEVEL 3", price:2950, id:"049_2", selection: "selection.matrix.finishes.floors.romanRoom"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"050_0", selection: "selection.matrix.finishes.floors.romanRoom"},
											level2: {uiText: "LEVEL 2", price:600, id:"050_1", selection: "selection.matrix.finishes.floors.romanRoom"},
											level3: {uiText: "LEVEL 3", price:700, id:"050_2", selection: "selection.matrix.finishes.floors.romanRoom"}
										}
									}
								}
							},
							casita: {
								uiText: "CASITA",
								requires: [
									{field: "selection.hobbies.casita", value: "not null"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: 2200,
												id:"051_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.casita"},
											level2: {uiText: "LEVEL 2",
												price: 2750,
												id:"051_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.casita"},
											level3: {uiText: "LEVEL 3",
												price: 3900,
												id:"051_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.casita"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: 3900,
												id:"052_0", selection: "selection.matrix.finishes.floors.casita"},
											level2: {uiText: "LEVEL 2",
												price: 4300,
												id:"052_1", selection: "selection.matrix.finishes.floors.casita"},
											level3: {uiText: "LEVEL 3",
												price: 4700,
												id:"052_2", selection: "selection.matrix.finishes.floors.casita"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"054_0", selection: "selection.matrix.finishes.floors.casita"},
											level2: {uiText: "LEVEL 2",
												price: 800,
												id:"053_1", selection: "selection.matrix.finishes.floors.casita"},
											level3: {uiText: "LEVEL 3",
												price: 900,
												id:"053_2", selection: "selection.matrix.finishes.floors.casita"}
										}
									}
								}
							},
							extendedMasterBathroom: {
								uiText: "EXTENDED MASTER BATHROOM",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"054_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.extendedMasterBathroom"},
											level2: {uiText: "LEVEL 2",
												price: 150,
												id:"054_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.extendedMasterBathroom"},
											level3: {uiText: "LEVEL 3",
												price: 250,
												id:"054_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.extendedMasterBathroom"}
										}
									}
								}
							},
							jackJillBathroom: {
								uiText: "JACK & JILL BATHROOM",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"055_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.jackJillBathroom"},
											level2: {uiText: "LEVEL 2",
												price: 200,
												id:"055_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.jackJillBathroom"},
											level3: {uiText: "LEVEL 3",
												price: 300,
												id:"055_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.jackJillBathroom"}
										}
									}
								}
							},
							foyerEntryHall: {
								uiText: "FOYER AND ENTRY HALL",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"056_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.foyerEntryHall"},
											level2: {uiText: "LEVEL 2",
												price: 400,
												id:"056_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.foyerEntryHall"},
											level3: {uiText: "LEVEL 3",
												price: 800,
												id:"056_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.foyerEntryHall"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:800, id:"058_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.foyerEntryHall"},
											level2: {uiText: "LEVEL 2",
												price: 1000,
												id:"058_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.foyerEntryHall"},
											level3: {uiText: "LEVEL 3",
												price: 1500,
												id:"058_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.foyerEntryHall"}
										}
									}
								}
							},
							dining: {
								uiText: "DINING",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"057_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.dining"},
											level2: {uiText: "LEVEL 2",
												price: 450,
												id:"057_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.dining"},
											level3: {uiText: "LEVEL 3",
												price: 700,
												id:"057_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.dining"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:700, id:"058_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.dining"},
											level2: {uiText: "LEVEL 2",
												price: 950,
												id:"058_1",levelDefault: 2, selection: "selection.matrix.finishes.floors.dining"},
											level3: {uiText: "LEVEL 3",
												price: 1350,
												id:"058_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.dining"}
										}
									}
								}
							},
							masterWic: {
								uiText: "masterWic",
								requires: [
									{field: "selection.hobbies.masterWic", value: "not null"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: 300,
												id:"059_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.masterWic"},
											level2: {uiText: "LEVEL 2",
												price: 400,
												id:"059_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.masterWic"},
											level3: {uiText: "LEVEL 3",
												price: 500,
												id:"059_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.masterWic"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: 600,
												id:"060_0", selection: "selection.matrix.finishes.floors.masterWic"},
											level2: {uiText: "LEVEL 2",
												price: 750,
												id:"060_1", selection: "selection.matrix.finishes.floors.masterWic"},
											level3: {uiText: "LEVEL 3",
												price: 900,
												id:"060_2", selection: "selection.matrix.finishes.floors.masterWic"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"054_0", selection: "selection.matrix.finishes.floors.masterWic"},
											level2: {uiText: "LEVEL 2",
												price: 100,
												id:"061_1", selection: "selection.matrix.finishes.floors.masterWic"},
											level3: {uiText: "LEVEL 3",
												price: 200,
												id:"061_2", selection: "selection.matrix.finishes.floors.masterWic"}
										}
									}
								}
							},
							livingRoomExtension: {
								uiText: "LIVING ROOM EXTENSION",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"},
									{field: "selection.hobbies.livingRoomExtension", value: "not null"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:1150, id:"062_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.livingRoomExtension"},
											level2: {uiText: "LEVEL 2", price:1600, id:"062_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.livingRoomExtension"},
											level3: {uiText: "LEVEL 3", price:2500, id:"062_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.livingRoomExtension"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:2500, id:"063_0", selection: "selection.matrix.finishes.floors.livingRoomExtension"},
											level2: {uiText: "LEVEL 2", price:2900, id:"063_1", selection: "selection.matrix.finishes.floors.livingRoomExtension"},
											level3: {uiText: "LEVEL 3", price:3300, id:"063_2", selection: "selection.matrix.finishes.floors.livingRoomExtension"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"064_0", selection: "selection.matrix.finishes.floors.livingRoomExtension"},
											level2: {uiText: "LEVEL 2", price:200, id:"064_1", selection: "selection.matrix.finishes.floors.livingRoomExtension"},
											level3: {uiText: "LEVEL 3", price:400, id:"064_2", selection: "selection.matrix.finishes.floors.livingRoomExtension"}
										}
									}
								}
							},
							stairsUpstairsLivingArea: {
								uiText: "Stairs & Upstairs Living Area",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
								],
								options: {
									tile: {
										uiText: "TILE",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1900}
												],
												id:"065_0",  levelDefault: 1, selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2600}
												],
												id:"065_1", levelDefault: 2, selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900}
												],
												id:"065_2", levelDefault: 3, selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"}
										}
									},
									wood: {
										uiText: "WOOD",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3900}
												],
												id:"066_0", selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4200},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4300}
												],
												id:"066_1", selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 4600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 4700}
												],
												id:"066_2", selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"}
										}
									},
									carpet: {
										uiText: "CARPET",
										checked: true,
										options: {
											level1: {uiText: "LEVEL 1", price:0, id:"067_0", selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"},
											level2: {uiText: "LEVEL 2",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 400},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 450}
												],
												id:"067_1", selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"},
											level3: {uiText: "LEVEL 3",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 550}
												],
												id:"067_2", selection: "selection.matrix.finishes.floors.stairsUpstairsLivingArea"}
										}
									}
								}
							}
						}
					},
					kitchen: {
						uiText: "KITCHEN",
						options: {
							countertops: {
								uiText: "COUNTERTOPS",
								checked: true,
								options: {
									level2: {uiText: "LEVEL 2",checked: true, price:750, id:"068_1", levelDefault: 2, selection: "selection.matrix.finishes.kitchen.countertops"},
									level3: {uiText: "LEVEL 3",checked: true, price:1500, id:"068_2", levelDefault: 3, selection: "selection.matrix.finishes.kitchen.countertops"},
									level4: {uiText: "LEVEL 4",checked: true, price:2250, id:"068_3", levelDefault: 4, selection: "selection.matrix.finishes.kitchen.countertops"}
								}
							},
							sink: {
								uiText: "SINK",
								checked: true,
								options: {
									level1: {uiText: "LEVEL 1",checked: true, price:0, id:"069_0",  levelDefault: 1, selection: "selection.matrix.finishes.kitchen.sink"},
									level2: {uiText: "LEVEL 2",checked: true, price:750, id:"069_1", levelDefault: 2, selection: "selection.matrix.finishes.kitchen.sink"}
								}
							},
							appliances: {
								uiText: "APPLIANCES",
								checked: true,
								options: {
									level1: {
										uiText: "LEVEL 1",
										price:0,
										id:"070_0",
										levelDefault: 1,
										checked: true,
										selection: "selection.matrix.finishes.kitchen.appliances"
									},
									level2: {
										uiText: "LEVEL 2",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1300},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2000}
										],
										id:"070_1",
										levelDefault: 2,
										checked: true,
										selection: "selection.matrix.finishes.kitchen.appliances"
									},
									level3: {
										uiText: "LEVEL 3",
										checked: true,
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 6000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6000},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3200}
										],
										id:"070_2",
										levelDefault: 3,
										selection: "selection.matrix.finishes.kitchen.appliances"
									},
									level4: {
										uiText: "LEVEL 4",
										checked: true,
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 7400}
										],
										id:"070_3",
										levelDefault: 4,
										selection: "selection.matrix.finishes.kitchen.appliances"
									}
								}
							}
						}
					},
					kitchenRoyal: {
						uiText: "KITCHEN ROYAL",
						requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN"},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
									{field: "selection.hobbies.kitchenRoyal", value: "not null"}
								],
						options: {
							countertops: {
								uiText: "COUNTERTOPS",
								checked: true,
								options: {
									level2: {uiText: "LEVEL 2", price:900, id:"071_1", levelDefault: 2, selection: "selection.matrix.finishes.kitchenRoyal.countertops"},
									level3: {uiText: "LEVEL 3", price:1800, id:"071_2", levelDefault: 3, selection: "selection.matrix.finishes.kitchenRoyal.countertops"},
									level4: {uiText: "LEVEL 4", price:2700, id:"071_3", levelDefault: 4, selection: "selection.matrix.finishes.kitchenRoyal.countertops"}
								}
							},
							sink: {
								uiText: "SINK",
								checked: true,
								options: {
									level1: {uiText: "LEVEL 1", price:0, id:"072_0",  levelDefault: 1, selection: "selection.matrix.finishes.kitchenRoyal.sink"},
									level2: {uiText: "LEVEL 2", price:750, id:"072_1", levelDefault: 2, selection: "selection.matrix.finishes.kitchenRoyal.sink"}
								}
							},
							appliances: {
								uiText: "APPLIANCES",
								checked: true,
								options: {
									level1: {
										uiText: "LEVEL 1",
										price:0,
										id:"073_0",
										levelDefault: 1,
										selection: "selection.matrix.finishes.kitchenRoyal.appliances"
									},
									level2: {
										uiText: "LEVEL 2",
										price: 1300,
										id:"073_1",
										levelDefault: 2,
										selection: "selection.matrix.finishes.kitchenRoyal.appliances"
									},
									level3: {
										uiText: "LEVEL 3",
										price: 6000,
										id:"073_2",
										levelDefault: 3,
										selection: "selection.matrix.finishes.kitchenRoyal.appliances"
									}
								}
							}
						}
					},
					ironChef: {
						uiText: "IRON CHEF KITCHEN",
						requires: [
									{field: "selection.hobbies.kitchen.ironChef", value: "not null"}
								],
						options: {
							countertops: {
								uiText: "COUNTERTOPS",
								checked: true,
								options: {
									level2: {uiText: "LEVEL 2", price:1000, id:"074_1", levelDefault: 2, selection: "selection.matrix.finishes.ironChef.countertops"},
									level3: {uiText: "LEVEL 3", price:2000, id:"074_2", levelDefault: 3, selection: "selection.matrix.finishes.ironChef.countertops"},
									level4: {uiText: "LEVEL 4", price:3000, id:"074_3", levelDefault: 4, selection: "selection.matrix.finishes.ironChef.countertops"}
								}
							},
							sink: {
								uiText: "SINK",
								checked: true,
								options: {
									level1: {uiText: "LEVEL 1", price:0, id:"075_0",  levelDefault: 1, selection: "selection.matrix.finishes.ironChef.sink"},
									level2: {uiText: "LEVEL 2", price:750, id:"075_1", levelDefault: 2, selection: "selection.matrix.finishes.ironChef.sink"}
								}
							},
							appliances: {
								uiText: "APPLIANCES",
								checked: true,
								options: {
									level1: {
										uiText: "LEVEL 1",
										price: 0,
										id:"076_0",
										levelDefault: 1,
										selection: "selection.matrix.finishes.ironChef.appliances"
									},
									level2: {
										uiText: "LEVEL 2",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1700},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 2400}
										],
										id:"076_1",
										levelDefault: 2,
										selection: "selection.matrix.finishes.ironChef.appliances"
									},
									level3: {
										uiText: "LEVEL 3",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 8200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 8200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 8200},
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3600}
										],
										id:"076_2",
										levelDefault: 3,
										selection: "selection.matrix.finishes.ironChef.appliances"
									},
									level4: {
										uiText: "LEVEL 4",
										price: [
											{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 8200}
										],
										id:"076_3",
										levelDefault: 4,
										selection: "selection.matrix.finishes.ironChef.appliances"
									}
								}
							}
						}
					},
					bathrooms: {
						uiText: "BATHROOMS",
						levels: 4,
						options: {
							masterBathroom: {
								uiText: "MASTER BATHROOM",
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {
											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"077_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.masterBathroom.countertops"},
													level2: {uiText: "LEVEL 2", price:500, id:"077_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.masterBathroom.countertops"}
													}
											},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													add: {uiText: "LEVEL 1", price:1000, id:"078_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.masterBathroom.countertops"},
													level2: {uiText: "LEVEL 2", price:1200, id:"078_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.masterBathroom.countertops"},
													level3: {uiText: "LEVEL 3", price:1400, id:"078_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.masterBathroom.countertops"},
													level4: {uiText: "LEVEL 4", price:1600, id:"078_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.masterBathroom.countertops"}
												}
											}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM", price:3000, id:"079_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.masterBathroom.framelessShowerDoors"}
										}
									}
								}
							},
							secondaryBathrooms: {
								uiText: "SECONDARY BATHROOMS",
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {
											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"080_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.countertops"},
													level2: {uiText: "LEVEL 2",
														price: [
															{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 300},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 600},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 600},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 300}
														],
														id:"080_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.countertops"}
													}
												},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1",
														price: [
															{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 600},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1200},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1200},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 600}
														],
														id:"081_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.countertops"},
													level2: {uiText: "LEVEL 2",
														price: [
															{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 800},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1600},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1600},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 800}
														],
														id:"081_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.countertops"},
													level3: {uiText: "LEVEL 3",
														price: [
															{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1000},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2000},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2000},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1000}
														],
														id:"081_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.countertops"},
													level4: {uiText: "LEVEL 4",
														price: [
															{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1200},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 2400},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 2400},
															{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1200}
														],
														id:"081_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.countertops"}
													}
												}
										}
									},
									walkInShower: {
										uiText: "CHANGE TUB TO WALK IN SHOWER",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 1800},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 3600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 3600},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 1800}
												],
												id:"082_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.walkInShower"}
										}
									},
									extendedBathtub: {
										uiText: "EXTENDED BATHTUB",
										checked: true,
										options: {
											add: {uiText: "DELUXE 6' BATHTUB",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 500},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 1000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 1000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 500}
												],
												id:"083_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.extendedBathtub"}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM",
												price: [
													{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 3000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 6000},
													{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 3000}
												],
												id:"084_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.secondaryBathrooms.framelessShowerDoors"}
										}
									}
								}
							},
							jackJillBedrooms: {
								uiText: "JACK & JILL BEDROOMS",
								requires: [
									{field: "selection.hobbies.jackJill", value: "not null"}
								],
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {
											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"085_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.countertops"},
													level2: {uiText: "LEVEL 2", price:500, id:"085_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.countertops"}
													}
												},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:1000, id:"086_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.countertops"},
													level2: {uiText: "LEVEL 2", price:1200, id:"086_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.countertops"},
													level3: {uiText: "LEVEL 3", price:1400, id:"086_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.countertops"},
													level4: {uiText: "LEVEL 4", price:1600, id:"086_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.countertops"}
													}
												}
										}
									},
									walkInShower: {
										uiText: "CHANGE TUB TO WALK IN SHOWER",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM",
												price: 1800,
												id:"087_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.walkInShower"}
										}
									},
									extendedBathtub: {
										uiText: "EXTENDED BATHTUB",
										checked: true,
										options: {
											add: {uiText: "DELUXE 6' BATHTUB", price:500, id:"088_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.extendedBathtub"}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM", price:3000, id:"089_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBedrooms.framelessShowerDoors"}
										}
									}
								}
							},
							romanRoom: {
								uiText: "ROMAN ROOM",
								requires: [
									{field: "selection.hobbies.romanRoom", value: "not null"}
								],
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {
											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"090_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.romanRoom.countertops"},
													level2: {uiText: "LEVEL 2", price:300, id:"090_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.romanRoom.countertops"}
													}
												},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:600, id:"091_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.romanRoom.countertops"},
													level2: {uiText: "LEVEL 2", price:800, id:"091_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.romanRoom.countertops"},
													level3: {uiText: "LEVEL 3", price:1000, id:"091_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.romanRoom.countertops"},
													level4: {uiText: "LEVEL 4", price:1200, id:"091_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.romanRoom.countertops"}
													}
												}
										}
									},
									walkInShower: {
										uiText: "CHANGE TUB TO WALK IN SHOWER",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM",
												price: 1800,
												id:"092_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.romanRoom.walkInShower"}
										}
									},
									extendedBathtub: {
										uiText: "EXTENDED BATHTUB",
										checked: true,
										options: {
											add: {uiText: "DELUXE 6' BATHTUB", price:500, id:"093_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.romanRoom.extendedBathtub"}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM", price:3000, id:"094_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.romanRoom.framelessShowerDoors"}
										}
									}
								}
							},
							casita: {
								uiText: "CASITA",
								requires: [
									{field: "selection.hobbies.casita", value: "not null"}
								],
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {
											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"095_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.casita.countertops"},
													level2: {uiText: "LEVEL 2", price:300, id:"095_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.casita.countertops"}
													}
												},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:600, id:"096_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.casita.countertops"},
													level2: {uiText: "LEVEL 2", price:800, id:"096_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.casita.countertops"},
													level3: {uiText: "LEVEL 3", price:1000, id:"096_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.casita.countertops"},
													level4: {uiText: "LEVEL 4", price:1200, id:"096_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.casita.countertops"}
													}
												}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM", price:2000, id:"097_0", selection: "selection.matrix.finishes.bathrooms.casita.framelessShowerDoors"}
										}
									}
								}
							},
							extendedMasterBathroom: {
								uiText: "EXTENDED MASTER BATHROOM",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"},
									{field: "selection.hobbies.extendedMasterBathroom", value: "not null"}
								],
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {
											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"098_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.countertops"},
													level2: {uiText: "LEVEL 2", price:500, id:"098_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.countertops"}
													}
												},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:1000, id:"099_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.countertops"},
													level2: {uiText: "LEVEL 2", price:1200, id:"099_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.countertops"},
													level3: {uiText: "LEVEL 3", price:1400, id:"099_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.countertops"},
													level4: {uiText: "LEVEL 4", price:1600, id:"099_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.countertops"}
													}
												}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM", price:6000, id:"100_0", selection: "selection.matrix.finishes.bathrooms.extendedMasterBathroom.framelessShowerDoors"}
										}
									}
								}
							},
							jackJillBathroom: {
								uiText: "JACK & JILL BATHROOM",
								requires: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"},
									{field: "selection.hobbies.jackJill", value: "not null"}
								],
								options: {
									countertops: {
										uiText: "COUNTERTOPS",
										options: {

											culturedGranite:{
												uiText: "CULTURED GRANITE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:0, id:"101_0",  levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.countertops"},
													level2: {uiText: "LEVEL 2", price:300, id:"101_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.countertops"}
													}
												},
											graniteMarble:{
												uiText: "GRANITE AND MARBLE",
												checked: true,
												options: {
													level1: {uiText: "LEVEL 1", price:600, id:"102_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.countertops"},
													level2: {uiText: "LEVEL 2", price:800, id:"102_1", levelDefault: 2, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.countertops"},
													level3: {uiText: "LEVEL 3", price:1000, id:"102_2", levelDefault: 3, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.countertops"},
													level4: {uiText: "LEVEL 4", price:1200, id:"102_3", levelDefault: 4, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.countertops"}
													}
												}
										}
									},
									walkInShower: {
										uiText: "CHANGE TUB TO WALK IN SHOWER",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM",
												price: 1800,
												id:"103_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.walkInShower"}
										}
									},
									extendedBathtub: {
										uiText: "EXTENDED BATHTUB",
										checked: true,
										options: {
											add: {uiText: "DELUXE 6' BATHTUB", price:500, id:"104_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.extendedBathtub"}
										}
									},
									framelessShowerDoors: {
										uiText: "FRAMELESS SHOWER DOORS",
										checked: true,
										options: {
											add: {uiText: "ADD ITEM", price:3000, id:"105_0", levelDefault: 1, selection: "selection.matrix.finishes.bathrooms.jackJillBathroom.framelessShowerDoors"}
										}
									}
								}
							}
						}
					},
					vinylWindows: {
						uiText: "VINYL WINDOWS",
						checked: true,
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.GH"}
						],
						options: {
							add: {uiText: "ADD ITEM",
								price: 1450,
								id:"106_0", levelDefault: 1, selection: "selection.matrix.finishes.vinylWindows"}
						}
					},
					andersonUpgradeWindows: {
						uiText: "ANDERSON 100 UPGRADE WINDOWS",
						checked: true,
						options: {
							add: {
								uiText: "ADD ITEM",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 11800},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 13500},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 16250},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 10750}
								],
								id:"107_0", levelDefault: 1, selection: "selection.matrix.finishes.andersonUpgradeWindows"
							}
						}
					},
					doorsTrimsBaseBoards: {
						uiText: "DOORS, TRIMS & BASEBOARDS SOLID CORE STAIN GRADE",
						checked: true,
						options: {
							add: {uiText: "ADD ITEM",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.HN", price: 4000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 6100},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 7000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.GH", price: 4000}
								],
								id:"108_0", levelDefault: 1, selection: "selection.matrix.finishes.doorsTrimsBaseBoards"}
						}
					},
					keyPad: {
						uiText: "KEYLESS ENTRY KEY PAD",
						checked: true,
						options: {
							add: {uiText: "ADD ITEM", price:550, id:"109_0", levelDefault: 1, selection: "selection.matrix.finishes.keyPad"}
						}
					},
					wroughtIronBalusters: {
						uiText: "WROUGHT IRON BALUSTERS",
						checked: true,
						requires: [
							{field: "selection.masterPlan", value: "prices.masterPlans.options.AB"},
							{field: "selection.masterPlan", value: "prices.masterPlans.options.VH"}
						],
						options: {
							add: {uiText: "ADD ITEM",
								price: [
									{field: "selection.masterPlan", value: "prices.masterPlans.options.AB", price: 5000},
									{field: "selection.masterPlan", value: "prices.masterPlans.options.VH", price: 5600}
								],
								id:"110_0", levelDefault: 1, selection: "selection.matrix.finishes.wroughtIronBalusters"}
						}
					}
				}
			}
		}
	}
	};
