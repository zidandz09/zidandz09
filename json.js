$(document).ready(function () {
	var mhs;
	var current;
	
	$.ajax({
		url: 'data.json',
		dataType: 'text',
		success: function (res) {
			mhs = JSON.parse(res);
			
			for (var i = 0; i < mhs.length; i++) {
				$('tbody').append('<tr><td>' + (i + 1) + '</td><td>' + mhs[i].nim + '</td><td>' + mhs[i].nama + '</td></tr>');
				
				if (!i) {//i == 0) {
					current = 0;
					getMhs(current);
				}
			}
			
			if (!mhs.length) {//mhs.length == 0) {
				$('tbody').html('<tr><td colspan="3" class="text-center">Tidak ada data</td></tr>');
			}
		}
	});
	
	function getMhs(i) {
		$('#nim').val(mhs[i].nim);
		$('#nama').val(mhs[i].nama);
		$('#foto').prop('src', 'images/' + mhs[i].foto);
		
		if (mhs.length > 0) {
			if (current == mhs.length - 1)
				$('#next').prop('disabled', true);
			else
				$('#next').prop('disabled', false);
			
			if (current)
				$('#prev').prop('disabled', false);
			else
				$('#prev').prop('disabled', true);
		}
	}
	
	$('#next').click(function () {
		getMhs(++current);
	});
	
	$('#prev').click(function () {
		getMhs(--current);
	});
});