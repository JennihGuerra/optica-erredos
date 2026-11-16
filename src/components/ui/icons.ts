/**
 * Iconos Material Symbols Rounded (Google Fonts), incluidos como SVG en línea.
 * Solo se empaquetan los iconos importados aquí.
 */
import home from '@material-symbols/svg-400/rounded/home.svg?raw';
import homeFill from '@material-symbols/svg-400/rounded/home-fill.svg?raw';
import eyeglasses from '@material-symbols/svg-400/rounded/eyeglasses.svg?raw';
import eyeglassesFill from '@material-symbols/svg-400/rounded/eyeglasses-fill.svg?raw';
import visibility from '@material-symbols/svg-400/rounded/visibility.svg?raw';
import visibilityFill from '@material-symbols/svg-400/rounded/visibility-fill.svg?raw';
import apartment from '@material-symbols/svg-400/rounded/apartment.svg?raw';
import apartmentFill from '@material-symbols/svg-400/rounded/apartment-fill.svg?raw';
import storefront from '@material-symbols/svg-400/rounded/storefront.svg?raw';
import storefrontFill from '@material-symbols/svg-400/rounded/storefront-fill.svg?raw';
import search from '@material-symbols/svg-400/rounded/search.svg?raw';
import close from '@material-symbols/svg-400/rounded/close.svg?raw';
import chat from '@material-symbols/svg-400/rounded/chat.svg?raw';
import accessibilityNew from '@material-symbols/svg-400/rounded/accessibility_new.svg?raw';
import textIncrease from '@material-symbols/svg-400/rounded/text_increase.svg?raw';
import textDecrease from '@material-symbols/svg-400/rounded/text_decrease.svg?raw';
import restartAlt from '@material-symbols/svg-400/rounded/restart_alt.svg?raw';
import locationOn from '@material-symbols/svg-400/rounded/location_on.svg?raw';
import schedule from '@material-symbols/svg-400/rounded/schedule.svg?raw';
import arrowForward from '@material-symbols/svg-400/rounded/arrow_forward.svg?raw';
import verified_user from '@material-symbols/svg-400/rounded/verified_user.svg?raw';
import cleaning_services from '@material-symbols/svg-400/rounded/cleaning_services.svg?raw';
import construction from '@material-symbols/svg-400/rounded/construction.svg?raw';
import directions from '@material-symbols/svg-400/rounded/directions.svg?raw';
import i_sunny from '@material-symbols/svg-400/rounded/sunny.svg?raw';
import i_event_available from '@material-symbols/svg-400/rounded/event_available.svg?raw';
import i_handshake from '@material-symbols/svg-400/rounded/handshake.svg?raw';
import i_explore from '@material-symbols/svg-400/rounded/explore.svg?raw';
import i_widgets from '@material-symbols/svg-400/rounded/widgets.svg?raw';
import i_image from '@material-symbols/svg-400/rounded/image.svg?raw';
import i_sell from '@material-symbols/svg-400/rounded/sell.svg?raw';
import i_precision_manufacturing from '@material-symbols/svg-400/rounded/precision_manufacturing.svg?raw';
import i_workspace_premium from '@material-symbols/svg-400/rounded/workspace_premium.svg?raw';
import i_person from '@material-symbols/svg-400/rounded/person.svg?raw';
import i_groups from '@material-symbols/svg-400/rounded/groups.svg?raw';
import i_chevron_right from '@material-symbols/svg-400/rounded/chevron_right.svg?raw';
import i_tune from '@material-symbols/svg-400/rounded/tune.svg?raw';
import i_check from '@material-symbols/svg-400/rounded/check.svg?raw';
import i_search_off from '@material-symbols/svg-400/rounded/search_off.svg?raw';
import i_arrow_back from '@material-symbols/svg-400/rounded/arrow_back.svg?raw';
import i_build from '@material-symbols/svg-400/rounded/build.svg?raw';
import i_info from '@material-symbols/svg-400/rounded/info.svg?raw';
import i_account_balance from '@material-symbols/svg-400/rounded/account_balance.svg?raw';
import i_school from '@material-symbols/svg-400/rounded/school.svg?raw';
import i_diversity_3 from '@material-symbols/svg-400/rounded/diversity_3.svg?raw';
import i_edit_note from '@material-symbols/svg-400/rounded/edit_note.svg?raw';
import i_fact_check from '@material-symbols/svg-400/rounded/fact_check.svg?raw';
import i_forum from '@material-symbols/svg-400/rounded/forum.svg?raw';
import i_error from '@material-symbols/svg-400/rounded/error.svg?raw';
import i_check_circle from '@material-symbols/svg-400/rounded/check_circle.svg?raw';
import i_handshake_fill from '@material-symbols/svg-400/rounded/handshake-fill.svg?raw';
import i_hearing from '@material-symbols/svg-400/rounded/hearing.svg?raw';
import i_task_alt from '@material-symbols/svg-400/rounded/task_alt.svg?raw';
import i_map from '@material-symbols/svg-400/rounded/map.svg?raw';
import i_chevron_left from '@material-symbols/svg-400/rounded/chevron_left.svg?raw';
import i_pause from '@material-symbols/svg-400/rounded/pause.svg?raw';
import i_play_arrow from '@material-symbols/svg-400/rounded/play_arrow.svg?raw';

export const icons = {
  home,
  'home-fill': homeFill,
  eyeglasses,
  'eyeglasses-fill': eyeglassesFill,
  visibility,
  'visibility-fill': visibilityFill,
  apartment,
  'apartment-fill': apartmentFill,
  storefront,
  'storefront-fill': storefrontFill,
  search,
  close,
  chat,
  accessibility_new: accessibilityNew,
  text_increase: textIncrease,
  text_decrease: textDecrease,
  restart_alt: restartAlt,
  location_on: locationOn,
  schedule,
  arrow_forward: arrowForward,
  cleaning_services,
  verified_user,
  construction,
  directions,
  sunny: i_sunny,
  event_available: i_event_available,
  handshake: i_handshake,
  explore: i_explore,
  widgets: i_widgets,
  image: i_image,
  sell: i_sell,
  groups: i_groups,
  person: i_person,
  precision_manufacturing: i_precision_manufacturing,
  workspace_premium: i_workspace_premium,
  chevron_right: i_chevron_right,
  tune: i_tune,
  check: i_check,
  search_off: i_search_off,
  arrow_back: i_arrow_back,
  build: i_build,
  info: i_info,
  account_balance: i_account_balance,
  school: i_school,
  diversity_3: i_diversity_3,
  edit_note: i_edit_note,
  fact_check: i_fact_check,
  forum: i_forum,
  error: i_error,
  check_circle: i_check_circle,
  'handshake-fill': i_handshake_fill,
  hearing: i_hearing,
  task_alt: i_task_alt,
  map: i_map,
  chevron_left: i_chevron_left,
  pause: i_pause,
  play_arrow: i_play_arrow,
} as const;

export type IconName = keyof typeof icons;
