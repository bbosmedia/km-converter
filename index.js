document.getElementById('result').style.visibility = 'hidden';

document.getElementById('inputId').addEventListener('input', function (e) {
	let input = e.target.value
	document.getElementById('result').style.visibility = 'visible';
	document.getElementById('metValue').innerHTML = input * 1000 + ' Metres'
	document.getElementById('dcmValue').innerHTML = input * 10000 + ' Decimeter'
	document.getElementById('cmValue').innerHTML = input * 100000 + ' Centimeter'
	document.getElementById('mmValue').innerHTML = input * 1000000 + ' Millimeter'
})