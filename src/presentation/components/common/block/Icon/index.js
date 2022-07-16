var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Wrapper, Inner, Svg } from './styles';
const Icon = (props) => {
    const { icon } = props, restProps = __rest(props, ["icon"]);
    if (!icon || !icon.viewBox || !icon.id) {
        return null;
    }
    try {
        const [p1, p2, p3, p4] = icon.viewBox.split(' ');
        const ratio = (Number(p4) - Number(p2)) / (Number(p3) - Number(p1));
        return (_jsx(Wrapper, Object.assign({}, restProps, { children: _jsx(Inner, Object.assign({ style: { paddingBottom: `${100 * ratio}%` } }, { children: _jsx(Svg, Object.assign({ viewBox: icon.viewBox }, { children: _jsx("use", { xlinkHref: `#${icon.id}` }, void 0) }), void 0) }), void 0) }), void 0));
    }
    catch (_a) {
        return null;
    }
};
export default Icon;
