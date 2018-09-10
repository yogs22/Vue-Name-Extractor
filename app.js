Vue.component('extractor', {
	template: `
	<div class="container">
		<h1 class="text-center">Name Extractor</h1>
		<p class="text-center">Name Extractor adalah aplikasi pengekstrak nama otomatis</p>
		<div class="input-group">
			<input type="text" v-model="nama" placeholder="Ketik nama lengkap anda" @keyup.enter="proses" class="form-control">
			<button @click="proses" class="input-group-addon btn btn-primary">Proses</button>
		</div> <br>
		<h2 v-if='hasil' class="alert alert-success">
			Selamat Datang Mr. / Mrs.
			{{ akhir | capitalize }}
			Senang Anda Dapat bergabung
		</h2>
		<b v-if='hasil' class="text-warning badge badge-dark">Hasil ekstrak nama anda :</b>
		<div v-if='hasil' class="rounded border border-danger container ">
			<p>Nama depan : {{ depan }}</p>
			<p>Nama tengah : {{ tengah }}</p>
			<p>Nama akhir : {{ akhir }}</p>
		</div>
	</div>
	`,
	data() {
		return {
			nama: '',
			depan: '',
			tengah: '',
			akhir: '',
			hasil: false
		};
	},
	methods: {
		proses() {
			var lengkap = this.nama.split(' ')
			this.depan = lengkap[0]
			for (i = 1; i < lengkap.length - 1; i++) {
				this.tengah += lengkap[i] + ' ' 
			}
			this.akhir = lengkap[lengkap.length - 1]
			this.hasil = true
		}
	},
	filters: {
		capitalize: function(value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
});

var app = new Vue({
	el: '#app'
});