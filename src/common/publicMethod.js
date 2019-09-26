const formatDate = p => {
	let format = p;
	let year = p.substring(0,4);
	let month = p.substring(4,6);
	let day = p.substring(6,8);
	let hour = p.substring(8,10);
	let minute = p.substring(10,12);
	let second = p.substring(12,14);
	format = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return format;
}

export {
	formatDate
}
