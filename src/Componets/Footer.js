import React from 'react'

export default function Footer(props) {
    return (
        <>
            <div>
                <footer id="sticky-footer" className="flex-shrink-0 py-4">
                    <div className="container text-center">
                        <small>Copyright &copy;{props.title}</small>
                    </div>
                </footer>
            </div>
        </>
    );
}
