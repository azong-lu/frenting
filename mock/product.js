// import Mock from 'mockjs';

const List = [
  {
    id:Math.ceil(Math.random()*100),
    area_direction: '18M² | 朝南',
    floor: '4/6',
    house_src_type: 'straightRent',
    house_address_desc: '7号线(上海大学站)，步行8分钟',
    house_area_desc: '宝山-上大',
    house_desc: '按日退租 · 七日退款',
    house_id: '2762005',
    house_image_desc: '平台实拍·视频',
    house_img_source: '房东提供',
    house_main_image:
      'https://cdn.baletoo.cn/Uploads/housephoto/2763/2762005/cos_3523d90d77394486.png@!330_260',
    house_photo_num: 6,
    house_status: 0,
    house_tags: ['近地铁', '新上架', '非一楼', '朝南'],
    house_title: '合租 当代高邸（聚丰园路95弄） 朝南4楼',
    house_video_source: '平台实拍',
    month_rent: 3500,
    operator_im_contact: 1,
    score_number: 0,
    subdistrict_address: '聚丰园路95弄1-57号',
    subdistrict_name: '当代高邸（聚丰园路95弄）',
  },
  {
    id: Math.ceil(Math.random()*100),
    area_direction: '19M² | 朝东南',
    floor: '4/6',
    house_src_type: 'professionBroker',
    house_address_desc: '7号线(罗南新村站)，步行13分钟',
    house_area_desc: '宝山-罗店',
    house_desc: '按日退租 · 七日退款',
    house_id: '2762005',
    house_image_desc: '平台实拍·视频',
    house_img_source: '房东提供',
    house_main_image:
      'https://cdn.baletoo.cn/Uploads/housephoto/1221/1220145/cos_055d58eb29934b2e.png@!330_260',
    house_photo_num: 6,
    house_status: 0,
    house_tags: ['近地铁', '新上架', '非一楼', '朝南'],
    house_title: '合租 美罗家园罗安苑 朝北10楼',
    house_video_source: '平台实拍',
    month_rent: 1680,
    operator_im_contact: 1,
    score_number: 0,
    subdistrict_address: '美安路215弄1~18号',
    subdistrict_name: '美罗家园罗安苑',
  },
  {
    id: Math.ceil(Math.random()*100),
    area_direction: '20M² | 朝西南',
    floor: '4/6',
    house_src_type: 'convenienceAgent',
    house_address_desc: '7号线;13号线(长寿路站)，步行8分钟',
    house_area_desc: '普陀-长寿路',
    house_desc: '按日退租 · 七日退款',
    house_id: '2762005',
    house_image_desc: '平台实拍·视频',
    house_img_source: '房东提供',
    house_main_image:
      'https://cdn.baletoo.cn/Uploads/housephoto/5393/5392619/cos_02a658076ec04681.png@!330_260',
    house_photo_num: 6,
    house_status: 0,
    house_tags: ['近地铁', '新上架', '电梯房', '非一楼', '主卧'],
    house_title: '合租 沙田大厦 朝西南26楼',
    house_video_source: '平台实拍',
    month_rent: 2560,
    operator_im_contact: 1,
    score_number: 0,
    subdistrict_address: '长寿路569弄1号',
    subdistrict_name: '沙田大厦',
  },
];

const newList = [];

for (let i = 0; i < 5; i++) {
  newList.push(...List);
}

// Mock.mock('/product/list', {
//   data: {
//     totalCount: 15,
//     modelList: newList,
//   },
// });

const proxy = {
  'GET /product/list': {
    data: {
      totalCount: 15,
      modelList: newList,
    },
  },
};

module.exports = proxy;
