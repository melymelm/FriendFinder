var friendArray = [
	// objects representing customers with reservations go here
	// you may want to start with some hard-coded for testing
	{
		name: "Melissa",
		photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rough_Coated_Jack_Russell_Terrier.JPG/220px-Rough_Coated_Jack_Russell_Terrier.JPG",
		scores: [3,3,3,3,3,3,3,3,3,3]
	},
	{
		name: "Evie",
		photo: "https://www.facebook.com/photo.php?fbid=10152788138043154&set=pcb.10152788142173154&type=3&theater",
		scores: [5,5,5,1,5,2,1,3,3,1]
	}
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;