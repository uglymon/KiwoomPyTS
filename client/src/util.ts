export function getHangulCount(str: string) {
    const match = str.match(/[가-힣]/g);
    return match ? match.length : 0;
}
