#pragma strict

var target : Transform;
var distance = -15;
var lift = 15;
function Update () 
{
	transform.position = target.position + Vector3(0, lift, distance);
	transform.LookAt (target);
}