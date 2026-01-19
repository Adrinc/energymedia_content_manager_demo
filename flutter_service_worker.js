'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "64ea5832a739abc2f28e460c14035b6f",
".git/config": "371d78ae26bebd67a69d358de9ca5e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32389cd602e65b03fe3d40bbcc91b8b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97e467cab7065cd8f42b98857afae6ca",
".git/logs/refs/heads/main": "e6fa9fb949dcd1e3f86dc985e16b1823",
".git/logs/refs/heads/master": "549d36ecb773a96dab00968d3982188d",
".git/logs/refs/remotes/gitea/main": "b02bf200e88b1e856ebab7d53d76d8f7",
".git/logs/refs/remotes/origin/main": "65942320c532822537c51c4a8548000e",
".git/objects/00/15da7a3e608c0ba97a2d4e806612f67a304c6c": "828eb542c4324c42415682bb1fe84c5b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0b/17a4370183b88c9f34474e81287e3f030c15d6": "88109b5b8580ed9f4eab64b7317135fd",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/a83504f676598453017a76342cad71e412d9e8": "b1f39fc208b2be92ab803ac2959a5aba",
".git/objects/10/f0bef810550dfe29eac87c8cc8382e017db808": "b7f81248981c5f1596aa54c3bd61dac5",
".git/objects/11/ce087ac8cc4f19c7a6f30a66dc84c899c046e2": "83a2f89bc7bbf38ef2fd5cf0fbfb2f8f",
".git/objects/12/ec4bc859a15a3881c94eefecadbe947c1a57c1": "338ee378319e7214f8686c17fb73097f",
".git/objects/14/3a8dd794278ff27d8f96e1203488af5615b826": "dac71f08bd7c2de7c2649faa594541cd",
".git/objects/15/8358a578f0146eedc509bad19b96fb3ab8892c": "055a83a9b8ba4d4a4b464ebb6d49c7c5",
".git/objects/19/e5921ea7dd6797241bfc8626a063e5feb5ecaa": "4f5ff83e3029ce1b21e4cabf81a7ac3c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/3406b8c8cfb7c99924482f2d7096c2a0c3323b": "c3e0de7726c796f8ca4deaaa44039d09",
".git/objects/21/1a3443cf9729ea28bddd09d48a86903b44fee4": "098329c184a655c9dd30c0155e3bb3e2",
".git/objects/2c/9d2637a986afbd408ef08dcd523c4dee3c07ad": "67239182a4659f822940e437577a6faa",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/c42393f0009eec71c0c4c3fe0c59d5ec0a3db4": "0d05386080c62038f8a72144dbcf9cbe",
".git/objects/31/bbc884196345f93b8292c2d306ef2f72a4c7fa": "d54a1dccb029142ef188e9d42172e5b0",
".git/objects/32/8844136bb6d06f81d4aba003d1e52d179835e5": "22fa57f114e33f9b899fda7386e0e01c",
".git/objects/33/7962481ed0bdd827fe476379dd1d01cdb4799b": "0e52487253bbacda977946a9c56a4f68",
".git/objects/33/b572bc203fdd902d81b64db3e6a42d94e7babc": "79a278c3c69de80b7d46e5a6181cf1b7",
".git/objects/36/c0482f4d2aa4deeccb42b2b6a1e7c9c4584c1e": "5cb4c5a2447ebe35948f1bf757de4cec",
".git/objects/38/224b9805fe04e12b76150f3e1e1fa59abf9b74": "8562e5c469eae1636d49920ae8bac037",
".git/objects/38/26ecf5b519f8d91e30f6924b824c64efab5903": "6c70fde75320468a367a140db65a6b1e",
".git/objects/39/da911f76fd478507a01703a97249b05b96ebe0": "f32c1ca8773b4e40f19778a92f77eb73",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/ab27744f7db2a57dc80ab8425ad3a4878abc1d": "4ce1f14b586b029e6f355e43411972ca",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/8b95410965567c40362e5e7166729006e50277": "8e1410a7cdc9328c411a50320999800a",
".git/objects/43/c6ac830d033074c80583e770bc077f9d8ce183": "7749515fff64c4c6dd1bf3b215e66f83",
".git/objects/43/f687225bcbfb478617231b6f6b90343e383ce8": "60571f48124022f78bd3ad831c427f6b",
".git/objects/46/22388f1482531016796f9e9624662170eec07b": "721a8cca9bc470dda81d485555e63187",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/f2089a01bfb44ff1b0e2f28d51aa19970b246e": "4451bf4d0ea42108ad003120897322d0",
".git/objects/4e/82fc0d70a61c890c075a074b7409d152bc2ef9": "7580955f9b47fae724c37e99a1a096c4",
".git/objects/4f/25d936dfa40a15a29c7dbc76bc0320047b1a8a": "eac534e356f5822c32f92da7507fc957",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/2560c748ea7640aa231caa40f5576854a3afc5": "e6646815af0a4390148d5de9e5e9be6e",
".git/objects/54/34840ea01f7c47cfbf0278c7865a4935c390b5": "638fc91975ddaa559cce17076774d391",
".git/objects/5e/0552628bfac57125046f611311ca4940a72e52": "30f9acf93addba41f4886986c70fa061",
".git/objects/62/f980e4e8d8c965564bb51cb3d7c80636627219": "f73f2f06f8937958457b2a8eacb62ef5",
".git/objects/63/d80ad45d8905c597fbaaf1da8337931da61e9d": "88796dbc3d5e02f96bb3946f2034e704",
".git/objects/68/08d20ed3574087cf74c5b36e8d0fa3da73ad69": "1cca80bf348f4e953595de51000a5e8a",
".git/objects/68/9f4d6171f3824ecc4ae8aca7a3bed26b70294f": "81cca804a607f8e47d1acb35af0edb36",
".git/objects/69/6e972f7e709096ce236c65475f13f7f3c507c3": "a48b4699138bbc6449de07d85c586d1c",
".git/objects/6c/4fa73e055548bf6d8c72600caba5000f4a08e7": "687438791240458c709215948abf8db5",
".git/objects/6f/8a84dbac3e8d20af08df4fcb678f457196cef9": "0a62c3c48fcff6dcbac974881dfda9fd",
".git/objects/70/3d623f3c169ea30c655a93afb6f858747e8b79": "9c10ac54ea501fd41dc77d91f3f0b87b",
".git/objects/70/87c2239fd7e8d2b0735f6734707a1d40aa1d68": "8cb1ca399e4a96a572f019931a62d17d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/e75a7e9be5d89f70acfa410e78a6edcea527b9": "e4b6fefb83f8e071076da83cc390d722",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/7bc24f4f3615279462e2fe9c100fd469f67f50": "c696e04e11d8f16794eaebc785357dfc",
".git/objects/75/42650107123326f2fefba5abcbf26ffd147829": "7f3c694cbd090c5aecab43b00576f284",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/384e9b9f693793d3e72801d93aaa5a5011a025": "c5760155fadcb96ff8a02b85cdf4d5dd",
".git/objects/77/864984a221ba3a5453473e929633b0abbe4a25": "d300c72c902cac44ce64763b38b023ec",
".git/objects/7f/919a8d4cce52ade39c416757ce847b834c6803": "a5c40f8dbdb00c5acb60d0e89b463819",
".git/objects/81/f378fed577fee0b6c2ac2ac7226dbd5a151142": "dca99cec4440a91131b14e801fb3b6ee",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/3632b1a4039cd229c35be8acc6017ec6f411ea": "fc559d1343f06c020d0f4c8007f035e4",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/94/31b6aedd6a4d85cdf3d8856afc36f6b1b0b6e4": "556a51c7f94258eb22653975a290218c",
".git/objects/96/5ad14aedf2ededa3d3ca465344e064fb75b71a": "eb8f29fae661871da945d10ac9d5da72",
".git/objects/97/2565f40eaaddfceafe18070f7451839deb4f6e": "98663d9ee9abb539e32cae143a078831",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/97/b3e559b835271a0bee75e486cb93f5af549971": "544b2fcafc7cf3f22e96dbc0213a6f7f",
".git/objects/97/fd9bd112ebe9d9ad00f5beab136842008a7066": "e971bcf4f421b64f00e9ed37c9e2d241",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/dff3ae4f01adff5cda37a7d9b9bbf30e49cb58": "11c586d02222c1bc1daeecb3a751e20d",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/d0aa7c02b143da20664f6f4cd945f73cb432e2": "3fbb4b5f98beb5f071724a95c3202601",
".git/objects/a2/b93daff3cc77b707658b6ab08dbd3be15acb33": "b49e5c850ea4924df286e576c7693bff",
".git/objects/a4/3585f7450e92f21fff4e05a09b650c1c3cc546": "77fa3e4906e2dc8d0972aa007330dd91",
".git/objects/a7/c99b37688551580fdcd02d08a03a03d6430914": "929f5d55d7b0c78b3ba0f2e42f9ea4fa",
".git/objects/a8/d14e44591e8ce21af95ed74e995d8957ce9ad0": "502dcae47ff34429266efee37be528f7",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/804fa68541829bee06ee41a0924f260481b8d6": "6ad9bed6614c71aa8bb1e6a1fae220f0",
".git/objects/b3/a0fa7baf6c970bb8728418f71a89237b19c0fd": "98f479de49effd64399f7e2fd21b7ca5",
".git/objects/b4/7baed0b85306b7c2339167ee7aa484e9461fe6": "84999f0be6ec7fcfc58ee5d84a56276e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3c409624c6807a2fb95d905fa76b57ea3c4a89": "2a0292324a4e8fd494b50648dd8e9285",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "d782f8a82d795ae96da7df117f4c51bd",
".git/objects/be/b1a8e755966bdca739d2608f7327e624e547e9": "34f8671627c634dfd3c56197980fde52",
".git/objects/c2/e213c846233712341c7e2808343ac27fe7449e": "5d5be1e3e3a1d4849bc2ddafefbecde5",
".git/objects/c4/3daa9a522522358a0227f2ddacf0524be1105b": "5a535edc46196f4a9b8540d9caad01b7",
".git/objects/c4/ce8eb35855245a7df7b5b552c3a5db682a1ef4": "33f6730f157c93e3b1f2b52498d54379",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/ce43d1eb6a5be7fceb9d0e6c505b44bba9c69a": "b4b8a7397ba16980b1f711e434ae111d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/8bd0ebce49f80ac2f44e25164c35093d177575": "78f832a2b713294d7138018e6aa4541c",
".git/objects/c9/0b8ebed11ffe5a0d618e3833a61028337fa09d": "77ae79b71bc827374ef924e584d33677",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "963cafb9d7043e8a4b08248318128b18",
".git/objects/ca/d17f0d81a8027738760cbc965f05b0b9e5ea10": "0e22c95b56a35d01fe330e78f321d7fe",
".git/objects/ca/e799e2a9507cedc22738aa244a0cc901954e3d": "64930f53bddf2458836553fe9f60bdd1",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/7b810e0644a97b952905d32496d5b430ae6f61": "18c86dbccd084ef25383cb112805bf82",
".git/objects/d1/b905780e4461bd15878a30769ff38c43ad4a8c": "f03dcc6eeb1fdf7e7a990083e67cf0a2",
".git/objects/d2/cd4a0ecbd6c5f24ddc6ee7d9d7e60da1bf74eb": "0e7266c6220faa8c1fac8e06fe32e99a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5f521f8c4095ee7b30915e2556d49e93437660": "5d2dae151505a9805be15b1f964eb1d4",
".git/objects/d4/66ea793cf1b8d6e2a8e0307b1c1619c565db31": "8d7d202019cc6c003f35cc0eb93d50ef",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cf50f3c8c26b4bb7e30c0065a15a44337e652e": "dfbe4c3139e2a2b8e2f16d5b854c998c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/0c7e7c34a0517a996da07f8a0c17729c2d8c4f": "de9dbf03153f969464635faecedfa196",
".git/objects/e0/5370438bd2556b4c9529fd655b81bb69ee6219": "aa4d25aab3dfd8f31d7e7231eabb8e17",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/5dba9d58b2d27ed9fded42eeaeb327faaae3c3": "8cfe73db93a14ee2a9e5d9b57ccdcb58",
".git/objects/e5/f4c4aa128fe75c981b2b55394ae0fcb8ecb0c2": "ec2b489f259b9a5364312bac9755658d",
".git/objects/e6/47d870ce58313448adde27a4aec55aa74de74b": "64e8bc55d45426ef85ad1b6f250dbb77",
".git/objects/e7/11614947746c694c375dba2cf978dd2efefc65": "bbaf4252bd5bb532fb63400801a4fec5",
".git/objects/e7/2c83686e663c60963ef2ee700c4ed18fe2c66b": "4892676d1158b5deec91893ee9319a7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e56decfb6d806efa4bed763acbd5c28aeafc8c": "90c529aab84b83c323d8c9ed1fff0951",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/ee/3f0590f530fc2f479f728d40b0b3727de8b515": "59fb1e099f53f176cb647bd1044a8fa8",
".git/objects/ee/c78252b90109882b9bc05cc8b657b4fd26438e": "be32fd0f253c12acd4c9ec1e59a2c9dd",
".git/objects/f0/f17c94d9c2c1128e4a288f5e61f787e91d580b": "8e036af64ad46b6884650e7529182332",
".git/objects/f1/e0a48d33fdf4c0f9df3bb172f0762b8785cd08": "0a2ec1369ab6e74396d045aa8c353b17",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1516e2b6cb2eed13f76d654e9863eba6f15588": "dacded0dbeb96d9efcb4ccce188394b4",
".git/objects/f6/8c24d6bf96317b766c9c51f5d8bb2bdf914abf": "3ec631af70bd02008f75c1a3869d1499",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/f7/315e0e644f778d2125047800c92f360145bcd8": "4257bd08e5cd3ba0abb7ecab6a5c66db",
".git/refs/heads/main": "c785fe38bd07f8a9af8e84f9809069dc",
".git/refs/heads/master": "c937b742b61141f0813e484a4b7f4cd3",
".git/refs/remotes/gitea/main": "d17c0a9211114bbd89db9d2c97c8c197",
".git/refs/remotes/origin/main": "c785fe38bd07f8a9af8e84f9809069dc",
"assets/AssetManifest.bin": "1c485728c85f2c994a76c0279207a8be",
"assets/AssetManifest.bin.json": "cfcf245074769f08dbe6a4e5edc46a87",
"assets/AssetManifest.json": "2d307005fcc54eb3e2e2f8c6c0a5929b",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/favicon.png": "91219fd886ef96c859a1c5e8b33be315",
"assets/assets/images/logo_nh.png": "0d5530fedeb13277de27fa05083d401a",
"assets/assets/images/logo_nh_b.png": "ce82966c82a40497ab9e07d37117e576",
"assets/assets/images/placeholder_no_image.jpg": "34fb34edbb4e229bac651b4aa0c7c7a9",
"assets/assets/referencia/categoria_componente.png": "27cfd908d0c4c184215cdc1fddadc754",
"assets/assets/referencia/contexto_proyecto.md": "c83384428b3de34e7e54cd26eb83d1f4",
"assets/assets/referencia/crm.png": "7c386d942bb4ec4845d524498b612d7e",
"assets/assets/referencia/fn_racks_con_componentes.txt": "7e351771b69da54e2ddc16f5d4d5e1ce",
"assets/assets/referencia/fn_topologia_por_negocio.txt": "05ced626a9f8c7b9f50fa2b41d7d063b",
"assets/assets/referencia/landingMap1.png": "ecbaaa55cb1e31e4b9bcff663ad1c8af",
"assets/assets/referencia/landingMap2.png": "a78273e84cc000d24ffd53df63bee321",
"assets/assets/referencia/loginpage.png": "857c1ddffb98a386cbb6d7291c67ebd1",
"assets/assets/referencia/rol_logico_componente.png": "96561e005e77257a16a5f4005f972370",
"assets/assets/referencia/tablas_energymedia.txt": "b10e8415ae9cab2329f58a28414f893a",
"assets/assets/referencia/tablas_nethive.txt": "659e43ae602319d9fae65c7d1c44bf75",
"assets/assets/referencia/tipo_distribucion.png": "7d559ee681541554ccee796d2727f4df",
"assets/assets/referencia/topologia_referencia.png": "849d13cec3faa91c9bcc849a9468f4bd",
"assets/assets/referencia/video_player_caro.text": "19220c891ca2fd69379e5327fa540412",
"assets/assets/referencia/video_player_live.text": "889e748115b4cebea1c0d8e131637a5e",
"assets/assets/referencia/video_thumbnail.txt": "1e81c93a2449d2afe4a47a911793bdff",
"assets/FontManifest.json": "d30b03a8b49910a8c5230b7cc8170176",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b05e1d863a72ae79da76dac119414397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/drop_down_list_menu/assets/screenshot2.png": "e14dc19097f4f4378209dda4eae351a2",
"assets/packages/drop_down_list_menu/assets/screenshot3.png": "3425c02a1a9f304106a3da73bafa27db",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/mir.png": "c87d1479c2784a534751238167b254b5",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d6f9fb4f334e1952be6f8e4edfe30fa0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52bbced1962bcc27e88e6f52a922dcf2",
"/": "52bbced1962bcc27e88e6f52a922dcf2",
"main.dart.js": "6445f8523f0aeb6d1988f42ac9292a0c",
"manifest.json": "44e752b9cb6c2faa5f17ea95b11bdaad",
"version.json": "6e65b32e068e3109189398dd8667bb8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
