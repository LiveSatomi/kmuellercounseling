import React from "react";
import "./_Personal.scss";
import bemNames from "util/bemnames";

type PersonalProps = {
    seekingEmploymentSince?: Date;
    employer?: string;
};

const bem = bemNames.create("Personal");

class Personal extends React.Component<PersonalProps> {
    static defaultProps = {
        seekingEmploymentSince: null,
        employer: null,
    };

    render() {
        return (
            <div className={bem.b()}>
                <p className={bem.e("line")}>
                    Today you are one step closer to a new you where you feel
                    empowered and on a positive path to growth and well-being.
                    As a therapist with a client centered and strength based
                    approach, my goal is to help you uncover your true potential
                    and lead a life that is worth celebrating. While we can't
                    change difficult situations of the past, we can work
                    together to better understand and resolve challenges in your
                    life. By applying complementary therapy approaches and
                    techniques, we will unearth long-standing behavior patterns
                    or negative perceptions that may be holding you back from
                    experiencing a more fulfilling and meaningful life. If
                    you're looking for extra support and guidance through a
                    challenging situation or you're just ready to move in a new
                    direction in your life, I look forward to working with you
                    to achieve your goals. Please call or email me for an
                    individual, couples or family therapy consultation today.
                </p>
            </div>
        );
    }
}

export default Personal;
