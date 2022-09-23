export default function handler(req, res) {
	res.status(200).json(
		[
			{
				"id": 1,
				"name": {
					"en": "Lotus Pose",
					"sn": "Padmasana"
				},
				"img": "https://www.dropbox.com/s/0oylivjwzuj5fnp/seatedORlotus.svg?raw=1",
				"body": "This is the first asana"
			},
			{
				"id": 2,
				"name": {
					"en": "Tree Pose",
					"sn": "Vrikshasana"
				},
				"img": "https://www.dropbox.com/s/mn2ktlihp12mtfa/tree.svg?raw=1",
				"body": "This is the second asana"
			},
			{
				"id": 3,
				"name": {
					"en": "Boat Pose",
					"sn": "Navasana"
				},
				"img": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
				"body": "This is the third asana"
			},
			{
				"id": 4,
				"name": {
					"en": "Eagle Pose",
					"sn": "Garudasana"
				},
				"img": "https://www.dropbox.com/s/w05qgx7wyxva1y3/eagle.svg?raw=1",
				"body": "This is the fourth asana"
			},
			{
				"id": 5,
				"name": {
					"en": "Pigeon Pose",
					"sn": "Supta Kapotasana"
				},
				"img": "https://www.dropbox.com/s/77peru289zm446u/pigeon.svg?raw=1",
				"body": "This is the fifth asana"
			},
			{
				"id": 6,
				"name": {
					"en": "Plank Pose",
					"sn": "Phalakasana"
				},
				"img": "https://www.dropbox.com/s/jg6ge8zpaltx10f/plank.svg?raw=1",
				"body": "This is the sixth asana"
			}
		]
	)
}
