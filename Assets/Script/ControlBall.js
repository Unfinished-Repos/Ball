#pragma strict

var jumpHeight = 8;
var moveSpeed = 1f;
var target : Transform;
private var isFalling = false;

function Update () 
{
	//Handle ball rotation
	transform.Translate(moveSpeed*Input.GetAxis("Horizontal")*Time.deltaTime,0f,moveSpeed*Input.GetAxis("Vertical")*Time.deltaTime);		
	
	if (Input.GetKeyDown (KeyCode.Space) && isFalling == false){
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
	isFalling = true;
}

function OnCollisionStay (){
	isFalling = false;
}
