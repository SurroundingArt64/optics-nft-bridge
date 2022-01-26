export const networks = [
	{
		url: process.env.POLYGON_MUMBAI_URL || "",
		name: "mumbai",
		localDomain: "1000",
	},
	{
		url: process.env.ALFAJORES_URL || "",
		name: "alfajores",
		localDomain: "2000",
	},
	{
		url: process.env.RINKEBY_URL || "",
		name: "rinkeby",
		localDomain: "3000",
	},
];
