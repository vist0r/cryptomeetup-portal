// const ABOUT_CONTENT = require('raw-loader!./about_zh.html');
import ABOUT_CONTENT from './about_zh.html';

export default {
  switch_lang: '切换语言',
  English: '英语',
  Chinese: '中文',
  Japanese: '日语',
  Korean: '韩语',
  token_view: '通证',
  about_view: '关于',
  login: '登录',
  logout: '登出',
  back: '后退',
  filter_country_or_region: '选择国家或地区',
  my_EOS: '我的EOS',
  my_CMU: '我的CMU',
  my_staked: '我的抵押',
  total_staked: '总共抵押',
  my_dividend: '我的分红',
  total_dividend: '合计分红',
  contract_supply: '合约发行量',
  contract_balance: '合约储备金',
  contract_price: '合约币价',

  payout_pool_tab: '红利池',
  my_assets_tab: '我的资产',
  stake_tab: '抵押',
  bancor_trade_tab: 'Bancor交易',

  stake_btn: '抵押',
  unstake_btn: '取消抵押',
  buy_btn: '购买',
  sell_btn: '卖出',
  claim_btn: '领取分红',
  payout_btn: '红利',

  last_buyer: '最后的买家',
  count_down: '剩余时间',
  prize_pool: '奖池',
  ABOUT_CONTENT,

  cmu_creator: '由Cryptomeetup（币聚）团队倾力打造',
  powered_by: 'Powered By',

  stake_number_alert: '你要抵押多少CMU？',
  stake_successful_alert: 'CMU 代币抵押成功',
  stake_pay_attention_alert: '稍后留意 My Staked',
  stake_confirmed_btn: '确认',
  unstake_alert: '你要撤销抵押多少 CMU ？',
  unstake_success: '撤销抵押成功',
  claim_success: '提取分红成功',
  wait_alert: '请耐心等待',
  claim_fail: '提取失败',
  buy_cmu_alert: '你要购买多少EOS等值的CMU？',
  buy_cmu_success_alert: 'CMU 代币购买成功',
  after_buy_cmu_alert: '稍后留意 CMU 余额变动',
  sell_cmu_alert: '你要卖出多少CMU？',
  ok: '好的',
  sell_cmu_success_alert: 'CMU 成功卖出',
  after_sell_cmu_alert: '稍后留意 EOS 余额变动',
  scatter_login_fail: 'Scatter登入失败：用户的Scatter钱包已被锁定，在进行下一步之前用户已经被通知',
  scatter_login_success: '成功使用Scatter钱包登录',

  buy_land_withApp_success: '转账成功，30秒内自动刷新数据，即可确认你是否为新地主。一切以区块链上交易记录为准，购买地皮失败则退款。',
  buy_land_success_alert: '成功购买',
  buy_land_success_msg: '转账已提交到区块链，30秒后自动刷新数据，即可确认是否购买成功。',
  buy_land_success_comfm: '好的',
};
